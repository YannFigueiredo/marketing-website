function gerenciarGaleriaServicos(config){
    this.container = document.querySelector(config.container);
    this.itens = document.querySelectorAll(config.itens);

    _this = this;

    addEventosItens();

    //_this.itens[4].classList.add('btn-ativo');

    function addEventosItens(){
        _this.itens[0].addEventListener('click', function(){
            ativarCategoriaServico(0);
        });
        _this.itens[1].addEventListener('click', function(){
            ativarCategoriaServico(1);
        });
        _this.itens[2].addEventListener('click', function(){
            ativarCategoriaServico(2);
        });
        _this.itens[3].addEventListener('click', function(){
            ativarCategoriaServico(3);
        });
        _this.itens[4].addEventListener('click', function(){
            ativarCategoriaServico(4);
        });
    }

    function ativarCategoriaServico(item){
        resetarBtnAtivo();
        _this.itens[item].classList.add('btn-ativo');
    }

    function resetarBtnAtivo(){
        for(var i = 0; i < _this.itens.length; i++){
            _this.itens[i].classList.remove('btn-ativo');
        }
    }
}

