/**
* 牌信息
*/
module gamebairendezhou.data {
	export class BairendezhouData extends gamecomponent.object.PlayingPuKeCard {
		constructor() {
			super();
		}
		//1X轴位置，牌Y轴位置，牌间隔距离
		private _posList = [[284, 68, 87], [1018, 68, -87], [510, 215, 65]];
		private _moveposList = [[391, 250, 124], [887, 250, -124], [391, 409, 124]];
		private _curIdx: number;

		myOwner(index: number) {
			this.size = 0.2;
			this.time_interval = 400;
			this._curIdx = index;
		}

		//发牌
		fapai() {
			let posX = this._posList[this._curIdx][0];
			let posY = this._posList[this._curIdx][1];
			let space = this._posList[this._curIdx][2];
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX + this.index * space;
			this.targe_pos.y = posY;
			let size = this._curIdx == 2 ? 0.5 : 0.7;
			if(!this.pos) return;
			Laya.Tween.clearAll(this.pos);
			Laya.Tween.clearAll(this);
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
			Laya.Tween.to(this, { size: size, rotateAngle: Math.PI * 4 }, this.time_interval);
		}

		//重连发牌
		refapai() {
			let posX = this._posList[this._curIdx][0];
			let posY = this._posList[this._curIdx][1];
			let space = this._posList[this._curIdx][2];
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX + this.index * space;
			this.targe_pos.y = posY;
			this.size = this._curIdx == 2 ? 0.5 : 0.7;
			this.rotateAngle = Math.PI * 4;
			this.time_interval = 0;
			super.fapai();
		}

		//移动位置
		movepai() {
			let posX = this._moveposList[this._curIdx][0];
			let posY = this._moveposList[this._curIdx][1];
			let space = this._moveposList[this._curIdx][2];
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			this.targe_pos.x = posX + this.index * space;
			this.targe_pos.y = posY;
			this.size = 1;
			this.time_interval = 400;
			if(!this.pos) return;
			Laya.Tween.clearAll(this.pos);
			Laya.Tween.clearAll(this);
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
			Laya.Tween.to(this, { size: this.size }, this.time_interval);
		}

		//返回位置
		backpai() {
			let posX = this._posList[this._curIdx][0];
			let posY = this._posList[this._curIdx][1];
			let space = this._posList[this._curIdx][2];
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			if (this._curIdx == 2) {
				this.index = this.index - 4;
			}
			this.isFinalPos = false;
			this.targe_pos.x = posX + this.index * space;
			this.targe_pos.y = posY;
			this.size = this._curIdx == 2 ? 0.5 : 0.7;
			this.time_interval = 400;
			if(!this.pos) return;
			Laya.Tween.clearAll(this.pos);
			Laya.Tween.clearAll(this);
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
			Laya.Tween.to(this, { size: this.size }, this.time_interval);
		}

		fanpai() {
			this.time_interval = 400;
			super.fanpai()
		}

		fanpai1() {
			this.time_interval = 0;
			super.fanpai()
		}

		hidepai() {
			this.visible = false;
		}

		showpai() {
			this.visible = true;
			this.rotateAngle = Math.PI * 4;
			this.scaleX = 1;
			this.isShow = true;
		}
	}
}