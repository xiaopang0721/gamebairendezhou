/**
* name 
*/
module gamebairendezhou.manager {
	const DEAR_CARD_ROUND = 3; //发牌轮数 1：蓝红各一张 2：蓝红各一张 3：公共五张
	const PUBLIC_CARD_COUNT = 5; //公共牌5张

	export class BairendezhouMgr extends gamecomponent.managers.PlayingCardMgrBase<BairendezhouData>{
		static readonly EACH_CARD_NUM = 2; //左右各一手牌

		static readonly MAPINFO_OFFLINE: string = "BairendezhouMgr.MAPINFO_OFFLINE";//假精灵
		static readonly DEAL_OVER: string = "BairendezhouMgr.DEAL_OVER";//发牌结束
		static readonly OPEN_OVER: string = "BairendezhouMgr.OPEN_OVER";//开牌结束
		static readonly MOVE_CARD: string = "BairendezhouMgr.MOVE_CARD";//移牌结束
		static readonly BACK_CARD: string = "BairendezhouMgr.BACK_CARD";//牌归位结束
		static readonly OPEN_ANI: string = "BairendezhouMgr.OPEN_ANI";//开牌动画

		private _unitOffline: UnitOffline;//假精灵信息
		private _isCancel: boolean = false;
		private _isReConnect: boolean = true;
		private _isReDrawCards: boolean = false;
		private _isMoveCards: boolean = false;
		private _cardsIndex: Array<number> = [];//牌的归属位置

		constructor(game: Game) {
			super(game);
		}

		get unitOffline() {
			return this._unitOffline;
		}

		set unitOffline(v) {
			this._unitOffline = v;
			this.event(BairendezhouMgr.MAPINFO_OFFLINE)
		}

		get isCancel() {
			return this._isCancel;
		}

		set isCancel(v) {
			this._isCancel = v;
			this.event(BairendezhouMgr.MAPINFO_OFFLINE)
		}

		get isReconnect() {
			return this._isReConnect;
		}

		set isReconnect(v) {
			this._isReConnect = v;
		}

		set cardIndex(v) {
			this._cardsIndex = v;
		}

		get isReDrawCards() {
			return this._isReDrawCards;
		}

		set isReDrawCards(v) {
			this._isReDrawCards = v;
		}

		get allCards() {
			return this._cards;
		}

		get isMoveCards() {
			return this._isMoveCards;
		}

		set isMoveCards(v) {
			this._isMoveCards = v;
		}

		//对牌进行排序 重写不需要排序
		SortCards(cards: any[]) {

		}

		//管理器自己的排序
		sortCards(cards: any[]) {
			if (!cards) return;
			cards.sort((a: BairendezhouData, b: BairendezhouData) => {
				return a.Compare(b);
			});
		}

		getCardValue(card): number {
			let cardValue = 0;
			card = card - 1;
			cardValue = card % 13;
			if (cardValue == 0)
				cardValue = 13;
			return cardValue;
		}

		initCard(all_val: Array<number>) {
			let card_arr = [];
			for (let i: number = 0; i < all_val.length; i++) {
				let card: BairendezhouData;
				card = new BairendezhouData();
				card.Init(all_val[i]);
				card_arr.push(card);
				//换牌,重新赋值
				if (i == 1 || i == 3) {
					this._cards[i].Init(all_val[i]);
				}
			}
			return card_arr;
		}

		setValue(_cards, i) {
			if (!this._cards.length) return;
			if (!_cards) return;
			let card = this._cards[i] as BairendezhouData;
			if (card) {
				card.Init(_cards.GetVal());
				card.index = i;
				card.sortScore = i;
				card.fanpai();
			}
		}

		setValue1(_cards, i) {
			if (!this._cards.length) return;
			if (!_cards) return;
			let card = this._cards[i] as BairendezhouData;
			card.Init(_cards.GetVal());
			card.index = i;
			card.sortScore = i;
			card.fanpai1();
		}

		sort() {
			//发3牌轮 1：蓝红各一张 2：蓝红各一张 3：公共五张
			let allcards = this._cards;
			for (let i = 0; i < DEAR_CARD_ROUND; i++) {
				let index = i == 2 ? PUBLIC_CARD_COUNT : BairendezhouMgr.EACH_CARD_NUM
				for (let j = 0; j < index; j++) {
					let card = allcards[i * BairendezhouMgr.EACH_CARD_NUM + j] as BairendezhouData;
					//公共牌
					if (index == PUBLIC_CARD_COUNT) {
						card = allcards[i * BairendezhouMgr.EACH_CARD_NUM + j] as BairendezhouData;
					}
					if (card) {
						card.myOwner(i);
						card.index = j;
						card.sortScore = -j;
						if (j == 0 && (i == 0 || i == 1)) {
							card.scaleX = 1;
							card.isShow = true;
						} else {
							card.scaleX = -1;
						}
					}
				}
			}
		}

		//发牌
		fapai() {
			let allcards = this._cards;
			let count = 0;
			let counter = 0;
			for (let i = 0; i < DEAR_CARD_ROUND; i++) {
				let index = i == 2 ? PUBLIC_CARD_COUNT : BairendezhouMgr.EACH_CARD_NUM
				for (let j = 0; j < index; j++) {
					Laya.timer.once(120 * count, this, () => {
						this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
						let card = allcards[j * BairendezhouMgr.EACH_CARD_NUM + i] as BairendezhouData;
						//公共牌
						if (index == PUBLIC_CARD_COUNT) {
							card = allcards[i * BairendezhouMgr.EACH_CARD_NUM + j] as BairendezhouData;
						}
						if (!card) return;
						card.fapai();
						counter++;
						if (counter >= allcards.length) {
							this.event(BairendezhouMgr.DEAL_OVER);
						}
					});
					count++;
				}
			}
		}

		//重连发牌
		refapai() {
			for (let i: number = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (!card) return;
				card.refapai();
			}
		}

		//移动位置
		movepai() {
			for (let i: number = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (!card) return;
				card.movepai();
			}
		}

		//移动位置
		backpai() {
			for (let i: number = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (!card) return;
				card.backpai();
			}
		}

		//置灰牌
		zhihui(zhihui: boolean) {
			for (let i: number = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (!card) return;
				card.disable = zhihui;
			}
		}

		//置灰牌
		zhihuiByIndex(index: number) {
			let card = this._cards[index];
			if (!card) return;
			card.disable = false;
		}

		//牌发光
		light(light: boolean) {
			for (let i: number = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				if (!card) return;
				card.light = light;
			}
		}

		//牌发光
		lightByIndex(index: number) {
			let card = this._cards[index];
			if (!card) return;
			card.light = true;
		}

		//隐藏牌
		hidepai(index: number) {
			let card = this._cards[index];
			if (!card) return;
			card.hidepai();
		}

		//显示牌
		showpai(index: number) {
			let card = this._cards[index];
			if (!card) return;
			card.showpai();
		}
	}
}