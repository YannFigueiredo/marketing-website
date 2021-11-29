function gerenciarGaleriaModal(config){
    this.modal = document.querySelector(config.modal);
    this.imgGaleria = document.querySelectorAll(config.imgGaleria);
    this.controladorSlide = document.querySelector(config.controladorSlide);
    this.btnFechar = document.querySelector(config.btnFechar);
    this.btnVoltar = document.querySelector(config.btnVoltar);
    this.btnAvancar = document.querySelector(config.btnAvancar);

    _this = this;

    var imgAtual;
    var campoImgModal = _this.modal.querySelector('img');
    var camposControleSlide = _this.controladorSlide.querySelectorAll('span');

    definirTotalImg();

    _this.imgGaleria.forEach(item => {
        item.addEventListener('click', function(e){
            ativarModal();
            campoImgModal.src = e.target.src;
            definirContadorImgAtual(e.target.src);
        });
    });

    _this.btnFechar.addEventListener('click', function(){
        _this.modal.classList.add('hidden');
    });

    _this.btnVoltar.addEventListener('click', function(){
        if(imgAtual - 1 < 0){
            imgAtual = _this.imgGaleria.length - 1;
        }else{
            imgAtual -= 1;
        }

        campoImgModal.src = _this.imgGaleria[imgAtual].src;
        camposControleSlide[0].textContent = imgAtual + 1;
    });

    _this.btnAvancar.addEventListener('click', function(){
        if(imgAtual + 1 >= _this.imgGaleria.length){
            imgAtual = 0;
        }else{
            imgAtual += 1;
        }

        campoImgModal.src = _this.imgGaleria[imgAtual].src;
        camposControleSlide[0].textContent = imgAtual + 1;
    });

    function ativarModal(){
        _this.modal.classList.remove('hidden');
    }

    function definirContadorImgAtual(endereco){
        for(var i = 0; i < _this.imgGaleria.length; i++){
            if(_this.imgGaleria[i].src == endereco){
                camposControleSlide[0].textContent = i+1;
                imgAtual = i;
            }
        }
    }

    function definirTotalImg(){
       camposControleSlide[1].textContent = _this.imgGaleria.length;
    }
}