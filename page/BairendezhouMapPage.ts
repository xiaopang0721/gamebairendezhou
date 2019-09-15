/**
* 地图
*/
module gamebairendezhou.page {
    import TextFieldU = utils.TextFieldU;
    const enum MAP_STATUS {
        PLAY_STATUS_NONE = 0, // 准备阶段
        PLAY_STATUS_GAMESTART = 1, // 游戏开始
        PLAY_STATUS_WASH_CARD = 2, // 洗牌阶段
        PLAY_STATUS_PUSH_CARD = 3, // 发牌阶段
        PLAY_STATUS_BET = 4, // 下注阶段
        PLAY_STATUS_STOP_BET = 5,// 停止下注阶段
        PLAY_STATUS_SHOW_CARD = 6, // 开牌阶段
        PLAY_STATUS_SETTLE = 7, // 结算阶段
        PLAY_STATUS_SETTLE_SHOW = 8, //结算结果展示
        PLAY_STATUS_RELAX = 9, // 休息阶段
    }
    const PLAYER_LEAST_MONEY = 50 // 投注最少携带金额
    const ALL_GAME_ROOM_CONFIG_ID = [171, 172, 173, 174];// 可进入的maplv
    //房间配置
    const MONEY_LIMIT_CONFIG = {
        "171": [5000, 2000, 5000],       //新手(上庄限制，入座限制，投注限额)
        "172": [20000, 5000, 8000],      //小资(上庄限制，入座限制，投注限额)
        "173": [50000, 10000, 25000],    //老板(上庄限制，入座限制，投注限额)
        "174": [100000, 20000, 50000],   //富豪(上庄限制，入座限制，投注限额)
    };
    //房间下注选择筹码
    const ROOM_CHIP_CONFIG = {
        "171": [1, 10, 50, 100, 1000],     //新手
        "172": [10, 50, 100, 500, 1000],   //小资
        "173": [50, 100, 500, 1000, 5000],  //老板
        "174": [100, 500, 1000, 5000, 10000],  //富豪
    };
    //机器人配置
    const ROBOT_NUM_CONFIG = {
        "171": [100, 150, 200, 300],  //新手
        "172": [70, 100, 130, 200],  //小资
        "173": [30, 60, 100, 150],  //老板
        "174": [10, 30, 60, 90],  //富豪
    };

