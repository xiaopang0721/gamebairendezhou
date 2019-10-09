/**
*游戏剧情
*/
module gamebairendezhou.story {
	const enum MAP_STATUS {
		PLAY_STATUS_NONE = 0, // 准备阶段
		PLAY_STATUS_GAMESTART = 1, // 游戏开始
		PLAY_STATUS_WASH_CARD = 2, // 洗牌阶段
		PLAY_STATUS_PUSH_CARD = 3, // 发牌阶段
		PLAY_STATUS_BET = 4, // 下注阶段
		PLAY_STATUS_STOP_BET = 5,// 停止下注阶段
		PLAY_STATUS_SHOW_CARD = 6, // 开牌阶段
		PLAY_STATUS_SETTLE = 7, // 结算阶段
		PLAY_STATUS_SETTLE_SHOW = 8, //结算结果展示
		PLAY_STATUS_RELAX = 9, // 休息阶段
	}
	export class BairendezhouStory extends gamecomponent.story.StoryBaiRenBase {
		private _bairendezhouMgr: BairendezhouMgr;
		private _curStatus: number;
		private _bairendezhouMapInfo: BairendezhouMapInfo;
		private _dealCards: Array<number> = [];
		private _openCards: Array<number> = [];

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this.init();
		}

		get bairendezhouMgr() {
			return this._bairendezhouMgr;
		}

		init() {
			if (!this._bairendezhouMgr) {
				this._bairendezhouMgr = new BairendezhouMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
			this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);

			this.onIntoNewMap();
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;
			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(BairendezhouPageDef.PAGE_BAIRENDEZHOU_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._bairendezhouMapInfo = mapinfo as BairendezhouMapInfo;
			if (mapinfo) {

				this.onUpdateBattle();
				this.onUpdateState();
			}
		}

		private onUpdateState(): void {
			if (!this._bairendezhouMapInfo) return;
			let mapStatus = this._bairendezhouMapInfo.GetMapState();
			if (this._curStatus == mapStatus) return;
			this._curStatus = mapStatus;
			switch (this._curStatus) {
				case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段
					this.serverClose();
					break;
				case MAP_STATUS.PLAY_STATUS_GAMESTART:// 游戏开始
					break;
				case MAP_STATUS.PLAY_STATUS_WASH_CARD:// 洗牌阶段
					break;
				case MAP_STATUS.PLAY_STATUS_PUSH_CARD:// 发牌阶段
					break;
				case MAP_STATUS.PLAY_STATUS_BET:// 下注阶段
					break;
				case MAP_STATUS.PLAY_STATUS_STOP_BET:// 停止下注阶段
					break;
				case MAP_STATUS.PLAY_STATUS_SHOW_CARD:// 开牌阶段
					this.onMoveAndBackCards()
					break;
				case MAP_STATUS.PLAY_STATUS_SETTLE:// 结算阶段
					this.onMoveAndBackCards()
					break;
				case MAP_STATUS.PLAY_STATUS_SETTLE_SHOW:// 结算结果展示
					break;
				case MAP_STATUS.PLAY_STATUS_RELAX:// 休息阶段
					break;
			}
		}

		createObj() {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CARD_MARK, BairendezhouData) as BairendezhouData;
			card.pos = new Vector2(965, 200); //牌发出来的位置
			card.rotateAngle = 60;
			return card;
		}

		//打开前两张和公共牌
		private openPublicCards() {
			let count = 1;
			this._bairendezhouMgr.initCard(this._openCards);
			for (let index = 0; index < this._bairendezhouMgr.allCards.length; index++) {
				if (index == 1 || index == 3) continue;
				Laya.timer.once(500 * count, this, () => {
					this._bairendezhouMgr.setValue(index);
					if (index == this._bairendezhouMgr.allCards.length - 1) {
						Laya.timer.once(500, this, () => {
							this._bairendezhouMgr.event(BairendezhouMgr.OPEN_ANI);
						})
					}
				})
				count++;
			}
		}

