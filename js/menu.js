function gerenciarMenuMobile(config){
    this.menu = document.querySelector(config.menu);
    this.btnMenu = document.querySelector(config.btnMenu);

    var _this = this;

    _this.btnMenu.addEventListener('click', function(){
        if(_this.menu.clientHeight == '0'){
            abrirMenu();
        }else{
            fecharMenu();
        }
    });

    function abrirMenu(){
        _this.menu.style.height = 250 + 'px';
    }

    function fecharMenu(){
        _this.menu.style.height = 0 + 'px';
    }
}