/**
* 走势界面 
*/
module gamebairendezhou.page {
	export class BairendezhouZoushiPage extends game.gui.base.Page {
		private _viewUI: ui.game_ui.bairendezhou.ZouShiTuUI;
		private _bairendezhouMapInfo: BairendezhouMapInfo;
		private _gridEditor: GridEditor;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._isNeedDuang = false;
			this._asset = [
				Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
				PathGameTongyong.atlas_game_ui_tongyong+ "general.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.bairendezhou.ZouShiTuUI');
			this.addChild(this._viewUI);
			
			let textureTypes = {
				"L": PathGameTongyong.ui_tongyong_general + "tu_lq.png",//蓝
				"H": PathGameTongyong.ui_tongyong_general + "tu_hq.png",//红
				"1": PathGameTongyong.ui_tongyong_general + "plsz_1.png",//和数量
				"2": PathGameTongyong.ui_tongyong_general + "plsz_2.png",
				"3": PathGameTongyong.ui_tongyong_general + "plsz_3.png",
				"4": PathGameTongyong.ui_tongyong_general + "plsz_4.png",
				"5": PathGameTongyong.ui_tongyong_general + "plsz_5.png",
				"6": PathGameTongyong.ui_tongyong_general + "plsz_6.png",
				"7": PathGameTongyong.ui_tongyong_general + "plsz_7.png",
				"8": PathGameTongyong.ui_tongyong_general + "plsz_8.png",
				"9": PathGameTongyong.ui_tongyong_general + "plsz_9.png",
			}
			this._gridEditor = new GridEditor(31.93, 31.7, 20, 6, textureTypes, false)
			this._gridEditor.x = 63;
			this._gridEditor.y = 102;
			this._viewUI.list_record0.parent.addChild(this._gridEditor);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_record0.itemRender = this.createChildren("game_ui.bairendezhou.component.HongDianUI", RecordRender);
			this._viewUI.list_record0.renderHandler = new Handler(this, this.renderHandler1);
			this._viewUI.list_record1.itemRender = this.createChildren("game_ui.bairendezhou.component.DuiZiUI", CardRecordRender);
			this._viewUI.list_record1.renderHandler = new Handler(this, this.renderHandler2);

			this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
			this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord);//牌型更新
			this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadRecord);//大路更新
			this.onUpdateRecord();
			this.onUpdateCardRecord();
			this.onUpdateRoadRecord();
			this._bairendezhouMapInfo = this._game.sceneObjectMgr.mapInfo as BairendezhouMapInfo;
			if (this._bairendezhouMapInfo) {
				this.onUpdateRecord();
				this.onUpdateCardRecord();
				this.onUpdateRoadRecord();
			}
		}

		public close(): void {
			if (this._viewUI) {
				if (this._gridEditor) {
					this._gridEditor.removeSelf();
					this._gridEditor.destroy();
					this._gridEditor = null;
				}
				this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
				this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord);//牌型更新
				this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_ROAD_RECORD, this, this.onUpdateRoadRecord);//大路更新
			}
			super.close();
		}

		private renderHandler1(cell: RecordRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}

		private renderHandler2(cell: CardRecordRender, index: number) {
			if (cell) {
				cell.setData(this._game, cell.dataSource);
			}
		}

		//胜负结果
		private onUpdateRecord(): void {
			if (!this._bairendezhouMapInfo) return;
			let recordArr = [];
			if (this._bairendezhouMapInfo.GetGameRecord() != "") {
				recordArr = JSON.parse(this._bairendezhouMapInfo.GetGameRecord());
			}
			this._viewUI.list_record0.dataSource = recordArr;
			// this._viewUI.txt_title.text = StringU.substitute("近{0}局胜负", recordArr.length);
			let length = recordArr.length;
			let totalLenth = 20;
			//计算最近20场胜负
			let temp_lan = 0;
			let temp_hong = 0;
			let temp_he = 0;
			for (let i = 0; i < length; i++) {
				if (recordArr[i] == 1) {
					temp_lan += 1;
				} else if (recordArr[i] == -1) {
					temp_hong += 1;
				}
				else {
					temp_he += 1;
				}
			}
			let lan_num = Math.round(temp_lan * 100 / totalLenth);
			let he_num = Math.round(temp_he * 100 / totalLenth);
			let hong_num = Math.round(temp_hong * 100 / totalLenth);
			if (length >= totalLenth) {
				hong_num = 100 - lan_num - he_num;
			}
			this._viewUI.txt_lan.text = lan_num + "%";
			this._viewUI.txt_hong.text = hong_num + "%";
		}

		//牌型
		private onUpdateCardRecord(): void {
			if (!this._bairendezhouMapInfo) return;
			let recordArr = [];
			if (this._bairendezhouMapInfo.GetCardRecord() != "") {
				recordArr = JSON.parse(this._bairendezhouMapInfo.GetCardRecord());
			}
			this._viewUI.list_record1.dataSource = recordArr;
		}

		//牌路
		private onUpdateRoadRecord(): void {
			if (!this._bairendezhouMapInfo) return;
			let recordArr = [];//战绩记录器
			if (this._bairendezhouMapInfo.GetRoadRecord() != "") {
				recordArr = JSON.parse(this._bairendezhouMapInfo.GetRoadRecord());
			}
			let posArr = [];//坐标记录器
			if (this._bairendezhouMapInfo.GetRoadPos() != "") {
				posArr = JSON.parse(this._bairendezhouMapInfo.GetRoadPos());
			}
			let arr = [];
			if (recordArr && recordArr.length) {
				for (let i = 0; i < recordArr.length; i++) {
					arr.push(posArr[i][0]);
					arr.push(posArr[i][1]);
					arr.push(recordArr[i]);
				}
			}
			this._gridEditor.setData(arr)
		}
	}

	class RecordRender extends ui.game_ui.bairendezhou.component.HongDianUI {
		private _game: Game;
		private _data: any;
		constructor() {
			super();
		}
		setData(game: Game, data: any) {
			this._game = game;
			this._data = data;
			if (this._data != -1 && this._data != 1 && this._data != 0) {
				this.visible = false;
				return;
			}
			this.visible = true;
			this.img_record.skin = StringU.substitute(PathGameTongyong.ui_tongyong_general + "tu_hd{0}.png", this._data == 0 ? "4" : this._data == 1 ? "2" : "0");
		}
		destroy() {
			super.destroy();
		}
	}

	class CardRecordRender extends ui.game_ui.bairendezhou.component.DuiZiUI {
		private _game: Game;
		private _data: any;
		constructor() {
			super();
		}
		setData(game: Game, data: any) {
			this._game = game;
			this._data = data;
			if (!this._data) {
				this.visible = false;
				return;
			}
			this.visible = true;
			if (this._data == 1) {
				this.txt_type.text = "高牌";
			}
			else if (this._data == 2) {
				this.txt_type.text = "一对";
			}
			else if (this._data == 3) {
				this.txt_type.text = "两对";
			}
			else if (this._data == 4) {
				this.txt_type.text = "三条";
			}
			else if (this._data == 5) {
				this.txt_type.text = "顺子";
			}
			else if (this._data == 6) {
				this.txt_type.text = "同花";
			}
			else if (this._data == 7) {
				this.txt_type.text = "葫芦";
			}
			else if (this._data == 8) {
				this.txt_type.text = "金刚";
			}
			else if (this._data == 9 || this._data == 10) {
				this.txt_type.text = "同花顺";
			}
		}
		destroy() {
			super.destroy();
		}
	}
}