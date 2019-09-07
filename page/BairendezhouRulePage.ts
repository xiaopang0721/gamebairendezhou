/**
* 规则界面
*/
module gamebairendezhou.page {
	const TYPE_WANFA_JIESHAO: number = 0;
	const TYPE_CARD_TYPE: number = 1;
	const TYPE_SETTLE_BEISHU: number = 2;
	export class BairendezhouRulePage extends game.gui.base.Page {

		private _viewUI: ui.game_ui.bairendezhou.BaiRenDeZhou_GuiZeUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.bairendezhou.BaiRenDeZhou_GuiZeUI');
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.panal_wanfa.vScrollBarSkin = "";
			this._viewUI.panal_wanfa.vScrollBar.autoHide = true;
			this._viewUI.panal_wanfa.vScrollBar.elasticDistance = 140;
			//更新滚动条最大滚动数值
			this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			if (this.dataSource) {
				this._viewUI.btn_tab.selectedIndex = this.dataSource;
			} else {
				this._viewUI.btn_tab.selectedIndex = TYPE_WANFA_JIESHAO;
			}
		}

		private selectHandler(index: number): void {
			this._viewUI.img_wanfa.visible = this._viewUI.btn_tab.selectedIndex == TYPE_WANFA_JIESHAO;
			this._viewUI.img_paixing.visible = this._viewUI.btn_tab.selectedIndex == TYPE_CARD_TYPE;
			this._viewUI.img_beishu.visible = this._viewUI.btn_tab.selectedIndex == TYPE_SETTLE_BEISHU;
		}

		public close(): void {
			super.close();
		}
	}
}