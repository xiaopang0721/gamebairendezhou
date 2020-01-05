/**
* 界面总览 
*/
module gamebairendezhou.page {
	export class BairendezhouPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//游戏界面
		static PAGE_BAIRENDEZHOU: string = "1";
		//地图UI
		static PAGE_BAIRENDEZHOU_MAP: string = "2";
		//开始下注界面
		static PAGE_BAIRENDEZHOU_BEGIN: string = "3";
		//停止下注界面
		static PAGE_BAIRENDEZHOU_END: string = "4";
		//走势界面
		static PAGE_BAIRENDEZHOU_ZOUSHI: string = "5";
		//结果
		static PAGE_BAIRENDEZHOU_RESULT: string = "6";
		//规则界面
		static PAGE_BAIRENDEZHOU_RULE: string = "101";


		static myinit(str: string) {
			super.myinit(str);
			BairendezhouiClip.init();
			PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU] = BairendezhouPage;
			PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_MAP] = BairendezhouMapPage;
			PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_BEGIN] = BairendezhouBeginPage;
			PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_RULE] = BairendezhouRulePage;
			PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_END] = BairendezhouEndPage;
			PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_ZOUSHI] = BairendezhouZoushiPage;
			PageDef._pageClassMap[BairendezhouPageDef.PAGE_BAIRENDEZHOU_RESULT] = BairendezhouResultPage;

			this["__needLoadAsset"] = [
                Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
                Path_game_bairendezhou.atlas_game_ui_bairendezhou_effect + "zy.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "yq.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "ksyx.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "ksxz.atlas",

				Path_game_bairendezhou.ui_bairendezhou_effect_sk + "bairendezhou.png",
				Path_game_bairendezhou.ui_bairendezhou_effect_sk + "bairendezhou.sk",
				Path.custom_atlas_scene + 'card.atlas',
				Path.custom_atlas_scene + 'chip.atlas',
				PathGameTongyong.ui_tongyong_sk + "HeGuan.sk",
				PathGameTongyong.ui_tongyong_sk + "HeGuan.png",
				Path.map + 'pz_bairendezhou.png',
				Path.map_far + 'bg_bairendezhou.jpg'
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_bairendezhou.music_bairendezhou + "brdz_bgm.mp3",
					Path_game_bairendezhou.music_bairendezhou + "card_type0.mp3",
					Path_game_bairendezhou.music_bairendezhou + "card_type1.mp3",
					Path_game_bairendezhou.music_bairendezhou + "card_type2.mp3",
					Path_game_bairendezhou.music_bairendezhou + "card_type3.mp3",
					Path_game_bairendezhou.music_bairendezhou + "card_type4.mp3",
					Path_game_bairendezhou.music_bairendezhou + "card_type5.mp3",
					Path_game_bairendezhou.music_bairendezhou + "card_type6.mp3",
					Path_game_bairendezhou.music_bairendezhou + "card_type7.mp3",
					Path_game_bairendezhou.music_bairendezhou + "card_type8.mp3",
					Path_game_bairendezhou.music_bairendezhou + "chouma.mp3",
					Path_game_bairendezhou.music_bairendezhou + "dingding_end.mp3",
					Path_game_bairendezhou.music_bairendezhou + "dingding_start.mp3",
					Path_game_bairendezhou.music_bairendezhou + "he.mp3",
					Path_game_bairendezhou.music_bairendezhou + "piaoqian.mp3",
					Path_game_bairendezhou.music_bairendezhou + "win_blue.mp3",
					Path_game_bairendezhou.music_bairendezhou + "win_red.mp3",
					Path_game_bairendezhou.music_bairendezhou + "xiazhu_end.mp3",
					Path_game_bairendezhou.music_bairendezhou + "xiazhu_start.mp3",
				])
			}
		}
	}
}