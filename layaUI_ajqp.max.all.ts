
module ui.ajqp.game_ui.bairendezhou {
    export class BaiRenDeZhouUI extends View {
		public area0:Laya.Box;
		public kuang0:ui.ajqp.game_ui.bairendezhou.component.XuanZhongUI;
		public txt_total0:laya.display.Text;
		public area1:Laya.Box;
		public kuang1:ui.ajqp.game_ui.bairendezhou.component.XuanZhongUI;
		public txt_total1:laya.display.Text;
		public area2:Laya.Box;
		public kuang2:ui.ajqp.game_ui.bairendezhou.component.XuanZhong4UI;
		public txt_total2:laya.display.Text;
		public area3:Laya.Box;
		public kuang3:ui.ajqp.game_ui.bairendezhou.component.XuanZhong1UI;
		public txt_bet0:laya.display.Text;
		public txt_total3:laya.display.Text;
		public area4:Laya.Box;
		public kuang4:ui.ajqp.game_ui.bairendezhou.component.XuanZhong2UI;
		public txt_bet1:laya.display.Text;
		public txt_total4:laya.display.Text;
		public area5:Laya.Box;
		public kuang5:ui.ajqp.game_ui.bairendezhou.component.XuanZhong3UI;
		public txt_total5:laya.display.Text;
		public txt_bet2:laya.display.Text;
		public area6:Laya.Box;
		public kuang6:ui.ajqp.game_ui.bairendezhou.component.XuanZhong2UI;
		public txt_bet3:laya.display.Text;
		public txt_total6:laya.display.Text;
		public area7:Laya.Box;
		public kuang7:ui.ajqp.game_ui.bairendezhou.component.XuanZhong1UI;
		public txt_bet4:laya.display.Text;
		public txt_total7:laya.display.Text;
		public btn_playerList:Laya.Button;
		public txt_online:laya.display.Text;
		public paixieRight:ui.ajqp.game_ui.tongyong.PaiXeiUI;
		public paixieLeft:Laya.Image;
		public box_time:ui.ajqp.game_ui.tongyong.DaoJiShiUI;
		public seat0:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat1:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat2:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat3:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat4:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public seat5:ui.ajqp.game_ui.tongyong.TouXiangWzUI;
		public xipai:ui.ajqp.game_ui.tongyong.effect.XiPaiUI;
		public btn_chip0:Laya.Button;
		public guang0:Laya.Image;
		public btn_chip1:Laya.Button;
		public guang1:Laya.Image;
		public btn_chip2:Laya.Button;
		public guang2:Laya.Image;
		public btn_chip3:Laya.Button;
		public guang3:Laya.Image;
		public btn_chip4:Laya.Button;
		public guang4:Laya.Image;
		public btn_repeat:Laya.Button;
		public main_player:ui.ajqp.game_ui.tongyong.TouXiangUI;
		public btn_record:Laya.Button;
		public list_record0:Laya.List;
		public list_record1:Laya.List;
		public lan_type:ui.ajqp.game_ui.bairendezhou.component.PaiXingZiUI;
		public hong_type:ui.ajqp.game_ui.bairendezhou.component.PaiXingZiUI;
		public kaipaiLan:ui.ajqp.game_ui.bairendezhou.component.KaiPaiUI;
		public kaipaiHong:ui.ajqp.game_ui.bairendezhou.component.KaiPaiUI;
		public txt_id:laya.display.Text;
		public btn_spread:Laya.Button;
		public box_menu:Laya.Image;
		public btn_cardType:Laya.Button;
		public btn_rule:Laya.Button;
		public btn_set:Laya.Button;
		public btn_zhanji:Laya.Button;
		public btn_back:Laya.Button;
		public btn_qifu:Laya.Button;
		public btn_chongzhi:ui.ajqp.game_ui.bairendezhou.component.Effect_chongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":158,"x":638,"width":174,"scaleY":0.8,"scaleX":0.8,"height":204,"centerX":-2,"anchorY":1,"anchorX":0.5},"child":[{"type":"SkeletonPlayer","props":{"y":193,"x":85,"url":"tongyong_ui/game_ui/tongyong/sk/HeGuan.sk"}}]},{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":171,"x":109,"width":353,"var":"area0","height":168},"child":[{"type":"XuanZhong","props":{"y":2,"x":6,"var":"kuang0","runtime":"ui.ajqp.game_ui.bairendezhou.component.XuanZhongUI"}},{"type":"Text","props":{"y":127,"x":50,"width":213,"var":"txt_total0","text":"00000/000000","strokeColor":"#0d4b57","stroke":4,"leading":6,"height":34,"fontSize":30,"color":"#ffd200","align":"left"}}]},{"type":"Box","props":{"y":172,"x":815,"width":353,"var":"area1","height":168},"child":[{"type":"XuanZhong","props":{"y":0,"x":347,"var":"kuang1","scaleX":-1,"runtime":"ui.ajqp.game_ui.bairendezhou.component.XuanZhongUI"}},{"type":"Text","props":{"y":128,"x":100,"width":213,"var":"txt_total1","text":"00000/000000","strokeColor":"#0d4b57","stroke":4,"leading":6,"height":34,"fontSize":30,"color":"#ffd200","align":"right"}}]},{"type":"Box","props":{"y":257,"x":461,"width":348,"var":"area2","height":86},"child":[{"type":"XuanZhong4","props":{"y":2,"x":3,"var":"kuang2","runtime":"ui.ajqp.game_ui.bairendezhou.component.XuanZhong4UI"}},{"type":"Text","props":{"y":44,"x":124,"width":213,"var":"txt_total2","text":"00000/000000","strokeColor":"#0d4b57","stroke":4,"leading":6,"height":34,"fontSize":30,"color":"#ffd200","align":"right"}}]},{"type":"Box","props":{"y":346,"x":77,"width":251,"var":"area3","height":176},"child":[{"type":"XuanZhong1","props":{"y":-1,"x":21,"var":"kuang3","runtime":"ui.ajqp.game_ui.bairendezhou.component.XuanZhong1UI"}},{"type":"Text","props":{"y":122,"x":42,"width":176,"var":"txt_bet0","text":"0","strokeColor":"#0d4b57","stroke":4,"leading":6,"height":34,"fontSize":26,"color":"#ffd200","align":"center"}},{"type":"Text","props":{"y":14,"x":58,"width":168,"var":"txt_total3","text":"0","strokeColor":"#005846","stroke":4,"leading":6,"height":31,"fontSize":26,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":346,"x":317,"width":220,"var":"area4","height":176},"child":[{"type":"XuanZhong2","props":{"var":"kuang4","runtime":"ui.ajqp.game_ui.bairendezhou.component.XuanZhong2UI"}},{"type":"Text","props":{"y":122,"x":20,"width":176,"var":"txt_bet1","text":"0","strokeColor":"#0d4b57","stroke":4,"leading":6,"height":34,"fontSize":26,"color":"#ffd200","align":"center"}},{"type":"Text","props":{"y":14,"x":36,"width":168,"var":"txt_total4","text":"0","strokeColor":"#005846","stroke":4,"leading":6,"height":31,"fontSize":26,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":345,"x":532,"width":215,"var":"area5","height":163},"child":[{"type":"XuanZhong3","props":{"y":2,"x":3,"var":"kuang5","runtime":"ui.ajqp.game_ui.bairendezhou.component.XuanZhong3UI"}},{"type":"Text","props":{"y":14,"x":4,"width":210,"var":"txt_total5","text":"0","strokeColor":"#0d4b57","stroke":4,"leading":6,"height":34,"fontSize":26,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":121,"x":4,"width":210,"var":"txt_bet2","text":"0","strokeColor":"#0d4b57","stroke":4,"leading":6,"height":34,"fontSize":26,"color":"#ffd200","align":"center"}}]},{"type":"Box","props":{"y":346,"x":744,"width":208,"var":"area6","height":176},"child":[{"type":"XuanZhong2","props":{"y":0,"x":220,"var":"kuang6","scaleX":-1,"runtime":"ui.ajqp.game_ui.bairendezhou.component.XuanZhong2UI"}},{"type":"Text","props":{"y":122,"x":23,"width":176,"var":"txt_bet3","text":"0","strokeColor":"#0d4b57","stroke":4,"leading":6,"height":34,"fontSize":26,"color":"#ffd200","align":"center"}},{"type":"Text","props":{"y":14,"x":11,"width":168,"var":"txt_total6","text":"0","strokeColor":"#005846","stroke":4,"leading":6,"height":31,"fontSize":26,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":346,"x":953,"width":234,"var":"area7","height":176},"child":[{"type":"XuanZhong1","props":{"y":0,"x":229,"var":"kuang7","scaleX":-1,"runtime":"ui.ajqp.game_ui.bairendezhou.component.XuanZhong1UI"}},{"type":"Text","props":{"y":122,"x":36,"width":176,"var":"txt_bet4","text":"0","strokeColor":"#0d4b57","stroke":4,"leading":6,"height":34,"fontSize":26,"color":"#ffd200","align":"center"}},{"type":"Text","props":{"y":10,"x":14,"width":168,"var":"txt_total7","text":"0","strokeColor":"#005846","stroke":4,"leading":6,"height":31,"fontSize":26,"color":"#ffffff","align":"center"}}]}]},{"type":"Button","props":{"y":657,"x":70,"var":"btn_playerList","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qtwj.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":67,"x":-23,"wordWrap":true,"width":132,"var":"txt_online","text":"在线200人","strokeColor":"#3b1211","stroke":4,"leading":6,"height":26,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"PaiXei","props":{"y":173,"x":993,"var":"paixieRight","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.PaiXeiUI"}},{"type":"Image","props":{"y":156,"x":415,"var":"paixieLeft","skin":"tongyong_ui/game_ui/tongyong/general/tu_paixei0.png","anchorY":0.5,"anchorX":0.5}},{"type":"DaoJiShi","props":{"y":118,"x":732,"var":"box_time","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Box","props":{"left":20,"centerY":-10},"child":[{"type":"TouXiangWz","props":{"var":"seat0","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":158,"var":"seat1","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":316,"var":"seat2","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}}]},{"type":"Box","props":{"right":20,"centerY":-10},"child":[{"type":"TouXiangWz","props":{"var":"seat3","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":158,"var":"seat4","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}},{"type":"TouXiangWz","props":{"y":316,"var":"seat5","runtime":"ui.ajqp.game_ui.tongyong.TouXiangWzUI"}}]},{"type":"XiPai","props":{"y":310,"x":640,"var":"xipai","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.XiPaiUI"}},{"type":"Box","props":{"y":720,"x":641,"width":948,"height":147,"bottom":0,"anchorY":1,"anchorX":0.5},"child":[{"type":"Box","props":{"y":-574,"width":679,"height":113,"centerX":-10,"bottom":-20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":54.5,"x":60,"var":"btn_chip0","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm1.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"50","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":54,"x":56,"var":"guang0","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":183,"var":"btn_chip1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm2.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"100","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":53,"x":56,"var":"guang1","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":306,"var":"btn_chip2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm3.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"200","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":53,"x":55,"var":"guang2","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":426,"var":"btn_chip3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm4.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"500","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":54,"x":55,"var":"guang3","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":54.5,"x":543,"var":"btn_chip4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_cm5.png","labelStrokeColor":"#000000","labelStroke":3,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","labelBold":true,"label":"1000","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":54,"x":55,"var":"guang4","skin":"tongyong_ui/game_ui/tongyong/general/tu_cm.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":99,"var":"btn_repeat","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_xz.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#0f5b08","labelStroke":4,"labelSize":28,"labelColors":"#ffffff","labelBold":true,"centerX":350,"anchorY":0.5,"anchorX":0.5}},{"type":"TouXiang","props":{"var":"main_player","runtime":"ui.ajqp.game_ui.tongyong.TouXiangUI"}}]},{"type":"Box","props":{"y":567,"x":10,"width":729,"height":78,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":37,"width":727,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_d4.png","sizeGrid":"16,23,23,22","centerX":-2,"anchorY":0.5,"anchorX":0.5,"alpha":0.25}},{"type":"Button","props":{"y":37,"x":698,"var":"btn_record","stateNum":1,"skin":"bairendezhou_ui/game_ui/bairendezhou/btn_zs.png","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"x":14,"width":654,"var":"list_record0","spaceX":23,"repeatY":1,"repeatX":12,"renderType":"render","height":33,"disabled":false,"centerY":-21,"cacheAsBitmap":true,"anchorY":0,"anchorX":0},"child":[{"type":"zoushi","props":{"y":0,"x":0,"name":"render","runtime":"ui.ajqp.game_ui.bairendezhou.component.zoushiUI"}}]},{"type":"List","props":{"y":39,"x":5,"width":663,"var":"list_record1","spaceX":20,"repeatY":1,"repeatX":12,"height":33},"child":[{"type":"DuiZi1","props":{"name":"render","runtime":"ui.ajqp.game_ui.bairendezhou.component.DuiZi1UI"}}]}]},{"type":"PaiXingZi","props":{"y":101,"x":327,"var":"lan_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.bairendezhou.component.PaiXingZiUI"}},{"type":"PaiXingZi","props":{"y":101,"x":975,"var":"hong_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.bairendezhou.component.PaiXingZiUI"}},{"type":"KaiPai","props":{"y":176,"x":463.6,"var":"kaipaiLan","scaleY":1.808,"scaleX":1.808,"runtime":"ui.ajqp.game_ui.bairendezhou.component.KaiPaiUI"}},{"type":"KaiPai","props":{"y":176,"x":710.8,"var":"kaipaiHong","scaleY":1.808,"scaleX":1.808,"runtime":"ui.ajqp.game_ui.bairendezhou.component.KaiPaiUI"}},{"type":"Text","props":{"y":21,"x":88,"width":314,"var":"txt_id","text":"牌局号：15323156415613212313","leading":6,"height":23,"fontSize":20,"color":"#d4d4d4"}}]},{"type":"Button","props":{"var":"btn_spread","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"width":180,"var":"box_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":291},"child":[{"type":"Image","props":{"y":75,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":145,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":214,"x":11,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":18,"x":14,"var":"btn_cardType","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":86,"x":14,"var":"btn_rule","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":225,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":153,"x":14,"var":"btn_zhanji","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}}]},{"type":"Button","props":{"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}},{"type":"Effect_chongzhi","props":{"var":"btn_chongzhi","right":0,"bottom":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.bairendezhou.component.Effect_chongzhiUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.Effect_chongzhiUI",ui.ajqp.game_ui.bairendezhou.component.Effect_chongzhiUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.XuanZhong4UI",ui.ajqp.game_ui.bairendezhou.component.XuanZhong4UI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.XuanZhong1UI",ui.ajqp.game_ui.bairendezhou.component.XuanZhong1UI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.XuanZhong2UI",ui.ajqp.game_ui.bairendezhou.component.XuanZhong2UI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.XuanZhong3UI",ui.ajqp.game_ui.bairendezhou.component.XuanZhong3UI);
			View.regComponent("ui.ajqp.game_ui.tongyong.PaiXeiUI",ui.ajqp.game_ui.tongyong.PaiXeiUI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.XuanZhongUI",ui.ajqp.game_ui.bairendezhou.component.XuanZhongUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangWzUI",ui.ajqp.game_ui.tongyong.TouXiangWzUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.XiPaiUI",ui.ajqp.game_ui.tongyong.effect.XiPaiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangUI",ui.ajqp.game_ui.tongyong.TouXiangUI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.zoushiUI",ui.ajqp.game_ui.bairendezhou.component.zoushiUI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.DuiZi1UI",ui.ajqp.game_ui.bairendezhou.component.DuiZi1UI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.PaiXingZiUI",ui.ajqp.game_ui.bairendezhou.component.PaiXingZiUI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.KaiPaiUI",ui.ajqp.game_ui.bairendezhou.component.KaiPaiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.DaoJiShiUI",ui.ajqp.game_ui.tongyong.DaoJiShiUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.BaiRenDeZhouUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou {
    export class BaiRenDeZhou_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public img_wanfa:Laya.Image;
		public img_paixing:Laya.Image;
		public img_beishu:Laya.Image;
		public btn_tab:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":792,"height":509,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":254,"x":396,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":11,"x":408,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-22,"x":167,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png"}},{"type":"Button","props":{"y":22,"x":786,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":60,"x":177,"var":"img_wanfa","skin":"bairendezhou_ui/game_ui/bairendezhou/guize_1.png"}},{"type":"Panel","props":{"y":55,"x":166,"width":649,"height":462},"child":[{"type":"Image","props":{"y":5,"x":10,"var":"img_paixing","skin":"bairendezhou_ui/game_ui/bairendezhou/guize_2.png"}}]},{"type":"Image","props":{"y":66,"x":177,"var":"img_beishu","skin":"bairendezhou_ui/game_ui/bairendezhou/guize_3.png"}},{"type":"Tab","props":{"y":52,"x":-33,"width":200,"var":"btn_tab"},"child":[{"type":"Button","props":{"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":80,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxsm.png","name":"item1"}},{"type":"Button","props":{"y":160,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_jspl.png","name":"item2"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.BaiRenDeZhou_GuiZeUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou {
    export class BaiRenDeZhou_HUDUI extends View {
		public view:ui.ajqp.game_ui.tongyong.HudUI;
		public list_room:Laya.List;
		public btn_join:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view","top":-1,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":-1,"left":-1,"bottom":-1}},{"type":"List","props":{"width":1280,"var":"list_room","right":0,"left":0,"height":439,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"HUDRender","props":{"y":0,"x":2,"renderType":"render","runtime":"ui.ajqp.game_ui.bairendezhou.component.HUDRenderUI"}}]},{"type":"Image","props":{"top":19,"skin":"bairendezhou_ui/game_ui/bairendezhou/brnn_title.png","centerX":123,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.HudUI",ui.ajqp.game_ui.tongyong.HudUI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.HUDRenderUI",ui.ajqp.game_ui.bairendezhou.component.HUDRenderUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.BaiRenDeZhou_HUDUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class DuiZiUI extends View {
		public img_type:Laya.Image;
		public txt_type:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":72,"height":24},"child":[{"type":"Image","props":{"y":12,"x":36,"width":72,"var":"img_type","skin":"tongyong_ui/game_ui/tongyong/general/tu_dzdt.png","skewX":-180,"pivotY":12,"pivotX":36,"height":24}},{"type":"Label","props":{"y":1,"x":6,"width":60,"var":"txt_type","text":"对子","fontSize":20,"color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.DuiZiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class DuiZi1UI extends View {
		public img_type:Laya.Image;
		public txt_type:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":36,"height":30},"child":[{"type":"Image","props":{"y":0,"x":1,"width":51,"var":"img_type","skin":"tongyong_ui/game_ui/tongyong/general/tu_dzdt.png","sizeGrid":"10,10,10,10","height":30}},{"type":"Label","props":{"y":7,"x":3,"width":47,"var":"txt_type","text":"对子","height":16,"fontSize":16,"color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.DuiZi1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class Effect_chongzhiUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":202,"height":113},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png","scaleY":1.2,"scaleX":1.2}},{"type":"Box","props":{"y":58,"x":96,"scaleY":1.2,"scaleX":1.2,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":12,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_chizhizz.png"}},{"type":"Image","props":{"x":79.16666666666666,"skin":"tongyong_ui/game_ui/tongyong/general/tu_czsg.png","renderType":"mask"},"compId":3}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"x":[{"value":-173,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":183,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.Effect_chongzhiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class Effect_yqUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":106,"height":144},"child":[{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":5},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1.1199999999999999,"scaleX":1.1199999999999999,"anchorY":0.5,"anchorX":0.5,"alpha":0.5714285714285714},"compId":6},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0.6666666666666666},"compId":7},{"type":"Image","props":{"y":71,"x":53,"skin":"tongyong_ui/game_ui/tongyong/yq/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":8},{"type":"Image","props":{"y":73,"x":52,"skin":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":24}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":14}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":14}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":20}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":12},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":20}]}},{"target":5,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":27}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":5,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":16},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":27}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":5,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":12},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":18},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"alpha","index":26}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":32}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":22},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":32}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":6,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":19},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"alpha","index":32}]}},{"target":7,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":38}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":28},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":38}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":24},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":38}]}},{"target":8,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":44}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":34},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":44}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":36},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":44}]}},{"target":24,"keyframes":{"skin":[{"value":"tongyong_ui/game_ui/tongyong/yq/xx10000.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10001.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":4},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10002.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10003.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":8},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10004.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":10},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10005.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":12},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10006.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":14},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10007.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":16},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10008.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":18},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10009.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":20},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10010.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":22},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10011.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":24},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10012.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":26},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10013.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":28},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10014.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":30},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10015.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":32},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10016.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":34},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10017.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":36},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10018.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":38},{"value":"tongyong_ui/game_ui/tongyong/yq/xx10019.png","tweenMethod":"linearNone","tween":false,"target":24,"key":"skin","index":40}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":24,"key":"alpha","index":2},{"value":0,"tweenMethod":"linearNone","tween":true,"target":24,"key":"alpha","index":41}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.Effect_yqUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class Go1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":957.4016,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks1.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"y":360,"x":317.5984,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":385,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":9},{"type":"Image","props":{"y":436,"x":916,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.Go1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class HongDianUI extends View {
		public img_record:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":35,"height":35},"child":[{"type":"Box","props":{"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img_record","skin":"tongyong_ui/game_ui/tongyong/general/tu_hd0.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.HongDianUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class HUDRenderUI extends View {
		public img:Laya.Image;
		public txt_status:Laya.Label;
		public txt_max:Laya.Label;
		public btn_xinshou:Laya.Button;
		public bar:Laya.ProgressBar;

        public static  uiView:any ={"type":"View","props":{"width":650,"height":500},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img","skin":"tongyong_ui/game_ui/tongyong/hud/difen_1_0.png"}},{"type":"Label","props":{"y":58,"x":517,"wordWrap":true,"width":147,"var":"txt_status","text":"下注中： 5S","leading":6,"height":20,"fontSize":20,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":77,"x":152,"wordWrap":true,"width":160,"var":"txt_max","text":"投注限额：5000","leading":6,"height":20,"fontSize":18,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":332,"x":221,"var":"btn_xinshou","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_hud_0.png"}},{"type":"ProgressBar","props":{"y":88,"x":46,"width":562,"var":"bar","skin":"tongyong_ui/game_ui/tongyong/dating/progress.png","height":13}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.HUDRenderUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class HudRoadRenderUI extends View {
		public img_result:Laya.Image;
		public img_he:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":15,"height":15},"child":[{"type":"Box","props":{"y":1,"x":0},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img_result","skin":"bairendezhou_ui/game_ui/bairendezhou/tu_g1.png"}},{"type":"Image","props":{"y":2,"x":2,"var":"img_he","skin":"bairendezhou_ui/game_ui/bairendezhou/tu_g5.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.HudRoadRenderUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class KaiPaiUI extends View {
		public ani_kaipai:Laya.FrameAnimation;
		public card:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":58,"height":80},"child":[{"type":"Panel","props":{"y":0,"x":0,"width":58,"rotation":0,"height":81},"compId":9,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"tongyong_ui/game_ui/tongyong/pai/0.png","scaleY":0.55,"scaleX":0.55,"rotation":0}},{"type":"Image","props":{"y":1,"x":1,"width":55,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_0.png","height":34},"compId":10}]},{"type":"Panel","props":{"y":34,"x":-1,"width":58,"visible":false,"rotation":0,"height":46},"compId":7,"child":[{"type":"Image","props":{"y":0,"x":1,"width":104,"var":"card","skin":"tongyong_ui/game_ui/tongyong/pai/1.png","scaleY":0.55,"scaleX":0.55,"height":146},"compId":5},{"type":"Image","props":{"y":3,"x":0,"width":57,"skin":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_0.png","mouseEnabled":true,"height":14,"alpha":1},"compId":8}]},{"type":"Image","props":{"y":48,"x":-103,"skin":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou1.png","rotation":0},"compId":3},{"type":"Image","props":{"y":45,"x":165,"skin":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou1.png","scaleX":-1},"compId":4}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":85,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":33,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":5},{"value":5.307692307692308,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":19},{"value":-13,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":20}],"x":[{"value":163,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":0},{"value":148.83333333333334,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":5},{"value":143,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":6},{"value":143,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":19},{"value":143,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":20}],"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou1.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png","tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png","tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"skin","index":19},{"value":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png","tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"skin","index":20}],"scaleX":[{"value":-1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":6}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"rotation","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"rotation","index":20}]}},{"target":3,"keyframes":{"y":[{"value":85,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":0},{"value":32.66666666666667,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":5},{"value":5.307692307692308,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"y","index":6},{"value":-3,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"y","index":19},{"value":-13,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"y","index":20}],"x":[{"value":-103,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":-92.33333333333333,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":5},{"value":-83,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"x","index":6},{"value":-83,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"x","index":19},{"value":-83,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"x","index":20}],"skin":[{"value":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou1.png","tweenMethod":"linearNone","tween":false,"target":3,"key":"skin","index":0},{"value":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png","tweenMethod":"linearNone","tween":false,"target":3,"label":null,"key":"skin","index":6},{"value":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png","tweenMethod":"linearNone","tween":false,"target":3,"label":null,"key":"skin","index":19},{"value":"tongyong_ui/game_ui/tongyong/general/effect/kaipai/tu_shou2.png","tweenMethod":"linearNone","tween":false,"target":3,"label":null,"key":"skin","index":20}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"rotation","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"rotation","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"rotation","index":20}]}},{"target":7,"keyframes":{"y":[{"value":27,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":0},{"value":34.84615384615385,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":6},{"value":27,"tweenMethod":"linearNone","tween":true,"target":7,"key":"y","index":19},{"value":17,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"y","index":20}],"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"x","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"x","index":20}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"visible","index":6},{"value":true,"tweenMethod":"linearNone","tween":true,"target":7,"key":"visible","index":19},{"value":true,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"visible","index":20}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":20}],"height":[{"value":16,"tweenMethod":"linearNone","tween":true,"target":7,"key":"height","index":0},{"value":28.692307692307693,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"height","index":6},{"value":37,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"height","index":19},{"value":48,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"height","index":20}]}},{"target":9,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"y","index":5},{"value":6.461538461538462,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"y","index":6},{"value":12,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":19},{"value":38,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"y","index":20}],"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":20}],"width":[{"value":58,"tweenMethod":"linearNone","tween":true,"target":9,"key":"width","index":0},{"value":58,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"width","index":5},{"value":58.53846153846154,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"width","index":6},{"value":59,"tweenMethod":"linearNone","tween":true,"target":9,"key":"width","index":19},{"value":59,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"width","index":20}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":6},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"key":"rotation","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"rotation","index":20}],"height":[{"value":80,"tweenMethod":"linearNone","tween":true,"target":9,"key":"height","index":0},{"value":80,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"height","index":5},{"value":57.07692307692308,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"height","index":6},{"value":52,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"height","index":19},{"value":26,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"height","index":20}]}},{"target":10,"keyframes":{"y":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":9.76923076923077,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":19},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":20}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"visible","index":6}],"height":[{"value":34,"tweenMethod":"linearNone","tween":true,"target":10,"key":"height","index":0},{"value":31.263157894736842,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"height","index":6},{"value":30,"tweenMethod":"linearNone","tween":true,"target":10,"key":"height","index":19},{"value":30,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"height","index":20}]}},{"target":8,"keyframes":{"y":[{"value":3,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":0},{"value":2,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"y","index":6},{"value":8,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"y","index":19},{"value":8,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"y","index":20}],"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"x","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"x","index":20}],"width":[{"value":57,"tweenMethod":"linearNone","tween":true,"target":8,"key":"width","index":0},{"value":58,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"width","index":6}],"mouseEnabled":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"key":"mouseEnabled","index":0},{"value":true,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"mouseEnabled","index":6},{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"label":null,"key":"mouseEnabled","index":19},{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"label":null,"key":"mouseEnabled","index":20}],"height":[{"value":14,"tweenMethod":"linearNone","tween":true,"target":8,"key":"height","index":0},{"value":28.5,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"height","index":6},{"value":40,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"height","index":20}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":19},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"label":null,"key":"alpha","index":20}]}},{"target":5,"keyframes":{"x":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"x","index":0},{"value":-1,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"x","index":6}],"width":[{"value":104,"tweenMethod":"linearNone","tween":true,"target":5,"key":"width","index":0},{"value":109,"tweenMethod":"linearNone","tween":true,"target":5,"label":null,"key":"width","index":6}]}}],"name":"ani_kaipai","id":1,"frameRate":12,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.KaiPaiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class PaiLuHongDianUI extends View {
		public clip_num:Laya.Clip;
		public img_road:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":23,"height":23},"child":[{"type":"Clip","props":{"y":4,"x":6,"var":"clip_num","skin":"tongyong_ui/game_ui/tongyong/general/clip_plsz.png","clipX":10}},{"type":"Image","props":{"y":0,"x":0,"var":"img_road","skin":"tongyong_ui/game_ui/tongyong/general/tu_hq.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.PaiLuHongDianUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class PaiXingZiUI extends View {
		public img_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":186,"height":31},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_l3.png"}},{"type":"Image","props":{"y":1,"x":27,"var":"img_type","skin":"bairendezhou_ui/game_ui/bairendezhou/tu_th1.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.PaiXingZiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class renderUI extends View {
		public img_road:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":14,"height":14},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":14,"var":"img_road","skin":"bairendezhou_ui/game_ui/bairendezhou/tu_g1.png","height":14}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.renderUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class TouXiangUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public clip_money:Laya.Clip;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":137},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":136},"child":[{"type":"Image","props":{"y":72,"x":-19,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":30,"x":49,"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-17,"x":2,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Image","props":{"y":81,"x":-12,"width":114,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k2.png","height":24}},{"type":"Image","props":{"y":80,"x":-14,"skin":"tongyong_ui/game_ui/tongyong/general/icon_money.png"}},{"type":"Text","props":{"y":106,"x":-3,"wordWrap":true,"width":101,"var":"txt_name","text":"玩家名字","leading":6,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"y":82,"x":-6,"wordWrap":true,"width":110,"var":"txt_money","text":"0","leading":6,"height":22,"fontSize":20,"color":"#f8ea5e","align":"center"}},{"type":"Clip","props":{"y":-38,"x":37,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":61,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.TouXiangUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class TouXiangWzUI extends View {
		public img_icon:Laya.Image;
		public img_txk:Laya.Image;
		public txt_money:laya.display.Text;
		public txt_name:laya.display.Text;
		public clip_money:Laya.Clip;
		public img_qifu:Laya.Image;
		public qifu_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":137},"child":[{"type":"Box","props":{"y":1,"x":1,"width":99,"height":136},"child":[{"type":"Image","props":{"y":73,"x":-17,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":34,"x":49,"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/general/tu_weizi.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-14,"x":2,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Text","props":{"y":105,"x":-1,"wordWrap":true,"width":99,"var":"txt_money","text":"点击入座","leading":6,"height":21,"fontSize":20,"color":"#fbe85a","align":"center"}},{"type":"Text","props":{"y":82,"x":-2,"wordWrap":true,"width":101,"var":"txt_name","text":"玩家名字","leading":6,"height":22,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Clip","props":{"y":5,"x":39,"var":"clip_money","skin":"tongyong_ui/game_ui/tongyong/general/clip_num1.png","clipX":11}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}},{"type":"Image","props":{"y":63,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.TouXiangWzUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class WanJiaUI extends View {
		public txt_name:laya.display.Text;
		public txt_money:laya.display.Text;
		public img_icon:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":80},"child":[{"type":"Box","props":{"y":0,"x":0,"width":200,"height":80},"child":[{"type":"Text","props":{"y":14,"x":76,"wordWrap":true,"width":121,"var":"txt_name","text":"ID:000000000","leading":6,"height":17,"fontSize":18,"color":"#9e9bad","bold":true,"align":"center"}},{"type":"Text","props":{"y":44,"x":101,"wordWrap":true,"width":97,"var":"txt_money","text":"1000000.00","leading":6,"height":17,"fontSize":18,"color":"#9e9bad","bold":true,"align":"left"}},{"type":"Image","props":{"y":38,"x":38,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":38,"x":38,"var":"img_icon","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_1.png","scaleY":0.9,"scaleX":0.9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":77,"x":3,"width":190,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_xx.png"}},{"type":"Image","props":{"y":52,"x":87,"skin":"tongyong_ui/game_ui/tongyong/dating/icon_money1.png","scaleY":0.55,"scaleX":0.55,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.WanJiaUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class XuanZhongUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":350,"height":170},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_xz.png","blendMode":"lighter"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.XuanZhongUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class XuanZhong1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":176,"height":160},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_xz1.png","blendMode":"lighter"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.XuanZhong1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class XuanZhong2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":164},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_xz2.png","blendMode":"lighter"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.XuanZhong2UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class XuanZhong3UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":214,"height":162},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_xz3.png","blendMode":"lighter"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.XuanZhong3UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class XuanZhong4UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":350,"height":86},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_xz4.png","blendMode":"lighter"},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.XuanZhong4UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou.component {
    export class zoushiUI extends View {
		public img_record:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":33,"height":32},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"img_record","skin":"bairendezhou_ui/game_ui/bairendezhou/zs_0.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.component.zoushiUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou {
    export class GoUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":957.4016,"skin":"tongyong_ui/game_ui/tongyong/general/tu_xz.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"y":360,"x":317.5984,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":385,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":9},{"type":"Image","props":{"y":436,"x":916,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.GoUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou {
    export class JieSuanUI extends View {
		public ani2:Laya.FrameAnimation;
		public img_0:Laya.Image;
		public img_1:Laya.Image;
		public img_2:Laya.Image;
		public img_3:Laya.Image;
		public txt_result0:laya.display.Text;
		public txt_result1:laya.display.Text;
		public txt_result2:laya.display.Text;
		public txt_result3:laya.display.Text;
		public txt_result4:laya.display.Text;
		public txt_result5:laya.display.Text;
		public txt_result6:laya.display.Text;
		public txt_result7:laya.display.Text;
		public txt_result8:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":250,"x":636,"var":"img_0","skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"width":620,"skin":"tongyong_ui/game_ui/tongyong/hud/game_popout_bg.png","sizeGrid":"89,49,71,39","height":350,"centerY":30,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_1","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-190,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_2","skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-180,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":208,"x":626,"var":"img_3","skin":"bairendezhou_ui/game_ui/bairendezhou/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":299,"x":438,"width":96,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":304,"x":352,"wordWrap":true,"width":41,"text":"蓝：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":306,"x":438,"wordWrap":true,"width":95,"var":"txt_result0","text":"000000.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":299,"x":829,"width":96,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":304,"x":725,"wordWrap":true,"width":41,"text":"红：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":306,"x":829,"wordWrap":true,"width":95,"var":"txt_result1","text":"000000.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":299,"x":621,"width":96,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":304,"x":540,"wordWrap":true,"width":41,"text":"和：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":306,"x":621,"wordWrap":true,"width":95,"var":"txt_result2","text":"000000.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":363,"x":438,"width":96,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":368,"x":352,"wordWrap":true,"width":61,"text":"一对：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":370,"x":438,"wordWrap":true,"width":95,"var":"txt_result3","text":"000000.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":363,"x":829,"width":96,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":368,"x":725,"wordWrap":true,"width":61,"text":"两对：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":370,"x":829,"wordWrap":true,"width":95,"var":"txt_result4","text":"000000.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":418,"x":438,"width":96,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":423,"x":352,"wordWrap":true,"width":108,"text":"三条/顺子：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":424,"x":438,"wordWrap":true,"width":95,"var":"txt_result5","text":"000000.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":418,"x":621,"width":96,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":423,"x":540,"wordWrap":true,"width":108,"text":"同花/葫芦：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":424,"x":621,"wordWrap":true,"width":95,"var":"txt_result6","text":"000000.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":418,"x":829,"width":96,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":423,"x":725,"wordWrap":true,"width":130,"text":"金刚/同花顺：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5"}},{"type":"Text","props":{"y":424,"x":829,"wordWrap":true,"width":95,"var":"txt_result7","text":"000000.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":475,"x":621,"width":96,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":34}},{"type":"Text","props":{"y":480,"x":532,"wordWrap":false,"width":102,"text":"输赢合计：","leading":6,"height":20,"fontSize":18,"color":"#fffbb5","align":"center"}},{"type":"Text","props":{"y":482,"x":621,"wordWrap":true,"width":95,"var":"txt_result8","text":"000000.00","leading":6,"height":20,"fontSize":18,"color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":290,"x":536,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d6.png"}},{"type":"Image","props":{"y":289,"x":721,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d6.png"}},{"type":"Image","props":{"y":459,"x":355,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d5.png"}},{"type":"Image","props":{"y":405,"x":355,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d5.png"}},{"type":"Image","props":{"y":345,"x":355,"skin":"tongyong_ui/game_ui/tongyong/general/tu_d5.png"}}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.JieSuanUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou {
    export class StopUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":0.1,"scaleX":2,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":1000,"skin":"tongyong_ui/game_ui/tongyong/general/tu_xz.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":2},{"type":"Image","props":{"y":360,"x":275,"skin":"tongyong_ui/game_ui/tongyong/general/tu_tz0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":937,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":9},{"type":"Image","props":{"y":425,"x":343,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.StopUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_result:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":600,"height":600},"child":[{"type":"Box","props":{"width":600,"height":600,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Guang","props":{"y":300,"x":300,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.GuangUI"},"compId":10},{"type":"Image","props":{"y":332,"x":202,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/effect/bigwin/mai_left.png","scaleY":1,"scaleX":1,"rotation":0,"anchorY":1,"anchorX":1},"compId":5},{"type":"Image","props":{"y":332,"x":402,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/effect/bigwin/mai_right.png","scaleY":1,"scaleX":1,"rotation":0,"anchorY":1},"compId":6},{"type":"Image","props":{"y":201,"x":297,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/effect/bigwin/hg.png","anchorY":0.5,"anchorX":0.5},"compId":4},{"type":"Image","props":{"y":290,"x":301,"skin":"tongyong_ui/game_ui/tongyong/general/effect/bigwin/piaodai.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":218,"x":335,"visible":true,"skin":"tongyong_ui/game_ui/tongyong/general/effect/bigwin/xx2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":7},{"type":"Image","props":{"y":296,"x":294,"visible":true,"var":"img_result","skin":"bairendezhou_ui/game_ui/bairendezhou/winTxt1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":8}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":10}],"scaleX":[{"value":0.2,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":10}]}},{"target":8,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":8,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":8,"key":"visible","index":10}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":0},{"value":2,"tweenMethod":"backOut","tween":true,"target":8,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":20}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":0},{"value":2,"tweenMethod":"backOut","tween":true,"target":8,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":20}]}},{"target":5,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":5,"key":"visible","index":15}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":5,"key":"scaleY","index":15},{"value":1,"tweenMethod":"backOut","tween":true,"target":5,"key":"scaleY","index":25}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":5,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":25}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":0},{"value":-20,"tweenMethod":"backOut","tween":true,"target":5,"key":"rotation","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"rotation","index":25}]}},{"target":6,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":15}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleY","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":25}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleX","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":25}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":20,"tweenMethod":"backOut","tween":true,"target":6,"key":"rotation","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":25}]}},{"target":4,"keyframes":{"y":[{"value":201,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":281,"tweenMethod":"backOut","tween":true,"target":4,"key":"y","index":15},{"value":201,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":25}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":15}]}},{"target":7,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":25}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":25},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"x":[{"value":300,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":300,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":100}],"staticCache":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"staticCache","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"staticCache","index":25}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":25},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleY","index":35}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":25},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"scaleX","index":35}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":25},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":35}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.GuangUI",ui.ajqp.game_ui.tongyong.GuangUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.YingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.bairendezhou {
    export class ZouShiTuUI extends View {
		public btn_close:Laya.Button;
		public txt_lan:Laya.Label;
		public txt_hong:Laya.Label;
		public txt_title:Laya.Label;
		public list_record0:Laya.List;
		public list_record1:Laya.List;
		public box_road:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"height":531,"centerY":1,"centerX":-5,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":-5,"width":433,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","height":546}},{"type":"Image","props":{"x":807,"width":433,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk2.png","scaleX":-1,"height":546}},{"type":"Image","props":{"y":29,"x":394,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":6,"x":294,"skin":"tongyong_ui/game_ui/tongyong/general/tu_zst.png"}},{"type":"Button","props":{"y":38,"x":743,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":79,"x":12,"width":766,"height":407},"child":[{"type":"Image","props":{"y":95,"x":0,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pldt.png"}},{"type":"Image","props":{"y":393,"x":0,"width":779,"skin":"tongyong_ui/game_ui/tongyong/general/tu_didi.png","sizeGrid":"10,10,10,10","height":31}},{"type":"Image","props":{"y":14,"x":455,"width":261,"skin":"tongyong_ui/game_ui/tongyong/general/tu_sheng.png","height":25}},{"type":"Image","props":{"y":95,"x":779,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pldt.png","scaleX":-1}},{"type":"Image","props":{"y":13,"x":60,"width":261,"skin":"tongyong_ui/game_ui/tongyong/general/tu_fu.png","height":25}},{"type":"Label","props":{"y":13,"x":136,"var":"txt_lan","text":"50%","fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":14,"x":569,"var":"txt_hong","text":"50%","fontSize":24,"font":"Bahnschrift","color":"#ffffff"}},{"type":"Label","props":{"y":11,"x":326,"var":"txt_title","text":"近20局胜负","fontSize":24,"color":"#ffffff"}},{"type":"Image","props":{"y":86,"x":0,"width":780,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ditu.png"}},{"type":"Image","props":{"y":89,"x":352,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pl.png"}},{"type":"Image","props":{"y":326,"x":0,"width":780,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ditu.png"}},{"type":"Image","props":{"y":328,"x":333,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pszs.png"}},{"type":"Image","props":{"y":54,"x":0,"width":764,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ditu1.png","sizeGrid":"5,5,5,5","height":32}},{"type":"List","props":{"y":52,"x":23,"width":736,"var":"list_record0","spaceX":1,"repeatY":1,"repeatX":20,"height":37},"child":[{"type":"HongDian","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.ajqp.game_ui.bairendezhou.component.HongDianUI"}}]},{"type":"List","props":{"y":363,"x":15,"width":761,"var":"list_record1","spaceY":4,"spaceX":3,"repeatY":2,"repeatX":10,"height":52},"child":[{"type":"DuiZi","props":{"y":0,"x":0,"renderType":"render","runtime":"ui.ajqp.game_ui.bairendezhou.component.DuiZiUI"}}]},{"type":"Image","props":{"y":0,"x":719,"width":50,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_hf.png","height":50}},{"type":"Image","props":{"y":0,"x":6,"width":50,"skin":"bairendezhou_ui/game_ui/bairendezhou/tu_lf.png","height":50}},{"type":"Box","props":{"y":118,"x":21,"width":736,"var":"box_road","height":207}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.HongDianUI",ui.ajqp.game_ui.bairendezhou.component.HongDianUI);
			View.regComponent("ui.ajqp.game_ui.bairendezhou.component.DuiZiUI",ui.ajqp.game_ui.bairendezhou.component.DuiZiUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.bairendezhou.ZouShiTuUI.uiView);
        }
    }
}
