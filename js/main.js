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

    var galeriaModal = gerenciarGaleriaModal({
        modal: '.modal',
        imgGaleria: '.cards-servicos figure img',
        btnVoltar: '#btn-voltar',
        btnAvancar: '#btn-avancar',
        btnFechar: '#btn-fechar',
        controladorSlide: '.controlador-slide'
    });
}());