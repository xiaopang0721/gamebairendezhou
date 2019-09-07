/**
* 地图信息
*/
module gamebairendezhou.data {
	export class BairendezhouMapInfo extends gamecomponent.object.MapInfoT<BairendezhouData> {
		//地图状态变更
		static EVENT_STATUS_CHECK: string = "BairendezhouMapInfo.EVENT_STATUS_CHECK";
		//战斗体更新
		static EVENT_BATTLE_CHECK: string = "BairendezhouMapInfo.EVENT_BATTLE_CHECK";
		//牌局号
		static EVENT_GAME_NO: string = "BairendezhouMapInfo.EVENT_GAME_NO";
		//倒计时时间戳更新
		static EVENT_COUNT_DOWN: string = "BairendezhouMapInfo.EVENT_COUNT_DOWN";
		//游戏记录更新
		static EVENT_GAME_RECORD: string = "BairendezhouMapInfo.EVENT_GAME_RECORD";
		//入座列表更新
		static EVENT_SEATED_LIST: string = "BairendezhouMapInfo.EVENT_SEATED_LIST";
		//大路记录变化
		static EVENT_ROAD_RECORD: string = "BairendezhouMapInfo.EVENT_ROAD_RECORD";
		//牌型记录变化
		static EVENT_CARD_RECORD: string = "BairendezhouMapInfo.EVENT_CARD_RECORD";

		constructor(v: SceneObjectMgr) {
			super(v, () => { return new BairendezhouData() });
		}

		//当对象更新发生时
		protected onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(BairendezhouMapInfo.EVENT_STATUS_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(BairendezhouMapInfo.EVENT_BATTLE_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
				this._sceneObjectMgr.event(BairendezhouMapInfo.EVENT_COUNT_DOWN);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
				this._sceneObjectMgr.event(BairendezhouMapInfo.EVENT_GAME_NO);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_RECORD)) {
				this._sceneObjectMgr.event(BairendezhouMapInfo.EVENT_GAME_RECORD);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_SEATED_LIST)) {
				this._sceneObjectMgr.event(BairendezhouMapInfo.EVENT_SEATED_LIST);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_ROAD_RECORD)) {
				this._sceneObjectMgr.event(BairendezhouMapInfo.EVENT_ROAD_RECORD);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_CARD_RECORD)) {
				this._sceneObjectMgr.event(BairendezhouMapInfo.EVENT_CARD_RECORD);
			}
		}
		private areaName: string[] = ["蓝", "红", "和", "一对", "两对", "三条/顺子", "同花/葫芦", "金刚/同花顺"];
		private cardType: string[] = ["高牌", "一对", "两对", "三条", "顺子", "同花", "葫芦", "金刚", "同花顺", "皇家同花顺"];
		
		public getBattleInfoToString(): string {
			let playerArr: any[] = this._battleInfoMgr.users;
			if (!playerArr) return "";
			let selfSeat: number = -1;
			for (let i: number = 0; i < playerArr.length; i++) {
				let player = playerArr[i];
				if (player && this._sceneObjectMgr.mainPlayer.GetAccount() == player.account) {
					//找到自己了
					selfSeat = i + 1;
					break;
				}
			}
			if (selfSeat == -1) return "";
			let infoArr: gamecomponent.object.BattleInfoBase[] = this._battleInfoMgr.info;
			if (!infoArr) return "";

			let totalStr: string = "";
			let betArr: number[] = [0, 0, 0, 0, 0, 0, 0, 0];
			let betStr: Array<string> = [];
			let lotteryStr: string = "";
			let awardStr: string = "";
			let settleStr: string = "";
			for (let i: number = 0; i < infoArr.length; i++) {
				let info = infoArr[i];
				if (info.SeatIndex == selfSeat) {
					//自己的战斗日志
					if (info instanceof gamecomponent.object.BattleInfoAreaBet) {
						//下注信息
						betArr[info.BetIndex - 1] += info.BetVal;
					} else if (info instanceof gamecomponent.object.BattleInfoSettle) {
						//结算
						settleStr = info.SettleVal == 0 ? "0" : info.SettleVal > 0 ? "+" + EnumToString.getPointBackNum(info.SettleVal, 2) : "" + EnumToString.getPointBackNum(info.SettleVal, 2);
						break;
					}
				} else if (info instanceof gamecomponent.object.BattleLogCardsResult) {
					for (let j = 0; j < info.Results.length; j++) {
						if (j < this.areaName.length) {
							//中奖区域
							if (info.Results[j] == 0) {
								if (!awardStr) {
									awardStr = this.areaName[j];
								} else {
									awardStr += ", " + this.areaName[j];
								}
							}
						} else {
							//开奖详情
							if (!lotteryStr) {
								lotteryStr = "蓝:" + this.cardType[info.Results[j]];
							} else {
								lotteryStr += ",  " + "红:" + this.cardType[info.Results[j]];
							}
						}
					}
				}
			}

			let count = 0;
			let index = 0;
			for (let i = 0; i < betArr.length; i++) {
				if (betArr[i] > 0) {
					if (count == 3) { //汉字太多了3个一行
						count = 0;
						index++;
					}
					if (!betStr[index]) {
						betStr[index] = StringU.substitute("{0}({1})", this.areaName[i], betArr[i]);
					}
					else {
						betStr[index] += " , " + StringU.substitute("{0}({1})", this.areaName[i], betArr[i]);
					}
					count++;
				}
			}

			//开奖信息
			totalStr += "开　　奖：|" + lotteryStr + "#";
			//中奖信息
			totalStr += "中　　奖：|" + awardStr + "#";
			//下注信息
			for (let i = 0; i < betStr.length; i++) {
				if (i == 0) {
					totalStr += "玩家下注：|" + betStr[i] + "#";
				} else {
					totalStr += "|" + betStr[i] + "#";
				}
			}
			//结算信息
			totalStr += "玩家盈利：|" + settleStr;

			return totalStr;
		}
	}
}