/**
* 筹码信息
*/
module gamebairendezhou.data {
	export class BairendezhouChip extends gamecomponent.object.PlayingChip {
		constructor() {
			super();
		}
		//筹码起始位置(主玩家，其他玩家，荷官位置，座位0，座位1，座位2，座位3，座位4，座位5) 
		private _chipStart = [[191, 600], [70, 657], [640, 98], [70, 158], [70, 316], [70, 474], [1185, 158], [1185, 316], [1185, 474]];
		//筹码终点位置
		private _chipEnd = [[341, 272], [936, 272], [633, 300], [212, 422], [425, 422], [638, 422], [850, 422], [1063, 422]];
		private _startIndex: number;
		private _targetIndex: number;
		public _seatIndex: number;//精灵座位归属
		//初始位置，终点位置，筹码类型，筹码大小，筹码层级
		setData(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
			this.size = 0.4;
			this.sortScore = 999 - index;
			this.pos = new Vector2(this._chipStart[startIdx][0], this._chipStart[startIdx][1]);
			this._val = value.toString();
			this._type = type;
			this._startIndex = startIdx;
			this._targetIndex = targetIdx - 1;
			this.rotateAngle = MathU.randomRange(0, 360);
			this._seatIndex = unitIndex;
		}

		sendChip() {
			// if (!this.pos) {
			// 	this.pos = new Vector2();
			// 	this.pos = new Vector2(this._chipStart[this._startIndex][0], this._chipStart[this._startIndex][1]);
			// }
			let dstX = 50;
			let dstY = 50;
			if (this._targetIndex == 2) {
				dstX = 100;
				dstY = 20;
			}
			let posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, dstX).x;
			let posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, dstY).y;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			super.sendChip();
		}

		flyChip(index: number, isBanker: boolean, count: number, game: Game) {
			// if (!this.pos) {
			// 	this.pos = new Vector2();
			// 	this.pos = new Vector2(this._chipStart[this._startIndex][0], this._chipStart[this._startIndex][1]);
			// }
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			let target = isBanker ? this._chipEnd : this._chipStart;
			this.targe_pos.x = target[index][0];
			this.targe_pos.y = target[index][1];
			if(!this.pos) return;
			Laya.Tween.clearAll(this.pos);
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500 + count * 15, Laya.Ease.backIn, Handler.create(this, () => {
				this.isFinalPos = true;
				game.sceneObjectMgr.clearOfflineObject(this);
			}));
		}

		drawChip() {
			let dstX = 50;
			let dstY = 50;
			if (this._targetIndex == 2) {
				dstX = 100;
				dstY = 20;
			}
			let posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, dstX).x;
			let posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[this._targetIndex][0], this._chipEnd[this._targetIndex][1]), 0, dstY).y;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.pos.x = posX;
			this.pos.y = posY;
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
		}
	}
}