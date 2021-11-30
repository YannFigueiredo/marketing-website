function carroselDepoimentos(config){
    this.container = document.querySelector(config.container);
    this.item = document.querySelectorAll(config.item);

    var _this = this;

    console.log(_this.container.clientWidth);
    console.log(window.innerWidth);

    console.log(_this.item.length);

    for(var i = 0; i < _this.item.length; i++){
        console.log(_this.item[i].clientWidth);
    }
}