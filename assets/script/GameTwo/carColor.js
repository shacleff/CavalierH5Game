cc.Class({
    extends: cc.Component,

    properties: {
        car:{
            default:null,
            type:cc.Node,
        },
        blackCar:{
            default:null,
            type:cc.Node,
        },
        brownCar:{
            default:null,
            type:cc.Node,
        },
        whiteCar:{
            default:null,
            type:cc.Node,
        },
        blueCar:{
            default:null,
            type:cc.Node,
        },
        redCar:{
            default:null,
            type:cc.Node,
        },
        blackTick:cc.Node,
        brownTick:cc.Node,
        whiteTick:cc.Node,
        blueTick:cc.Node,
        redTick:cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.blackCar.active = false;
        this.brownCar.active = false;
        this.whiteCar.active = false;
        this.blueCar.active = false;
        this.redCar.active = false;
        var carColor;
        carColor = parseInt(cc.random0To1()*5+1,10);
        cc.sys.localStorage.carColor = carColor;
        if(carColor == 1){
            this.blackCar.active = true;
            cc.sys.localStorage.newCarColor = 'black';
        }else if(carColor == 2){
            this.brownCar.active = true;
            cc.sys.localStorage.newCarColor = 'brown';
        }else if(carColor == 3){
            this.whiteCar.active = true;
            cc.sys.localStorage.newCarColor = 'white';
        }else if(carColor == 4){
            this.blueCar.active = true;
            cc.sys.localStorage.newCarColor = 'blue';
        }else if(carColor == 5){
            this.redCar.active = true;
            cc.sys.localStorage.newCarColor = 'red';
        }

        this.car.on('touchstart',function(){
            if(cc.sys.localStorage.carColor == 1){
                this.brownCar.active = true;
                this.blackCar.active = false;
                this.whiteCar.active = false;
                this.blueCar.active = false;
                this.redCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) + 1;
                cc.sys.localStorage.newCarColor = 'brown';
            }else if(cc.sys.localStorage.carColor == 2){
                this.whiteCar.active = true;
                this.blackCar.active = false;
                this.brownCar.active = false;
                this.blueCar.active = false;
                this.redCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) + 1;
                cc.sys.localStorage.newCarColor = 'white';
            }else if(cc.sys.localStorage.carColor == 3){
                this.blueCar.active = true;
                this.blackCar.active = false;
                this.brownCar.active = false;
                this.whiteCar.active = false;
                this.redCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) + 1;
                cc.sys.localStorage.newCarColor = 'blue';
            }else if(cc.sys.localStorage.carColor == 4){
                this.redCar.active = true;
                this.blackCar.active = false;
                this.brownCar.active = false;
                this.whiteCar.active = false;
                this.blueCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) + 1;
                cc.sys.localStorage.newCarColor = 'red';
            }else if(cc.sys.localStorage.carColor == 5){
                this.blackCar.active = true;
                this.brownCar.active = false;
                this.whiteCar.active = false;
                this.blueCar.active = false;
                this.redCar.active = false;
                cc.sys.localStorage.carColor = parseInt(cc.sys.localStorage.carColor) - 4;
                cc.sys.localStorage.newCarColor = 'black';
            }
            this.blackTick.active = false;
            this.brownTick.active = false;
            this.whiteTick.active = false;
            this.blueTick.active = false;
            this.redTick.active = false;
        },this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