    export class BairendezhouMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.bairendezhou.BaiRenDeZhouUI;
        private _bairendezhouMgr: BairendezhouMgr;
        private _bairendezhouStory: BairendezhouStory;
        private _bairendezhouMapInfo: BairendezhouMapInfo;
        private _betMainTotal: number = 0;//玩家总下注
        private _mainPlayerBenefit: number = 0;//玩家收益
        private _lottery: string = "";//中奖区域
        private _areaList: Array<any> = [];//下注区域UI集合
        private _areaKuangUIList: Array<any> = [];//下注区域边框集合
        private _txtTotalUIList: Array<any> = [];//总下注文本UI集合
        private _txtBetUIList: Array<any> = [];//玩家下注文本UI集合
        private _seatUIList: Array<any> = [];//座位UI集合
        private _chipUIList: Array<Button> = [];//筹码UI集合
        private _chipGuangUIList: Array<LImage> = [];//筹码光效UI集合
        private _chipArr: Array<number> = [];//筹码大小类型
        private _cardsArr: Array<any> = [];//开牌信息集合
        private _clipList: Array<BairendezhouiClip> = [];//飘字集合
        private _seatlimit: number;//入座金币
        private _betlimit: number;//投注限额
        private _curStatus: number;//当前地图状态
        private _countDown: number;//倒计时时间戳
        private _curChip: number;//当前选择筹码
        private _curChipY: number;//当前选择筹码y轴位置
        private _chipSortScore: number = 0;//筹码层级
        private _unitSeated: Array<any> = [];//入座精灵信息集合
        private _chipTotalList: Array<any> = [[], [], [], [], [], [], [], []];//区域绘制筹码集合
        private _betTotalList: Array<any> = [0, 0, 0, 0, 0, 0, 0, 0];//区域下注总额集合（所有玩家）
        private _betMainList: Array<any> = [0, 0, 0, 0, 0, 0, 0, 0];//区域下注总额集合（主玩家）
        private _rebetList: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0];//重复下注列表(7个区域)
        private _mainHeadPos: any = [[0, 0], [0, -10]];//主玩家座位头像初始位置
        private _headStartPos: any = [[0, 0], [0, 158], [0, 316], [0, 0], [0, 158], [0, 319]];//座位头像初始位置
        private _headEndPos: any = [[10, 0], [10, 158], [10, 316], [-10, 0], [-10, 158], [-10, 319]];//座位头像移动位置
        private _htmlText: laya.html.dom.HTMLDivElement;
        private _htmlTextArr: Array<laya.html.dom.HTMLDivElement>;
        private _resultArry: Array<number> = [];
        private _zuheArry: Array<number> = [];
        private _lannum: number = 2;
        private _hongnum: number = 2;
        private _robotConfig: any;//机器人配置

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._delta = 1000;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                Path_game_bairendezhou.atlas_game_ui + "bairendezhou.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/suiji.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/fapai_1.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/xipai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general/effect/kaipai.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.bairendezhou.BaiRenDeZhouUI');
            this.addChild(this._viewUI);
            this.initView();
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("BairendezhouMapPage");//额外界面控制器
            }
            this._bairendezhouStory = this._game.sceneObjectMgr.story as BairendezhouStory;
            if (this._bairendezhouStory) {
                this._bairendezhouMgr = this._bairendezhouStory.bairendezhouMgr;
                if (this._bairendezhouMgr) {
                    this._bairendezhouMgr.on(BairendezhouMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                    this._bairendezhouMgr.on(BairendezhouMgr.OPEN_OVER, this, this.onOpenAllCardOver);
                    this._bairendezhouMgr.on(BairendezhouMgr.MOVE_CARD, this, this.onMoveCardOver);
                    this._bairendezhouMgr.on(BairendezhouMgr.BACK_CARD, this, this.onBackCardOver);
                    this._bairendezhouMgr.on(BairendezhouMgr.OPEN_ANI, this, this.onKaiPaiAniDeal);
                }
                this.onUpdateMapInfo();
            }
            this._viewUI.mouseThrough = true;
            this._game.playMusic(Path_game_bairendezhou.music_bairendezhou + "brdz_bgm.mp3");
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.btn_spread.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rule.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_cardType.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_zhanji.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_repeat.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_playerList.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);

            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
            this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
            // this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo);//牌局号
            this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
            this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
            this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList);//入座列表更新
            this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord);//牌型更新
            this._game.sceneObjectMgr.on(BairendezhouMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig);//地图传送参数
            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

            this.onUpdateUnitOffline();
            this.onUpdateSeatedList();
        }

        private _curDiffTime: number;
        update(diff: number) {
            if (!this._curDiffTime || this._curDiffTime < 0) {
                this._viewUI.btn_chongzhi.ani1.play(0, false);
                this._curDiffTime = TongyongPageDef.CZ_PLAY_DIFF_TIME;
            } else {
                this._curDiffTime -= diff;
            }
        }

        //帧间隔心跳
        deltaUpdate() {
            let bool = this._curStatus == MAP_STATUS.PLAY_STATUS_BET || this._curStatus == MAP_STATUS.PLAY_STATUS_SETTLE;
            if (!bool) return;
            if (!this._bairendezhouMapInfo) return;
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._bairendezhouMapInfo.GetCountDown() - curTime);
            this._viewUI.box_time.visible = time > 0;
            this._viewUI.box_time.txt_time.text = time.toString();
            this._viewUI.box_time.ani1.gotoAndStop(24);
            if (this._curStatus == MAP_STATUS.PLAY_STATUS_BET) {
                if (time <= 3 && !this._viewUI.box_time.ani1.isPlaying) {
                    this._viewUI.box_time.ani1.play(1, true);
                }
                if (time > 3) {
                    this._viewUI.box_time.ani1.gotoAndStop(24);
                }
                if (time == 1) {
                    this._game.playSound(PathGameTongyong.music_tongyong + "time2.mp3", false);
                } else if (time == 2 || time == 3) {
                    this._game.playSound(PathGameTongyong.music_tongyong + "time1.mp3", false);
                }
            }
        }

        //玩家进来了
        private onUnitAdd(u: Unit) {
            this.onUpdateUnit();
        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
        }

        private onUpdateAniDeal(): void {
            this._viewUI.ani_deal.ani1.stop();
            this._viewUI.ani_deal.visible = false;
        }

        //断线重连开牌
        private onOpenAllCardOver(): void {
            this.onOpenCardOver(false)
            this.onOpenCardOver1(false)
        }

        //开牌结束显示牌型
        private onOpenCardOver(sound: boolean): void {
            if (!this._resultArry.length) return
            let url = Path_game_bairendezhou.ui_bairendezhou + "tu_th{0}.png"
            this._viewUI.lan_type.visible = true;
            this._viewUI.lan_type.img_type.skin = StringU.substitute(url, this._resultArry[8]);
            if (sound) {
                let card_type = this._resultArry[8] > 8 ? 8 : this._resultArry[8];
                this._game.playSound(StringU.substitute(Path_game_bairendezhou.music_bairendezhou + "card_type{0}.mp3", card_type), false);
            }
        }

        //开牌结束显示牌型
        private onOpenCardOver1(sound: boolean): void {
            if (!this._resultArry.length) return
            let url = Path_game_bairendezhou.ui_bairendezhou + "tu_th{0}.png"
            this._viewUI.hong_type.visible = true;
            this._viewUI.hong_type.img_type.skin = StringU.substitute(url, this._resultArry[9]);
            if (sound) {
                let card_type = this._resultArry[9] > 8 ? 8 : this._resultArry[9];
                this._game.playSound(StringU.substitute(Path_game_bairendezhou.music_bairendezhou + "card_type{0}.mp3", card_type), false);
            }
        }

        //牌移动
        private onMoveCardOver(): void {
            this.hideTotalAndBetText(false);
            this.moveCardType();
        }

        //牌归位
        private onBackCardOver(): void {
            this.hideTotalAndBetText(true);
            this.backCardType();
        }

        //牌型移动出去
        private moveCardType(): void {
            Laya.Tween.clearAll(this._viewUI.lan_type);
            Laya.Tween.clearAll(this._viewUI.hong_type);
            Laya.Tween.to(this._viewUI.lan_type, { x: 454, y: 297, scaleX: 1.5, scaleY: 1.5 }, 400);
            Laya.Tween.to(this._viewUI.hong_type, { x: 826, y: 297, scaleX: 1.5, scaleY: 1.5 }, 400);
        }

        //牌型移动回来
        private backCardType(): void {
            Laya.Tween.clearAll(this._viewUI.lan_type);
            Laya.Tween.clearAll(this._viewUI.hong_type);
            Laya.Tween.to(this._viewUI.lan_type, { x: 327, y: 101, scaleX: 1, scaleY: 1 }, 400);
            Laya.Tween.to(this._viewUI.hong_type, { x: 975, y: 101, scaleX: 1, scaleY: 1 }, 400);
        }

        //隐藏被牌遮挡文本框
        private hideTotalAndBetText(ishide: boolean): void {
            this._htmlTextArr[2].visible = ishide;
            for (let i = 4; i < 7; i++) {
                this._txtTotalUIList[i].visible = ishide;
            }
            for (let i = 1; i < 4; i++) {
                this._txtBetUIList[i].visible = ishide;
            }
        }

        //开牌动画处理
        private onKaiPaiAniDeal() {
            for (let i = 0; i < BairendezhouMgr.EACH_CARD_NUM; i++) {
                Laya.timer.once(1800 * i, this, () => {
                    if (this._cardsArr && this._cardsArr[i]) {
                        if (this._cardsArr[i].SeatIndex == 1) {
                            this._viewUI.kaipaiLan.card.skin = StringU.substitute(PathGameTongyong.ui_tongyong_pai + "{0}.png", this._cardsArr[i].Cards[1]);
                            this._viewUI.kaipaiLan.visible = true;
                            this._viewUI.kaipaiLan.ani_kaipai.play(0, false);
                            this._bairendezhouMgr.hidepai(1);
                        }
                        else {
                            this._viewUI.kaipaiHong.card.skin = StringU.substitute(PathGameTongyong.ui_tongyong_pai + "{0}.png", this._cardsArr[i].Cards[1]);
                            this._viewUI.kaipaiHong.visible = true;
                            this._viewUI.kaipaiHong.ani_kaipai.play(0, false);
                            this._bairendezhouMgr.hidepai(3);
                        }
                    }
                });
            }
        }

        //开牌动画结束
        private onKaiPaiAniDealOver(index: number): void {
            if (index == 1) {
                this._viewUI.kaipaiLan.ani_kaipai.stop();
                this._viewUI.kaipaiLan.visible = false;
                this._bairendezhouMgr.showpai(1);
            } else {
                this._viewUI.kaipaiHong.ani_kaipai.stop();
                this._viewUI.kaipaiHong.visible = false;
                this._bairendezhouMgr.showpai(3);
                Laya.timer.once(400, this, () => {
                    this.onCardTypeZuhe();
                });
            }
        }

        //牌型组合
        private onCardTypeZuhe(): void {
            let cards_list = [];
            for (let i = 0; i < this._cardsArr.length; i++) {
                let cards = this._cardsArr[i].Cards
                for (let j = 0; j < cards.length; j++) {
                    cards_list.push(cards[j])
                }
            }
            this._bairendezhouMgr.zhihui(true);
            for (let i = 0; i < this._zuheArry.length / 2; i++) {
                for (let j = 0; j < cards_list.length; j++) {
                    if (cards_list[j] == this._zuheArry[i]) {
                        this._bairendezhouMgr.zhihuiByIndex(j);
                        this._bairendezhouMgr.lightByIndex(j);
                        break;
                    }
                }
            }
            this.onOpenCardOver(true);
            Laya.timer.once(1500, this, () => {
                this._bairendezhouMgr.zhihui(false);
                this._bairendezhouMgr.light(false);
            })
            Laya.timer.once(2500, this, () => {
                this._bairendezhouMgr.zhihui(true);
                for (let i = this._zuheArry.length / 2; i < this._zuheArry.length; i++) {
                    for (let j = 0; j < cards_list.length; j++) {
                        if (cards_list[j] == this._zuheArry[i]) {
                            this._bairendezhouMgr.zhihuiByIndex(j);
                            this._bairendezhouMgr.lightByIndex(j);
                            break;
                        }
                    }
                }
                this.onOpenCardOver1(true);
                Laya.timer.once(1500, this, () => {
                    this._bairendezhouMgr.zhihui(false);
                    this._bairendezhouMgr.light(false);
                })
            })
        }

        private onUpdateMapInfo(): void {
            let mapinfo = this._game.sceneObjectMgr.mapInfo;
            this._bairendezhouMapInfo = mapinfo as BairendezhouMapInfo;
            if (mapinfo) {
                this.initRoomConfig();
                this.onUpdateBattle();
                this.onUpdateRecord();
                this.onUpdateCardRecord();
                this.onUpdateStatus();
                this.updateOnline();
                if (!this._bairendezhouMgr.isReconnect) {
                    this._viewUI.ani_deal.ani1.stop();
                    this._viewUI.ani_deal.visible = false;
                }
            }
        }

        private onUpdateChipGrey() {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let money: number = this._game.sceneObjectMgr.mainUnit.GetMoney();
            for (let i = 0; i < this._chipUIList.length; i++) {
                let index = this._chipUIList.length - 1 - i;
                if (money < this._chipArr[index]) {
                    this._chipUIList[index].disabled = true;
                    this._chipUIList[index].y = this._curChipY;
                    if (this._curChip == this._chipArr[index]) {

                    }
                } else {
                    this._chipUIList[index].disabled = false;
                }
            }
        }

        private onUpdateUnitOffline() {
            let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let mainPlayerInfo = mainPlayer.playerInfo;
            this._viewUI.main_player.txt_name.text = getMainPlayerName(mainPlayerInfo.nickname);
            this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + mainPlayerInfo.headimg + ".png";
            let money = EnumToString.getPointBackNum(mainPlayerInfo.money, 2);
            this._viewUI.main_player.txt_money.text = money.toString();
            this._viewUI.main_player.img_qifu.visible = mainPlayer.GetQiFuEndTime(mainPlayerInfo.qifu_type - 1) > this._game.sync.serverTimeBys;
            if (this._viewUI.main_player.img_qifu.visible) {
                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + this._nameStrInfo[mainPlayerInfo.qifu_type - 1] + ".png";
            }
            this._viewUI.main_player.img_txk.visible = mainPlayerInfo.vip_level > 0;
            if (this._viewUI.main_player.img_txk.visible) {
                this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainPlayerInfo.vip_level + ".png";
            }
        }

        private onUpdateUnit(qifu_index?: number) {
            if (!this._bairendezhouMapInfo) return;
            let battleInfoMgr = this._bairendezhouMapInfo.battleInfoMgr;
            //主玩家的座位
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (mainUnit) {
                let headImg = mainUnit.GetHeadImg();
                this._viewUI.main_player.txt_name.text = getMainPlayerName(mainUnit.GetName());
                let money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                this._viewUI.main_player.txt_money.text = money.toString();
                let mainIdx = mainUnit.GetIndex();
                this._viewUI.main_player.img_txk.visible = mainUnit.GetVipLevel() > 0;
                if (this._viewUI.main_player.img_txk.visible) {
                    this._viewUI.main_player.img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + mainUnit.GetVipLevel() + ".png";
                }
                //祈福成功 头像上就有动画
                if (qifu_index && mainIdx == qifu_index) {
                    this._viewUI.main_player.qifu_type.visible = true;
                    this._viewUI.main_player.qifu_type.skin = this._qifuTypeImgUrl;
                    this.playTween(this._viewUI.main_player.qifu_type, qifu_index);
                }
                //时间戳变化 才加上祈福标志
                if (mainUnit.GetQFEndTime(mainUnit.GetQiFuType() - 1) > this._game.sync.serverTimeBys) {
                    if (qifu_index && mainIdx == qifu_index) {
                        Laya.timer.once(2500, this, () => {
                            this._viewUI.main_player.img_qifu.visible = true;
                            if (mainUnit.GetQiFuType()) {
                                let qifuImgUrl = this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                                this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                            }
                        })
                    } else {
                        this._viewUI.main_player.img_qifu.visible = true;
                        if (mainUnit.GetQiFuType()) {
                            let qifuImgUrl = this._nameStrInfo[mainUnit.GetQiFuType() - 1];
                            this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                        }
                    }
                } else {
                    this._viewUI.main_player.img_qifu.visible = false;
                    if (headImg) {
                        this._viewUI.main_player.img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + headImg + ".png";
                    }
                }
            }
            this.onUpdateChipGrey();
            this.onUpdateSeatedList(qifu_index);
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }
        private _timeList1: { [key: number]: number } = {};
        private _firstList1: { [key: number]: number } = {};
        private playTween1(img: LImage, index, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList1[index]) {
                this._timeList1[index] = 0;
            }
            if (this._timeList1[index] >= 2500) {
                this._timeList1[index] = 0;
                this._firstList1[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween1, [img, index, !isTween]), this._firstList1[index] ? this._diff : 0);
            this._timeList1[index] += this._diff;
            this._firstList1[index] = 1;
        }

        private _nameStrInfo: string[] = ["xs", "px", "gsy", "gg", "cs", "tdg"];
        private _qifuTypeImgUrl: string;
        protected onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_GAME) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_QIFU_SUCCESS_RESULT:
                        let dataInfo = JSON.parse(msg.data);
                        //打开祈福动画界面
                        this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU_ANI, (page) => {
                            page.dataSource = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}1.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        });
                        //相对应的玩家精灵做出反应
                        this._qifuTypeImgUrl = StringU.substitute(PathGameTongyong.ui_tongyong_qifu + "f_{0}2.png", this._nameStrInfo[dataInfo.qf_id - 1]);
                        this.onUpdateUnit(dataInfo.qifu_index);
                        break;
                }
            }
        }

        //更新在线人数
        private updateOnline() {
            if (!this._robotConfig) return;
            let onlineNum = 0;
            for (let key in this._game.sceneObjectMgr.unitDic) {
                if (this._game.sceneObjectMgr.unitDic.hasOwnProperty(key)) {
                    let unit = this._game.sceneObjectMgr.unitDic[key];
                    if (unit) {
                        onlineNum++;
                    }
                }
            }
            let curHour = Sync.getHours(this._game.sync.serverTimeBys * 1000);//当前几点钟
            let index = curHour >= 1 && curHour < 7 ? 0 : curHour >= 7 && curHour < 13 ? 1 : curHour >= 13 && curHour < 19 ? 2 : 3;
            let innerHtml = StringU.substitute("在线<span style='color:#18ff00'>{0}</span>人", onlineNum + this._robotConfig[index]);
            this._htmlText.innerHTML = innerHtml;
        }

        private updateMoney(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (mainUnit) {
                let money = EnumToString.getPointBackNum(mainUnit.GetMoney(), 2);
                this._viewUI.main_player.txt_money.text = money.toString();
            }
        }

        //战斗结构体更新
        private _battleIndex: number = -1;
        private onUpdateBattle() {
            if (!this._bairendezhouMapInfo) return;
            let battleInfoMgr = this._bairendezhouMapInfo.battleInfoMgr;
            if (!battleInfoMgr) return;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let info = battleInfoMgr.info[i];
                if (info instanceof gamecomponent.object.BattleInfoDeal) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this._cardsArr = this._cardsArr.concat(info);
                        if (this._cardsArr.length >= 2) {
                            this.onUpdatePeilv();
                        }
                    }
                }
                if (info instanceof gamecomponent.object.BattleInfoAreaBet) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this.onBattleBet(info, i);
                    }
                }
                if (info instanceof gamecomponent.object.BattleInfoSettle) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this.onBattleSettle(info);
                    }
                }
                if (info instanceof gamecomponent.object.BattleLogCardsResult) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this._resultArry = info.Results;
                        this.onBattleResult(info);
                    }
                }
                if (info instanceof gamecomponent.object.BattleInfoBrdzCardsZuhe) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        this._zuheArry = info.CardsZuhe;
                    }
                }
                if (info instanceof gamecomponent.object.BattleInfoMingPai) {
                    if (this._battleIndex < i) {
                        this._battleIndex = i;
                        if (this._cardsArr.length >= 3) {
                            this._cardsArr[0].Cards[1] = info.Cards[1]
                            this._cardsArr[1].Cards[1] = info.Cards[3]
                        }
                    }
                }
            }
        }
        //战斗日志来更新桌面上的筹码
        private onBattleBet(info: any, index: number): void {
            //主玩家的座位
            if (!this._game.sceneObjectMgr.mainUnit) return;
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let startIdx: number;
            let targetIdx: number;
            let isMainPlayer: boolean = info.SeatIndex == mainIdx;
            if (isMainPlayer) {//主玩家
                startIdx = 0;
                this.moveHead(this._viewUI.main_player, this._mainHeadPos[0][0], this._mainHeadPos[0][1], this._mainHeadPos[1][0], this._mainHeadPos[1][1]);
            } else {//其他玩家
                startIdx = 1;
                for (let i = 0; i < this._unitSeated.length; i++) {
                    let unitIndex = this._unitSeated[i][0];
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                    if (unit && info.SeatIndex == unitIndex) {
                        this.moveHead(this._seatUIList[i], this._headStartPos[i][0], this._headStartPos[i][1], this._headEndPos[i][0], this._headEndPos[i][1]);
                        startIdx = 3 + i;
                    }
                }
                if (startIdx == 1) {
                    this.moveHead(this._viewUI.btn_playerList, 70, 657, 80, 647);
                }
            }
            targetIdx = info.BetIndex;
            let type = this._chipArr.indexOf(info.BetVal) + 1;
            this.createChip(startIdx, targetIdx, type, info.BetVal, index, info.SeatIndex);
            this.updateChipOnTable(targetIdx - 1, info.BetVal, isMainPlayer);
        }

        //头像出筹码动态效果
        private moveHead(view, startX, startY, endX, endY): void {
            Laya.Tween.clearAll(view);
            Laya.Tween.to(view, { x: endX, y: endY }, 150, null, Handler.create(this, () => {
                Laya.Tween.to(view, { x: startX, y: startY }, 150);
            }))
        }

        private updateChipOnTable(index: number, bet: number, isMainPlayer: boolean) {
            if (isMainPlayer) {
                this._betMainList[index] += bet;
                this._betMainTotal += bet;
            }
            this._betTotalList[index] += bet;

            this.updateBetNum();
        }

        private updateBetNum(): void {
            for (let i = 0; i < 8; i++) {
                if (i < 3) {
                    this._htmlTextArr[i].innerHTML = StringU.substitute("<span style='color:#ffd200'>{0}</span><span style='color:#ffffff'>/{1}</span>", this._betMainList[i], this._betTotalList[i]);
                } else {
                    this._txtTotalUIList[i].text = this._betTotalList[i];
                }

            }
            for (let i = 0; i < 5; i++) {
                this._txtBetUIList[i].text = this._betMainList[i + 3];
            }
        }

        //创建筹码
        private createChip(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BairendezhouChip) as BairendezhouChip;
            chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
            this._chipTotalList[targetIdx - 1].push(chip);
            if (this._bairendezhouMgr.isReconnect && this._curStatus != MAP_STATUS.PLAY_STATUS_BET) {
                chip.drawChip();
            }
            else {
                Laya.timer.once(350, this, () => {
                    chip.sendChip();
                    this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "chouma.mp3", false);
                })
            }
            this._chipSortScore = index;//存下来最后一个筹码层级
        }

        //庄家飞筹码去输的区域
        private bankerFlyChip(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, BairendezhouChip) as BairendezhouChip;
            chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
            this._chipTotalList[targetIdx - 1].push(chip);
            Laya.timer.once(350, this, () => {
                chip.sendChip();
            })
        }

        private onBattleSettle(info: any): void {
            if (!this._game.sceneObjectMgr.mainUnit) return;
            if (this._game.sceneObjectMgr.mainUnit.GetIndex() == info.SeatIndex) {
                this._mainPlayerBenefit = parseFloat(info.SettleVal);
            }
            if (info.SettleVal == 0) return;
            this.addMoneyClip(info.SeatIndex, info.SettleVal);
        }

        private areaName: string[] = ["蓝", "红", "和", "一对", "两对", "三条/顺子", "同花/葫芦", "金刚/同花顺"];
        private onBattleResult(info: any): void {
            for (let i = 0; i < info.Results.length; i++) {
                if (i < this.areaName.length) {
                    //中奖区域
                    if (info.Results[i] == 0) {
                        if (!this._lottery) {
                            this._lottery = this.areaName[i];
                        } else {
                            this._lottery += " , " + this.areaName[i];
                        }
                    }
                }
            }
        }

        private kuangShanShuo(index): void {
            this._areaKuangUIList[index].visible = true;
            this._areaKuangUIList[index].ani1.play(0, true);
            Laya.timer.once(3000, this, () => {
                this._areaKuangUIList[index].ani1.stop();
                this._areaKuangUIList[index].visible = false;
            });
        }

        //更新赔率
        private onUpdatePeilv(): void {
            if (!this._cardsArr) return;
            if (!this._cardsArr.length) return;
            let lanCard = this._cardsArr[0].Cards[0];
            let hongCard = this._cardsArr[1].Cards[0];
            let lanCardVal = this._bairendezhouMgr.getCardValue(lanCard);
            let hongCardVal = this._bairendezhouMgr.getCardValue(hongCard);
            let lessNum = Math.abs(lanCardVal - hongCardVal);
            let num = 2;
            if (lanCardVal > hongCardVal) {
                this._lannum = num - 0.01 * lessNum;
                this._hongnum = num + 0.01 * lessNum;
            } else if (lanCardVal < hongCardVal) {
                this._lannum = num + 0.01 * lessNum;
                this._hongnum = num - 0.01 * lessNum;
            }
            this._viewUI.txt_beilv1.text = "x" + this._lannum.toString();
            this._viewUI.txt_beilv0.text = "x" + this._hongnum.toString();
        }

        //结算飘筹码
        private flyChipEffect(): void {
            if (!this._resultArry.length) return
            let is_heju = this._resultArry[2] == 0 ? true : false;
            for (let i = 0; i < this._chipTotalList.length; i++) {
                let chipArr = [];
                chipArr = this._chipTotalList[i];
                //和局的话直接退还蓝红两个区域的筹码
                if ((is_heju && i == 0) || (is_heju && i == 1)) {
                    for (let j = 0; j < chipArr.length; j++) {
                        let chip: BairendezhouChip = chipArr[j];
                        let mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                        if (chip._seatIndex == mainIndex) {
                            chip.flyChip(0, false, j, this._game);//主玩家收筹码
                        } else {
                            let isSeat: boolean = false;
                            for (let k = 0; k < this._unitSeated.length; k++) {
                                let seatInfo = this._unitSeated[k];
                                if (seatInfo && seatInfo[0] == chip._seatIndex) {
                                    chip.flyChip(3 + k, false, j, this._game);//入座玩家收筹码
                                    isSeat = true;
                                    break;
                                }
                            }
                            if (!isSeat) {
                                chip.flyChip(1, false, j, this._game);//其他玩家收筹码
                            }
                        }
                    }
                } else if (this._resultArry[i] == 1) {
                    this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "piaoqian.mp3", false);
                    for (let j = 0; j < chipArr.length; j++) {
                        let chip: BairendezhouChip = chipArr[j];
                        //庄家先收筹码
                        chip.flyChip(2, false, j, this._game);
                    }
                } else {
                    this.kuangShanShuo(i);
                    Laya.timer.once(800, this, () => {
                        this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "piaoqian.mp3", false);
                        for (let j = 0; j < 20; j++) {
                            let ranType = MathU.randomRange(1, 5);
                            let ranVal = this._chipArr[ranType - 1];
                            this._chipSortScore++;
                            this.bankerFlyChip(2, i + 1, ranType, ranVal, this._chipSortScore, -1);
                        }
                    })
                    Laya.timer.once(2000, this, () => {
                        this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "piaoqian.mp3", false);
                        for (let j = 0; j < chipArr.length; j++) {
                            let chip: BairendezhouChip = chipArr[j];
                            let mainIndex = this._game.sceneObjectMgr.mainUnit.GetIndex();
                            if (chip._seatIndex == mainIndex) {
                                chip.flyChip(0, false, j, this._game);//主玩家收筹码
                            } else {
                                let isSeat: boolean = false;
                                for (let k = 0; k < this._unitSeated.length; k++) {
                                    let seatInfo = this._unitSeated[k];
                                    if (seatInfo && seatInfo[0] == chip._seatIndex) {
                                        chip.flyChip(3 + k, false, j, this._game);//入座玩家收筹码
                                        isSeat = true;
                                        break;
                                    }
                                }
                                if (!isSeat) {
                                    chip.flyChip(1, false, j, this._game);//其他玩家收筹码
                                }
                            }
                        }
                    })
                }
            }
        }

        //显示结算界面
        private showSettleInfo(): void {
            if (!this._resultArry.length) return
            this._pageHandle.pushOpen({
                id: TongyongPageDef.PAGE_TONGYONG_SETTLE,
                dataSource: { myBet: this._betMainTotal, myBenefit: this._mainPlayerBenefit, lottery: this._lottery },
                parent: this._game.uiRoot.HUD
            });
        }

        //金币变化 飘字clip
        public addMoneyClip(index: number, value: number): void {
            let valueClip = value >= 0 ? new BairendezhouiClip(BairendezhouiClip.ADD_MONEY_FONT) : new BairendezhouiClip(BairendezhouiClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            valueClip.scale(0.8, 0.8);
            valueClip.anchorX = 0.5;
            valueClip.setText(EnumToString.getPointBackNum(Math.abs(value), 2), true, false, preSkin);
            let playerIcon: any;
            if (index == this._game.sceneObjectMgr.mainUnit.GetIndex()) {
                playerIcon = this._viewUI.main_player;
            } else {
                let unit = this._game.sceneObjectMgr.getUnitByIdx(index);
                if (!unit) return;
                let seatIndex = unit.GetSeat();
                let bool = false;
                for (let i = 0; i < this._unitSeated.length; i++) {
                    let unitIndex = this._unitSeated[i][0];
                    if (index == unitIndex) {
                        bool = true;
                    }
                }
                if (!seatIndex) return;
                if (!bool) return;
                playerIcon = this._seatUIList[seatIndex - 1];
            }
            valueClip.x = playerIcon.clip_money.x;
            valueClip.y = playerIcon.clip_money.y;
            playerIcon.clip_money.parent.addChild(valueClip);
            this._clipList.push(valueClip);
            playerIcon.clip_money.visible = false;
            Laya.Tween.clearAll(valueClip);
            Laya.Tween.to(valueClip, { y: valueClip.y - 25 }, 1500);
        }

        //清理飘字clip
        private clearClips(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy(true);
                    clip = null;
                }
            }
            this._clipList = [];
        }

        //更新地图状态
        private onUpdateStatus() {
            if (!this._bairendezhouMapInfo) return;
            let mapStatus = this._bairendezhouMapInfo.GetMapState();
            if (this._curStatus == mapStatus) return;
            this._curStatus = mapStatus;
            this._viewUI.btn_repeat.disabled = this._curStatus != MAP_STATUS.PLAY_STATUS_BET;
            this._viewUI.paixieRight.cards.visible = this._curStatus > MAP_STATUS.PLAY_STATUS_WASH_CARD || this._curStatus == MAP_STATUS.PLAY_STATUS_STOP_BET;
            switch (this._curStatus) {
                case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段
                    // this._viewUI.txt_status.text = "准备";
                    this.resetAll();
                    break;
                case MAP_STATUS.PLAY_STATUS_GAMESTART:// 游戏开始
                    this.resetAll();
                    break;
                case MAP_STATUS.PLAY_STATUS_WASH_CARD:// 洗牌
                    this.resetAll();
                    this._viewUI.xipai.x = 640;
                    this._viewUI.xipai.y = 310;
                    this._viewUI.xipai.scaleX = 1;
                    this._viewUI.xipai.scaleY = 1;
                    this._viewUI.xipai.alpha = 1;
                    this._viewUI.xipai.rotation = 0;
                    this._viewUI.xipai.visible = true;
                    this._viewUI.xipai.ani_xipai.play(0, false);
                    Laya.timer.once(800, this, () => {
                        Laya.Tween.clearAll(this._viewUI.xipai);
                        Laya.Tween.to(this._viewUI.xipai, { x: 993, y: 173, alpha: 0, rotation: -30, scaleX: 0.35, scaleY: 0.35 }, 500);
                    })
                    Laya.timer.once(1300, this, () => {
                        this._viewUI.paixieRight.cards.visible = true;
                        this._viewUI.paixieRight.ani_chupai.play(0, false);
                    })
                    break;
                case MAP_STATUS.PLAY_STATUS_PUSH_CARD:// 发牌阶段
                    this._viewUI.ani_deal.visible = true;
                    this._viewUI.ani_deal.ani1.play(0, true);
                    break;
                case MAP_STATUS.PLAY_STATUS_BET:// 下注阶段
                    if (Math.floor(this._bairendezhouMapInfo.GetCountDown() - this._game.sync.serverTimeBys) >= 14) {
                        this._pageHandle.pushOpen({ id: BairendezhouPageDef.PAGE_BAIRENDEZHOU_BEGIN, parent: this._game.uiRoot.HUD });
                        this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "dingding_start.mp3");
                        this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "xiazhu_start.mp3");
                    }
                    this.onUpdateSeatedList();
                    let bool = false;
                    for (let i = 0; i < this._rebetList.length; i++) {
                        if (this._rebetList[i] > 0) {
                            bool = true;
                            break;
                        }
                    }
                    this._viewUI.btn_repeat.disabled = !bool;
                    for (let i = 0; i < this._areaKuangUIList.length; i++) {
                        this.kuangShanShuo(i);
                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_STOP_BET:// 停止下注
                    this._pageHandle.pushClose({ id: BairendezhouPageDef.PAGE_BAIRENDEZHOU_BEGIN, parent: this._game.uiRoot.HUD });
                    this._pageHandle.pushOpen({ id: BairendezhouPageDef.PAGE_BAIRENDEZHOU_END, parent: this._game.uiRoot.HUD });
                    this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "dingding_end.mp3");
                    this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "xiazhu_end.mp3");
                    break;
                case MAP_STATUS.PLAY_STATUS_SHOW_CARD:// 开牌阶段
                    this._pageHandle.pushClose({ id: BairendezhouPageDef.PAGE_BAIRENDEZHOU_END, parent: this._game.uiRoot.HUD });
                    let betAllTotal = 0;
                    for (let i = 0; i < this._betMainList.length; i++) {
                        betAllTotal += this._betMainList[i];
                    }
                    if (betAllTotal > 0) {
                        for (let i = 0; i < this._betMainList.length; i++) {
                            this._rebetList[i] = this._betMainList[i];
                        }
                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_SETTLE:// 结算阶段
                    this.onUpdateSeatedList();
                    if (Math.floor(this._bairendezhouMapInfo.GetCountDown() - this._game.sync.serverTimeBys) >= 4) {
                        this.flyChipEffect();
                        if (this._resultArry.length) {
                            Laya.timer.once(500, this, () => {
                                if (this._resultArry[0] == 0) {
                                    this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "win_blue.mp3");
                                    this._game.uiRoot.HUD.open(BairendezhouPageDef.PAGE_BAIRENDEZHOU_RESULT, (page) => {
                                        page.dataSource = 0;

                                    });
                                } else if (this._resultArry[1] == 0) {
                                    this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "win_red.mp3");
                                    this._game.uiRoot.HUD.open(BairendezhouPageDef.PAGE_BAIRENDEZHOU_RESULT, (page) => {
                                        page.dataSource = 1;
                                    })
                                } else if (this._resultArry[2] == 0) {
                                    this._game.playSound(Path_game_bairendezhou.music_bairendezhou + "he.mp3");
                                    this._game.uiRoot.HUD.open(BairendezhouPageDef.PAGE_BAIRENDEZHOU_RESULT, (page) => {
                                        page.dataSource = 2;
                                    });
                                }
                            });
                        }
                    }
                    Laya.timer.once(1500, this, () => {
                        if (this._mainPlayerBenefit >= 0) {
                            let rand = MathU.randomRange(1, 3);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "win{0}.mp3", rand), true);
                        } else if (this._mainPlayerBenefit < 0) {
                            let rand = MathU.randomRange(1, 4);
                            this._game.playSound(StringU.substitute(PathGameTongyong.music_tongyong + "lose{0}.mp3", rand), true);
                        }
                    });
                    break;
                case MAP_STATUS.PLAY_STATUS_SETTLE_SHOW:// 结算结果展示
                    this._pageHandle.pushClose({ id: BairendezhouPageDef.PAGE_BAIRENDEZHOU_RESULT, parent: this._game.uiRoot.HUD });
                    if (Math.floor(this._bairendezhouMapInfo.GetCountDown() - this._game.sync.serverTimeBys) >= 2) {
                        this.showSettleInfo()
                    }
                    //每局重新开始把菜单收起来
                    if (this._viewUI.box_menu.y >= 0) {
                        this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                        this._viewUI.box_menu.visible = false;
                        this._viewUI.btn_spread.visible = true;
                    }
                    break;
                case MAP_STATUS.PLAY_STATUS_RELAX:// 休息阶段
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_SETTLE, parent: this._game.uiRoot.HUD });
                    this.resetAll();
                    break;
            }

            this._pageHandle.updatePageHandle();//更新额外界面的开关状态
            this._pageHandle.reset();//清空额外界面存储数组
        }

        //按钮缓动回调
        protected onBtnTweenEnd(e: any, target: any): void {
            switch (target) {
                case this._viewUI.btn_spread://菜单
                    this.showMenu(true);
                    break;
                case this._viewUI.btn_playerList://玩家列表
                    this._game.uiRoot.general.open(BairendezhouPageDef.PAGE_BAIRENDEZHOU_PLAYER_LIST);
                    break;
                case this._viewUI.btn_record://大路详情
                    this._game.uiRoot.general.open(BairendezhouPageDef.PAGE_BAIRENDEZHOU_ZOUSHI);
                    break;
                case this._viewUI.btn_qifu://祈福
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_QIFU);
                    break;
                case this._viewUI.btn_rule://规则
                    this._game.uiRoot.general.open(BairendezhouPageDef.PAGE_BAIRENDEZHOU_RULE);
                    break;
                case this._viewUI.btn_cardType://牌型
                    this._game.uiRoot.general.open(BairendezhouPageDef.PAGE_BAIRENDEZHOU_RULE, (page: BairendezhouRulePage) => {
                        page.dataSource = 1;
                    });
                    break;
                case this._viewUI.btn_set://设置
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING)
                    break;
                case this._viewUI.btn_zhanji://战绩
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = BairendezhouPageDef.GAME_NAME;
                    });
                    break;
                case this._viewUI.btn_repeat://重复下注
                    if (this.showIsGuest()) return;
                    this.repeatBet();
                    break;
                case this._viewUI.btn_back://返回
                    let totalBet = 0;
                    for (let i = 0; i < 8; i++) {
                        totalBet += this._betMainList[i];
                    }
                    if (totalBet && this._bairendezhouMapInfo && this._bairendezhouMapInfo.GetPlayState() == 1) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }
                    TongyongPageDef.ins.alertClose("bairendezhou", this, this.onClickCancle);
                    break;
                case this._viewUI.btn_chongzhi://充值
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                default:
                    break;
            }
        }

        //重复下注
        private repeatBet(): void {
            if (this.showIsGuest()) return;
            if (this._betWait) return;//投注间隔
            let betArr = [];
            let total = 0;
            for (let i = 0; i < this._rebetList.length; i++) {
                if (this._rebetList[i] + this._betMainList[i] > this._betlimit) {
                    this._game.uiRoot.topUnder.showTips(StringU.substitute("投注点限红{0}哦~", this._betlimit));
                    return;
                }
            }
            for (let i = 0; i < this._rebetList.length; i++) {
                if (this._betMainList[0] > 0) {//蓝
                    if (this._rebetList[1] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，蓝红不能同时下注哦~");
                        return;
                    }
                }
                if (this._betMainList[1] > 0) {//红
                    if (this._rebetList[0] > 0) {
                        this._game.uiRoot.topUnder.showTips("老板，蓝红不能同时下注哦~");
                        return;
                    }
                }
                total += this._rebetList[i];
            }
            if (total > this._game.sceneObjectMgr.mainUnit.GetMoney()) {
                this._game.uiRoot.topUnder.showTips("老板,您的金币不够重复下注啦~");
                return;
            }
            for (let i = 0; i < this._rebetList.length; i++) {
                let antes = this._rebetList[i]//之前区域i下注总额
                if (antes) {
                    //从最大筹码开始循环，优先丢出大额筹码，剩下零头再由小额筹码去拼凑
                    for (let j = this._chipArr.length - 1; j >= 0; j--) {
                        if (!antes) break;
                        let num = Math.floor(antes / this._chipArr[j]);
                        if (num) {
                            antes = antes - this._chipArr[j] * num;
                            for (let k = 0; k < num; k++) {
                                this._game.network.call_bairendezhou_bet(this._chipArr[j], i + 1);
                            }
                        }
                    }
                }
            }
            this._betWait = true;
            Laya.timer.once(500, this, () => {
                this._betWait = false;
            })
        }

        //下注
        private _betWait: boolean = false;
        private onAreaBetClick(index: number, e: LEvent): void {
            if (this.showIsGuest()) return;
            if (this._curStatus != MAP_STATUS.PLAY_STATUS_BET) {
                this._game.uiRoot.topUnder.showTips("当前不在下注时间，请在下注时间再进行下注！");
                return;
            }
            if (this._betWait) return;//投注间隔
            let total = this._betMainList[index];
            if (this._curChip + total > this._betlimit) {
                this._game.uiRoot.topUnder.showTips(StringU.substitute("本投注点限红{0}哦~", this._betlimit));
                return;
            }
            if (index == 0) {//蓝
                if (this._betMainList[1] > 0) {
                    this._game.uiRoot.topUnder.showTips("老板，蓝红不能同时下注哦~");
                    return;
                }
            }
            if (index == 1) {//红
                if (this._betMainList[0] > 0) {
                    this._game.uiRoot.topUnder.showTips("老板，蓝红不能同时下注哦~");
                    return;
                }
            }
            let money = this._game.sceneObjectMgr.mainUnit.GetMoney();
            let betBefore = 0;
            for (let i = 0; i < 8; i++) {
                betBefore += this._betMainList[i];
            }
            if (money + betBefore < PLAYER_LEAST_MONEY) {
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", PLAYER_LEAST_MONEY), () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, true,TongyongPageDef.TIPS_SKIN_STR['cz']);
                return;
            }
            if (!this._curChip || this._curChip > money) {
                TongyongPageDef.ins.alertRecharge("老板，您的金币不足哦~\n补充点金币去大杀四方吧~", () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, true, TongyongPageDef.TIPS_SKIN_STR['cz']);
                return;
            }

            this._betWait = true;
            Laya.timer.once(500, this, () => {
                this._betWait = false;
            })
            this._rebetList[index] += this._curChip;
            this._game.network.call_bairendezhou_bet(this._curChip, index + 1)
        }

        //筹码点击事件
        private onClickChip(index: number, e: LEvent): void {
            if (this._chipArr[index] == this._curChip) return;
            this._game.uiRoot.btnTween(e.currentTarget);
            this.onSelectChip(index);
        }

        //选择筹码
        private onSelectChip(index: number): void {
            this._curChip = this._chipArr[index];
            for (let i: number = 0; i < this._chipUIList.length; i++) {
                this._chipGuangUIList[i].visible = i == index;
                this._chipUIList[i].y = i == index ? this._curChipY - 10 : this._curChipY;
            }
        }

        //选择座位入座
        private onSelectSeat(index: number): void {
            if (this.showIsGuest()) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (mainUnit.GetMoney() < this._seatlimit) {
                this._game.uiRoot.topUnder.showTips("金币不足");
                return;
            }
            this._game.network.call_bairendezhou_seated(index + 1);
        }

        protected onMouseClick(e: LEvent) {
            if (e.target != this._viewUI.btn_spread) {
                this.showMenu(false);
            }
        }

        showMenu(isShow: boolean) {
            if (isShow) {
                this._viewUI.box_menu.visible = true;
                this._viewUI.btn_spread.visible = false;
                this._viewUI.box_menu.y = -this._viewUI.box_menu.height;
                Laya.Tween.clearAll(this._viewUI.box_menu);
                Laya.Tween.to(this._viewUI.box_menu, { y: 10 }, 300, Laya.Ease.circIn)
            } else {
                if (this._viewUI.box_menu.y >= 0) {
                    Laya.Tween.clearAll(this._viewUI.box_menu);
                    Laya.Tween.to(this._viewUI.box_menu, { y: -this._viewUI.box_menu.height }, 300, Laya.Ease.circIn, Handler.create(this, () => {
                        this._viewUI.btn_spread.visible = true;
                        this._viewUI.box_menu.visible = false;
                    }));
                }
            }
        }

        private showIsGuest(): boolean {
            if (WebConfig.baseplatform == PageDef.BASE_PLATFORM_TYPE_NQP) return false;
            if (this._game.sceneObjectMgr.mainPlayer.IsIsGuest()) {
                TongyongPageDef.ins.alertRecharge("亲爱的玩家，您正使用游客模式进行游戏，该模式下的游戏数据（包括付费数据）在删除游戏、更换设备后清空！对此造成的损失，本平台将不承担任何责任。为保障您的虚拟财产安全，我们强力建议您绑定手机号升级为正式账号。",
                    () => { }, () => { }, true);
                return true;
            }
            return false;
        }

        private resetAll(): void {
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
            this.clearClips();
            this.resetUI();
            this.resetData();
            this._bairendezhouMgr.clear();
            Laya.timer.clear(this, this.kuangShanShuo);
        }

        private onClickCancle(): void {
            this._game.sceneObjectMgr.leaveStory(true);
        }

        private onUpdateGameNo(): void {
            if (this._bairendezhouMapInfo.GetGameNo()) {
                this._viewUI.txt_id.visible = true;
                this._viewUI.txt_id.text = "牌局号：" + this._bairendezhouMapInfo.GetGameNo();
            }
        }

        private onUpdateCountDown(): void {
            if (!this._bairendezhouMapInfo) return;
            this._countDown = this._bairendezhouMapInfo.GetCountDown();
        }

        private onUpdateRecord(): void {
            if (!this._bairendezhouMapInfo) return;
            let recordArr = [];
            let gameRecord = this._bairendezhouMapInfo.GetGameRecord();
            if (gameRecord != "") {
                recordArr = JSON.parse(gameRecord);
            }
            let tempRecord = [];
            let length = recordArr.length;
            let maxlenth = this._viewUI.list_record0.repeatX
            if (length > maxlenth) {
                for (let i = 0; i < maxlenth; i++) {
                    tempRecord[i] = recordArr[recordArr.length - maxlenth + i]
                }
            } else {
                tempRecord = recordArr
            }
            this._viewUI.list_record0.dataSource = tempRecord;
        }

        private onUpdateCardRecord(): void {
            if (!this._bairendezhouMapInfo) return;
            let recordArr = [];
            let cardRecord = this._bairendezhouMapInfo.GetCardRecord();
            if (cardRecord != "") {
                recordArr = JSON.parse(cardRecord);
            }
            let tempRecord = [];
            let length = recordArr.length;
            let maxlenth = this._viewUI.list_record1.repeatX
            if (length > maxlenth) {
                for (let i = 0; i < maxlenth; i++) {
                    tempRecord[i] = recordArr[recordArr.length - maxlenth + i]
                }
            } else {
                tempRecord = recordArr
            }
            this._viewUI.list_record1.dataSource = tempRecord;
        }

        private onUpdateSeatedList(qifu_index?: number): void {
            if (!this._bairendezhouMapInfo) return;
            let seatedList = this._bairendezhouMapInfo.GetSeatedList();
            if (seatedList != "") {
                this._unitSeated = JSON.parse(seatedList);
            }
            if (!this._unitSeated.length) {
                return;
            }
            for (let i = 0; i < this._seatUIList.length; i++) {
                let unitIndex = this._unitSeated[i][0];
                let unit = this._game.sceneObjectMgr.getUnitByIdx(unitIndex);
                if (unit) {
                    (this._seatUIList[i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI).txt_name.text = getMainPlayerName(unit.GetName());
                    (this._seatUIList[i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI).txt_name.fontSize = 15;
                    (this._seatUIList[i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI).txt_money.text = EnumToString.getPointBackNum(unit.GetMoney(), 2).toString();
                    let unitHeadImg = unit.GetHeadImg();
                    if (unitHeadImg) {
                        (this._seatUIList[i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + unitHeadImg + ".png";
                    }
                    this._seatUIList[i].img_txk.visible = unit.GetVipLevel() > 0;
                    if (this._seatUIList[i].img_txk.visible) {
                        this._seatUIList[i].img_txk.skin = PathGameTongyong.ui_tongyong_touxiang + "tu_v" + unit.GetVipLevel() + ".png";
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && unitIndex == qifu_index) {
                        this._seatUIList[i].qifu_type.visible = true;
                        this._seatUIList[i].qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween1(this._seatUIList[i].qifu_type, qifu_index);
                    }
                    //时间戳变化 才加上祈福标志
                    if (unit.GetQFEndTime(unit.GetQiFuType() - 1) > this._game.sync.serverTimeBys) {
                        if (qifu_index && unitIndex == qifu_index) {
                            Laya.timer.once(2500, this, () => {
                                this._seatUIList[i].img_qifu.visible = true;
                                if (unit.GetQiFuType()) {
                                    let qifuImgUrl = this._nameStrInfo[unit.GetQiFuType() - 1];
                                    (this._seatUIList[i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                                }
                            })
                        } else {
                            this._seatUIList[i].img_qifu.visible = true;
                            if (unit.GetQiFuType()) {
                                let qifuImgUrl = this._nameStrInfo[unit.GetQiFuType() - 1];
                                (this._seatUIList[i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_touxiang + "head_" + qifuImgUrl + ".png";
                            }
                        }
                    } else {
                        this._seatUIList[i].img_qifu.visible = false;
                    }
                } else {
                    (this._seatUIList[i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI).txt_name.text = "";
                    (this._seatUIList[i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI).txt_money.text = "点击入座";
                    (this._seatUIList[i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI).img_icon.skin = PathGameTongyong.ui_tongyong_general + "tu_weizi.png";
                    this._seatUIList[i].img_qifu.visible = false;
                    this._seatUIList[i].qifu_type.visible = false;
                    this._seatUIList[i].img_txk.visible = false;
                }
            }
        }

        //初始化UI界面
        private initView(): void {
            this._viewUI.box_menu.y = -290;
            this._viewUI.box_menu.zOrder = 99;
            this._viewUI.box_menu.visible = false;

            this._areaList = [];
            this._chipUIList = [];
            this._seatUIList = [];
            this._chipGuangUIList = [];
            this._areaKuangUIList = [];
            this._txtTotalUIList = [];
            this._txtBetUIList = [];
            this._htmlTextArr = [];

            //下注区域光效和文本
            for (let i: number = 0; i < 8; i++) {
                this._areaList.push(this._viewUI["area" + i]);
                this._areaKuangUIList.push(this._viewUI["kuang" + i]);
                this._txtTotalUIList.push(this._viewUI["txt_total" + i]);
                this._areaKuangUIList[i].visible = false;
                this._areaList[i].on(LEvent.CLICK, this, this.onAreaBetClick, [i]);
                //下注文本：玩家下注数/总下注数
                if (i < 3) {
                    this._htmlTextArr[i] = TextFieldU.createHtmlText(this._txtTotalUIList[i]);
                    this._htmlTextArr[i].style.lineHeight = 30;
                    this._htmlTextArr[i].style.valign = "middle";
                    this._htmlTextArr[i].innerHTML = "<span style='color:#ffd200'>0</span><span style='color:#ffffff'>/0</span>";
                } else {
                    this._txtTotalUIList[i].text = "0";
                }
            }
            //玩家下注数文本
            for (let i: number = 0; i < 5; i++) {
                this._txtBetUIList.push(this._viewUI["txt_bet" + i]);
                this._txtBetUIList[i].text = "0";
            }
            //筹码选择区域
            for (let i: number = 0; i < 5; i++) {
                this._chipUIList.push(this._viewUI["btn_chip" + i]);
                this._chipUIList[i].on(LEvent.CLICK, this, this.onSelectChip, [i]);
                this._chipGuangUIList.push(this._viewUI["guang" + i]);
                if (i == 0) {
                    this._curChipY = this._chipUIList[i].y;
                    this._chipGuangUIList[i].visible = true;
                } else {
                    this._chipGuangUIList[i].visible = false;
                }
            }
            //座位
            for (let i: number = 0; i < 6; i++) {
                this._seatUIList.push(this._viewUI["seat" + i] as ui.nqp.game_ui.bairendezhou.component.TouXiangWzUI);
                this._seatUIList[i].clip_money.visible = false;
                this._seatUIList[i].on(LEvent.CLICK, this, this.onSelectSeat, [i]);
            }
            //开牌动作
            this._viewUI.kaipaiLan.visible = false;
            this._viewUI.kaipaiLan.ani_kaipai.stop();
            this._viewUI.kaipaiLan.ani_kaipai.on(LEvent.COMPLETE, this, this.onKaiPaiAniDealOver, [1]);
            this._viewUI.kaipaiHong.visible = false;
            this._viewUI.kaipaiHong.ani_kaipai.stop();
            this._viewUI.kaipaiHong.ani_kaipai.on(LEvent.COMPLETE, this, this.onKaiPaiAniDealOver, [2]);
            //赔率
            this._viewUI.txt_beilv0.text = "x2"
            this._viewUI.txt_beilv1.text = "x2"

            this._viewUI.list_record0.itemRender = this.createChildren("game_ui.bairendezhou.component.zoushiUI", RecordRender);
            this._viewUI.list_record0.renderHandler = new Handler(this, this.renderHandler1);
            this._viewUI.list_record1.itemRender = this.createChildren("game_ui.bairendezhou.component.DuiZi1UI", CardRecordRender);
            this._viewUI.list_record1.renderHandler = new Handler(this, this.renderHandler2);
            if (!this._htmlText) {
                this._htmlText = TextFieldU.createHtmlText(this._viewUI.txt_online);
            }
            //主玩家UI
            this._viewUI.main_player.clip_money.visible = false;
            //界面UI
            this._viewUI.txt_id.visible = false;
            this._viewUI.box_time.visible = false;
            this._viewUI.xipai.visible = false;
            this._viewUI.paixieRight.ani_chupai.stop();
            this._viewUI.ani_deal.ani1.stop();
            this._viewUI.ani_deal.visible = false;
            this._viewUI.paixieLeft.visible = false;
            this._viewUI.lan_type.visible = false;
            this._viewUI.hong_type.visible = false;
            this._viewUI.btn_repeat.disabled = true;
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

        private initRoomConfig(): void {
            let maplv = this._bairendezhouMapInfo.GetMapLevel();
            if (maplv && ALL_GAME_ROOM_CONFIG_ID.indexOf(maplv) != -1) {
                this._chipArr = ROOM_CHIP_CONFIG[maplv];
                this._seatlimit = MONEY_LIMIT_CONFIG[maplv][1];
                this._betlimit = MONEY_LIMIT_CONFIG[maplv][2];
                this._robotConfig = ROBOT_NUM_CONFIG[maplv];

                if (this._robotConfig) {
                    this.updateOnline();
                }
                if (!this._chipArr) return;
                for (let i = 0; i < this._chipArr.length; i++) {
                    this._chipUIList[i].label = EnumToString.sampleChipNum(this._chipArr[i]);
                }
                if (!this._curChip) this.onSelectChip(0);
            }
        }

        //重置UI
        private resetUI(): void {
            //主玩家UI
            this._viewUI.main_player.clip_money.visible = false;
            //界面UI
            for (let i = 0; i < 8; i++) {
                if (i < 3) {
                    this._htmlTextArr[i].innerHTML = "<span style='color:#ffd200'>0</span><span style='color:#ffffff'>/0</span>";
                } else {
                    this._txtTotalUIList[i].text = "0";
                }
            }
            //玩家下注数文本
            for (let i = 0; i < 5; i++) {
                this._txtBetUIList[i].text = "0";
            }
            //开牌动作
            this._viewUI.lan_type.visible = false;
            this._viewUI.hong_type.visible = false;
            //赔率
            this._viewUI.txt_beilv0.text = "x2"
            this._viewUI.txt_beilv1.text = "x2"
        }

        private resetData(): void {
            this._battleIndex = -1;
            this._cardsArr = [];
            this._resultArry = [];
            this._zuheArry = [];
            this._lannum = 2;
            this._hongnum = 2;
            this._betMainTotal = 0;
            for (let i = 0; i < 8; i++) {
                this._chipTotalList[i] = [];
            }
            this._betTotalList = [0, 0, 0, 0, 0, 0, 0, 0];
            this._betMainList = [0, 0, 0, 0, 0, 0, 0, 0];
            this._mainPlayerBenefit = 0;
            this._lottery = "";
            if (this._bairendezhouMgr) {
                this._bairendezhouMgr.isReconnect = false;
                this._bairendezhouMgr.isReDrawCards = false;
            }
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_spread.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rule.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cardType.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_zhanji.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_repeat.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_playerList.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);

                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_STATUS_CHECK, this, this.onUpdateStatus);
                this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);

                // this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_GAME_NO, this, this.onUpdateGameNo);//牌局号
                this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_COUNT_DOWN, this, this.onUpdateCountDown);//倒计时时间戳更新
                this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_GAME_RECORD, this, this.onUpdateRecord);//游戏记录更新
                this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_SEATED_LIST, this, this.onUpdateSeatedList);//入座列表更新
                this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_CARD_RECORD, this, this.onUpdateCardRecord);//牌型更新
                this._game.sceneObjectMgr.off(BairendezhouMapInfo.EVENT_STATUS_CHECK, this, this.initRoomConfig);//地图传送参数
                this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);

                for (let i: number = 0; i < this._areaList.length; i++) {
                    this._areaList[i] && this._areaList[i].off(LEvent.CLICK, this, this.onAreaBetClick);
                }
                this._areaList = [];
                for (let i: number = 0; i < this._chipUIList.length; i++) {
                    this._chipUIList[i] && this._chipUIList[i].off(LEvent.CLICK, this, this.onSelectChip);
                }
                this._chipUIList = [];
                for (let i: number = 0; i < this._seatUIList.length; i++) {
                    this._seatUIList[i] && this._seatUIList[i].off(LEvent.CLICK, this, this.onSelectSeat, [i]);
                }
                this._chipTotalList = [];
                this._seatUIList = [];
                this._viewUI.paixieRight.ani_chupai.stop();
                this._viewUI.ani_deal.ani1.stop();
                this._viewUI.kaipaiLan.ani_kaipai && this._viewUI.kaipaiLan.ani_kaipai.off(LEvent.COMPLETE, this, this.onKaiPaiAniDealOver);
                this._viewUI.kaipaiHong.ani_kaipai && this._viewUI.kaipaiHong.ani_kaipai.off(LEvent.COMPLETE, this, this.onKaiPaiAniDealOver);
                if (this._bairendezhouMgr) {
                    this._bairendezhouMgr.off(BairendezhouMgr.DEAL_OVER, this, this.onUpdateAniDeal);
                    this._bairendezhouMgr.off(BairendezhouMgr.OPEN_OVER, this, this.onOpenCardOver);
                    this._bairendezhouMgr.off(BairendezhouMgr.MOVE_CARD, this, this.onMoveCardOver);
                    this._bairendezhouMgr.off(BairendezhouMgr.BACK_CARD, this, this.onBackCardOver);
                    this._bairendezhouMgr.off(BairendezhouMgr.OPEN_ANI, this, this.onKaiPaiAniDeal);
                }

                this._game.uiRoot.HUD.close(BairendezhouPageDef.PAGE_BAIRENDEZHOU_BEGIN);
                this._game.uiRoot.HUD.close(BairendezhouPageDef.PAGE_BAIRENDEZHOU_END);
                this.resetAll();
                this._bairendezhouStory && this._bairendezhouStory.clear();
                this._game.stopAllSound();
                this._game.stopMusic();
            }
            super.close();
        }
    }

    class RecordRender extends ui.nqp.game_ui.bairendezhou.component.zoushiUI {
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
            this.img_record.skin = StringU.substitute(Path_game_bairendezhou.ui_bairendezhou + "zs_{0}.png", this._data == 0 ? "2" : this._data == 1 ? "1" : "0");
        }
        destroy() {
            super.destroy();
        }
    }

    class CardRecordRender extends ui.nqp.game_ui.bairendezhou.component.DuiZi1UI {
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