		//发牌
		private onPushCards(cards: any, refapai: boolean) {
			let handle = new Handler(this, this.createObj);
			this._bairendezhouMgr.Init(cards, handle);
			this._bairendezhouMgr.sort();
			if (refapai) {
				this._bairendezhouMgr.refapai();
			} else {
				this._bairendezhouMgr.fapai();
			}
		}

		//移动牌和归位牌
		private onMoveAndBackCards() {
			if (!this._bairendezhouMapInfo) return;
			if (this._openCards.length < 9) return
			if (this._curStatus == MAP_STATUS.PLAY_STATUS_SHOW_CARD) {
				this._bairendezhouMgr.movepai();
				this._bairendezhouMgr.event(BairendezhouMgr.MOVE_CARD);
				this.openPublicCards();
				this._bairendezhouMgr.isMoveCards = true;
			} else if (this._curStatus == MAP_STATUS.PLAY_STATUS_SETTLE && this._bairendezhouMgr.isMoveCards) {
				this._bairendezhouMgr.backpai();
				this._bairendezhouMgr.event(BairendezhouMgr.BACK_CARD);
			}
		}

		//战斗结构体 出牌
		private onUpdateBattle(): void {
			if (!this._bairendezhouMapInfo) return;
			let battleInfoMgr = this._bairendezhouMapInfo.battleInfoMgr;
			this._dealCards = [];
			this._openCards = [];
			for (let i: number = 0; i < battleInfoMgr.info.length; i++) {
				let info = battleInfoMgr.info[i];
				if (info instanceof gamecomponent.object.BattleInfoDeal) {
					if (info.SeatIndex < 3) {
						let arr = info.Cards.concat();
						if (this._dealCards.length < 4) {
							this._dealCards = this._dealCards.concat(arr)
						}
					} else {
						let arr = info.Cards.concat();
						if (this._openCards.length < 9) {
							this._openCards = this._dealCards.concat(arr)
						}
					}
				}
				if (info instanceof gamecomponent.object.BattleInfoMingPai) {
					if (this._openCards.length >= 3) {
						this._openCards[1] = info.Cards[1]
						this._openCards[3] = info.Cards[3]
					}
				}
			}
			//发牌及断线重连发牌
			if (this._dealCards.length >= 4 && !this._bairendezhouMgr.isReDrawCards) {
				if (this._dealCards.length < 9) {
					this._dealCards = this._dealCards.concat([1, 1, 1, 1, 1])
				}
				if (this._curStatus == MAP_STATUS.PLAY_STATUS_PUSH_CARD) {
					this.onPushCards(this._dealCards, false);
					this._bairendezhouMgr.isReDrawCards = true;
				} else if (this._curStatus > MAP_STATUS.PLAY_STATUS_PUSH_CARD && MAP_STATUS.PLAY_STATUS_RELAX) {
					this.onPushCards(this._dealCards, true);
					this._bairendezhouMgr.isReDrawCards = true;
				}
			}
			//断线重连：开牌阶段及之后进来直接开掉所有牌及显示牌型
			if (this._bairendezhouMgr.isReconnect && this._curStatus >= MAP_STATUS.PLAY_STATUS_SHOW_CARD && !this._bairendezhouMgr.isMoveCards) {
				this._bairendezhouMgr.isReconnect = false;
				let count = 0;
				this._bairendezhouMgr.initCard(this._openCards);
				for (let i = 0; i < this._bairendezhouMgr.allCards.length; i++) {
					this._bairendezhouMgr.setValue1(i);
					count++;
					if (count >= this._openCards.length) {
						Laya.timer.once(1000, this, () => {
							this._bairendezhouMgr.event(BairendezhouMgr.OPEN_OVER);
						})
					}
				}
			}
		}

		enterMap() {
			//各种判断
			this._game.network.call_match_game(this._mapid, this.maplv);
			return true;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			this._bairendezhouMapInfo = null;
			this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
			this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			if (this._bairendezhouMgr) {
				this._bairendezhouMgr = null;
			}
		}

		update(diff: number) {

		}
	}
}