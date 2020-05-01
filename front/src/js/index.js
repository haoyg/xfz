//在Banner.prototype上绑定方法
function Banner() {
    //这个里面写代码
    this.bannerGroup = $("#banner-group");
    this.index = 0;
    this.leftArrow = $(".left-arrow");
    this.rightArrow = $(".right-arrow");
    this.bannerUI = $("#banner-ul");
    this.listenBannerHover();
}

Banner.prototype.toggleArrow = function(isShow){
    var self = this;
    if(isShow){
        self.leftArrow.show();
        self.rightArrow.show();
    }else{
        self.leftArrow.hide();
        self.rightArrow.hide();
    }
}

Banner.prototype.listenBannerHover = function(){
    var self = this;
    this.listenBannerHover(function () {
        clearInterval(self.timer);
    },function () {
    self.loop();
    })
};

Banner.prototype.loop = function () {
    var self = this;
    var bannerUI = $("#banner-ul");
    var timer = setInterval(function () {
        if (self.index >= 2) {
            self.index = 0
        } else {
            self.index++
        }
        bannerUI.animate({"left": -798 * self.index}, 500);
    }, 2000)
}

Banner.prototype.listenArrowClick = function(){
    var self = this;
    self.leftArrow.click(function () {
        if(self.index === 0){

        }

    });
};

Banner.prototype.run = function () {
    console.log("running.....");
    this.loop();
};

$(function () {
    var banner = new Banner();
    banner.run();
})