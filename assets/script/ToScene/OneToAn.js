cc.Class({
    extends: cc.Component,

    properties: {
        btn:{
            default:null,
            type:cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        this.btn.on('touchstart',function(){
            cc.director.loadScene('Answer');
            cc.sys.localStorage.GameToAnswer = 'GameOne';
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
