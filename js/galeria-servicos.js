function gerenciarGaleriaServicos(config){
    this.container = document.querySelector(config.container);
    this.itens = document.querySelectorAll(config.itens);
    this.figGaleria = document.querySelectorAll(config.figGaleria);

    var _this = this;

    addEventosItens();

    function addEventosItens(){
        _this.itens.forEach(item => {
            item.addEventListener('click', function(e){
                ativarCategoriaServico(e.target);
                filtrarServicos(e.target.textContent);
            });
        });
    }

    function filtrarServicos(servico){
        switch(servico){
            case 'Todos':
                apresentarTodos();
                break;
            case 'Website':
                apresentarWebsite();
                break;
            case 'Email':
                apresentarEmail();
                break;
            case 'Apps':
                apresentarApps();
                break;
            case 'Gráficos':
                apresentarGraficos();
                break;
        }
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

    function resetarBtnAtivo(){
        _this.itens.forEach(item => {
            if(item.classList.contains('btn-ativo'))
                item.classList.remove('btn-ativo');
        });
    }

    function ativarCategoriaServico(item){
        resetarBtnAtivo();

        item.classList.add('btn-ativo');
    }

    function mostrarServico(servico){
        //servico.style.width = '200px';
        //servico.style.height = 'auto';
        //servico.style.marginLeft = '0';
        //servico.style.visibility = 'visible';
        //servico.style.display = 'block';
        //servico.style.position = 'static';
        servico.style.display = 'block';
    }

    function ocultarServico(servico){
        //servico.style.width = '0px';
        //servico.style.marginLeft = '-100%';
        //servico.style.height = '0px';
        //servico.style.visibility = 'hidden';
        servico.style.display = 'none';
        //servico.style.overflow = 'hidden';
        //servico.style.position = 'fixed';
        //servico.style.visibility = 0;
    }
}

