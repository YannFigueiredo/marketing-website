(function(){
    var gerenciarMenu = gerenciarMenuMobile({
        menu: '.menu',
        btnMenu: '#btn-menu'
    });

    var gerenciarGaleria = gerenciarGaleriaServicos({
        container: '.menu-servicos',
        itens: '.menu-servicos li',
        imgGaleria: '.cards-servicos figure'
    });
}());