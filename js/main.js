(function(){
    var gerenciarMenu = new gerenciarMenuMobile({
        menu: '.menu',
        btnMenu: '#btn-menu'
    });

    var gerenciarGaleria = new gerenciarGaleriaServicos({
        container: '.menu-servicos',
        itens: '.menu-servicos li',
        figGaleria: '.cards-servicos figure'
    });

    var galeriaModal = new gerenciarGaleriaModal({
        modal: '.modal',
        imgGaleria: '.cards-servicos figure img',
        btnVoltar: '#btn-voltar',
        btnAvancar: '#btn-avancar',
        btnFechar: '#btn-fechar',
        controladorSlide: '.controlador-slide'
    });

    var carrosel = new carroselDepoimentos({
        container: '.area-depoimentos',
        item: '.area-depoimentos article'
    });
}());