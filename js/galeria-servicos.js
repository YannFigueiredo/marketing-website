function gerenciarGaleriaServicos(config){
    this.container = document.querySelector(config.container);
    this.itens = document.querySelectorAll(config.itens);
    this.figGaleria = document.querySelectorAll(config.figGaleria);

    _this = this;

    /*var altImg = 0;
    var largImg = 0;
    altImg = _this.servico[i].clientHeight;
    largImg = _this.servico[i].clientWidth;*/

    addEventosItens();

    function addEventosItens(){
        _this.itens[0].addEventListener('click', function(){
            ativarCategoriaServico(0);
            apresentarTodos();
        });
        _this.itens[1].addEventListener('click', function(){
            ativarCategoriaServico(1);
            apresentarWebsite();
        });
        _this.itens[2].addEventListener('click', function(){
            ativarCategoriaServico(2);
            apresentarEmail();
        });
        _this.itens[3].addEventListener('click', function(){
            ativarCategoriaServico(3);
            apresentarApps();
        });
        _this.itens[4].addEventListener('click', function(){
            ativarCategoriaServico(4);
            apresentarGraficos();
        });
    }

    function apresentarTodos(){
        for(var i = 0; i < _this.figGaleria.length; i++)
            mostrarServico(_this.figGaleria[i]);
    }

    function apresentarWebsite(){
        for(var i = 0; i < _this.figGaleria.length; i++){
            if(_this.figGaleria[i].innerHTML.indexOf('Website') > -1){
                mostrarServico(_this.figGaleria[i]);
            }else{
                ocultarServico(_this.figGaleria[i]);
            }
        }
    }

    function apresentarEmail(){
        for(var i = 0; i < _this.figGaleria.length; i++){
            if(_this.figGaleria[i].innerHTML.indexOf('Email') > -1){
                mostrarServico(_this.figGaleria[i]);
            }else{
                ocultarServico(_this.figGaleria[i]);
            }
        }
    }

    function apresentarApps(){
        for(var i = 0; i < _this.figGaleria.length; i++){
            if(_this.figGaleria[i].innerHTML.indexOf('Apps') > -1){
                mostrarServico(_this.figGaleria[i]);
            }else{
                ocultarServico(_this.figGaleria[i]);
            }
        }
    }

    function apresentarGraficos(){
        for(var i = 0; i < _this.figGaleria.length; i++){
            if(_this.figGaleria[i].innerHTML.indexOf('Gráficos') > -1){
                mostrarServico(_this.figGaleria[i]);
            }else{
                ocultarServico(_this.figGaleria[i]);
            }
        }
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

    function mostrarServico(servico){
        servico.style.width = '200px';
        //servico.style.height = 'auto';
        servico.style.marginLeft = '0';
        servico.style.visibility = 'visible';
        //servico.style.display = 'block';
        //servico.style.position = 'static';
        //servico.style.display = 'block';
    }

    function ocultarServico(servico){
        servico.style.width = '0px';
        servico.style.marginLeft = '-100%';
        //servico.style.height = '0px';
        servico.style.visibility = 'hidden';
        //servico.style.display = 'none';
        //servico.style.overflow = 'hidden';
        //servico.style.position = 'fixed';
        //servico.style.visibility = 0;
    }
}

