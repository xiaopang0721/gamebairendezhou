/**
* 百人德州
*/
module gamebairendezhou.page {
	export class BairendezhouPage extends game.gui.base.Page {
		static readonly BET_TIME: number = 15;   //下注时长
		static readonly BET_MAX: number[] = [5000, 8000, 25000, 50000];   //投注限额

		private _viewUI: ui.ajqp.game_ui.bairendezhou.BaiRenDeZhou_HUDUI;
		private _player: any;
		private _playerInfo: any;
		private _bairendezhouHudMgr: BairendezhouHudMgr;
		private _avatar: AvatarUIShow;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
				Path_game_bairendezhou.ui_bairendezhou_effect_sk + "bairendezhou.png",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "anniug.atlas",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.bairendezhou.BaiRenDeZhou_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);
			if (!this._bairendezhouHudMgr) {
				this._bairendezhouHudMgr = new BairendezhouHudMgr(this._game);
				this._bairendezhouHudMgr.on(BairendezhouHudMgr.EVENT_RETURN_MAPINFO, this, this.onUpdateMapinfo);
			}

			this._viewUI.list_room.itemRender = this.createChildren("game_ui.tongyong.ChangCi1UI", BairendezhouHUDRender);
			this._viewUI.list_room.renderHandler = new Handler(this, this.renderHandler);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			(this._viewUI.view as TongyongHudPage).onOpen(this._game, BairendezhouPageDef.GAME_NAME);
			if (!this._avatar) {
				this._avatar = new AvatarUIShow();
				this._viewUI.box_sk.addChild(this._avatar);
			}
			this._avatar.loadSkeleton(Path_game_bairendezhou.ui_bairendezhou_effect_sk + "bairendezhou", 224, 353);

			let datas = [];
			for (let i = 0; i < BairendezhouPage.BET_MAX.length; i++) {
				let data = [];
				data[0] = BairendezhouPage.BET_MAX[i];
				data[1] = i;
				datas.push(data);
			}

			this._viewUI.list_room.dataSource = datas;

			this._game.playMusic(Path_game_bairendezhou.music_bairendezhou + "brdz_bgm.mp3");
		}

		public close(): void {
			this._player = null;
			if (this._viewUI) {
				this._viewUI.list_room.dataSource = [];
				if (this._bairendezhouHudMgr) {
					this._bairendezhouHudMgr.off(BairendezhouHudMgr.EVENT_RETURN_MAPINFO, this, this.onUpdateMapinfo);
					this._bairendezhouHudMgr.clear();
					this._bairendezhouHudMgr = null;
				}
				if (this._avatar) {
					this._avatar.clear();
					this._avatar.destroy();
					this._avatar = null;
				}
				this._game.stopMusic();
				Laya.Tween.clearAll(this);
			}
			super.close();
		}

		private renderHandler(cell: BairendezhouHUDRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}

		//帧心跳
		update(diff: number) {
			if (this._avatar) {
				this._avatar.onDraw();
			}
			if (this._bairendezhouHudMgr) {
				this._bairendezhouHudMgr.update(diff);
			}
			this.onTime();
		}

		private onUpdateMapinfo(): void {
			let data = this._bairendezhouHudMgr.data;
			this._viewUI.list_room.cells.forEach(element => {
				let cell = element as BairendezhouHUDRender;
				let i = cell.index;
				if (cell.index >= 0) {
					if (data[i][2]) {
						let roadInfo = data[i][2];
						let posInfo = data[i][3];
						let arr = [];
						if (roadInfo && roadInfo.length) {
							for (let j = 0; j < roadInfo.length; j++) {
								arr.push(posInfo[j][0]);
								arr.push(posInfo[j][1]);
								arr.push(roadInfo[j]);
							}
						}
						cell.setGridData(arr);
					}
				}
			});
		}

		private onTime(): void {
			if (!this._bairendezhouHudMgr || !this._bairendezhouHudMgr.data || !this._bairendezhouHudMgr.data.length) return;
			let data = this._bairendezhouHudMgr.data;
			this._viewUI.list_room.cells.forEach(element => {
				let cell = element as BairendezhouHUDRender;
				let i = cell.index;
				if (cell.index >= 0) {
					let curTime = this._game.sync.serverTimeBys;
					let endTime = data[i][1];
					let time = Math.floor(endTime - curTime);
					if (data[i][0] == 4) {//下注中
						if (time <= 0) {
							cell.state = "结算中...";
						} else {
							cell.state = "下注中" + time + "s";
						}
					} else {
						cell.state = "结算中...";
					}
				}
			});
		}
	}

	class BairendezhouHUDRender extends ui.ajqp.game_ui.tongyong.ChangCi1UI {
		public index: number;
		public isTween: boolean;
		private _game: Game;
		private _max: number;
		private _gridEditor: GridEditor;
		private _textureTypes = {
			"L": Path_game_bairendezhou.ui_bairendezhou + "tu_x1.png",//蓝
			"H": Path_game_bairendezhou.ui_bairendezhou + "tu_g1.png",//红
			"1": PathGameTongyong.ui_tongyong_general + "plszx_1.png",//和数量
			"2": PathGameTongyong.ui_tongyong_general + "plszx_2.png",
			"3": PathGameTongyong.ui_tongyong_general + "plszx_3.png",
			"4": PathGameTongyong.ui_tongyong_general + "plszx_4.png",
			"5": PathGameTongyong.ui_tongyong_general + "plszx_5.png",
			"6": PathGameTongyong.ui_tongyong_general + "plszx_6.png",
			"7": PathGameTongyong.ui_tongyong_general + "plszx_7.png",
			"8": PathGameTongyong.ui_tongyong_general + "plszx_8.png",
			"9": PathGameTongyong.ui_tongyong_general + "plszx_9.png",
		}

		constructor() {
			super();
		}

		setData(game: Game, data: any) {
			if (!data) {
				this.visible = false;
				return;
			}
			if (this._max == data[0]) {
				return;
			}
			this._game = game;
			this._max = data[0];
			this.index = data[1];
			this.visible = true;
			this.on(LEvent.CLICK, this, this.onClick);
			this.show();
		}

		destroy() {
			this.off(LEvent.CLICK, this, this.onClick);
			if (this._gridEditor) {
				this._gridEditor.removeSelf()
				this._gridEditor.destroy();
				this._gridEditor = null;
			}
			super.destroy();
		}

		setGridData(arr) {
			this._gridEditor.setData(arr);
		}

		set state(v) {
			this.txt_status.text = v.toString();
		}

		private show() {
			if (!this._gridEditor) {
				this._gridEditor = new GridEditor(19, 16.5, 30, 6, this._textureTypes, false);
				this.box_grid.addChild(this._gridEditor);
			}
			this.txt_max.text = this._max.toString();
			this._gridEditor.x = 1;
			this._gridEditor.y = 0;
			this.img_bg.skin = PathGameTongyong.ui_tongyong + 'hud/difen_2_' + this.index + '.png';
		}

		private onClick() {
			this._game.sceneObjectMgr.intoStory(BairendezhouPageDef.GAME_NAME, Web_operation_fields['GAME_ROOM_CONFIG_BAIRENDEZHOU_' + (this.index + 1)].toString(), true);
		}
	}
}