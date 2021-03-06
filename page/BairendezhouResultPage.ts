/**
* name 
*/
module gamebairendezhou.page {
	export class BairendezhouResultPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.bairendezhou.YingUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong+ "general/effect/bigwin.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.bairendezhou.YingUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.img_result.skin = StringU.substitute(Path_game_bairendezhou.ui_bairendezhou + "winTxt{0}.png", this.dataSource);
			this._viewUI.ani1.on(LEvent.COMPLETE, this, this.onPlayComplte);
			this._viewUI.ani1.play(0, false);
		}

		private onPlayComplte(): void {
			this.close();
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.ani1.off(LEvent.COMPLETE, this, this.onPlayComplte);
			}
			super.close();
		}
	}
}