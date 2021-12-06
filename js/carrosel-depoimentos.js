function carroselDepoimentos(config){
    this.item = document.querySelectorAll(config.item);
    this.dots = document.querySelector(config.dots);
    this.boxitem = document.querySelector(config.boxitem);

    var _this = this;
    var tamanhoItem;
    var itemAtual;
    var slideAuto = true;

    criarDots();

    var dot = _this.dots.querySelectorAll('div');

    adaptarTamanhoContainer();

    window.addEventListener('resize', adaptarTamanhoContainer);

    //Aplica um listener de evento click em cada dot criada
    dot.forEach(item => {
        item.addEventListener('click', function(){
            slideAuto = false;
            slideShow(item.id);
        });
    });

    //Faz a transição automática de depoimentos a cada 4 segundos
    setInterval(function(){
        if(slideAuto == true){
            if(parseInt(itemAtual) + 1 < _this.item.length)
                slideShow(parseInt(document.querySelector('.area-dots .ativo').id) + 1);
            else
                slideShow(0);
        }else{
            slideAuto = true;
        }
    }, 4000);

    //Cria as dots de transição de carrosel de acordo com o número de depoimentos
    function criarDots(){
        for(var i = 0; i < _this.item.length; i++){
            var div = document.createElement('div');
            div.id = i;
            _this.dots.appendChild(div);
        }

        _this.dots.querySelectorAll('div')[0].classList.add('ativo');
    }

    //Faz a transição de um card de depoimento para outro
    function slideShow(index){
        _this.boxitem.style.marginLeft = -tamanhoItem*index + 'px';
        document.querySelector('.area-dots .ativo').classList.remove('ativo');
        dot[index].classList.add('ativo');
        itemAtual = index;
    }

    //Muda a variável de tamanho de acordo com o tamanho da janela
    function adaptarTamanhoContainer(){
        if(window.innerWidth >= 700 && window.innerWidth < 1025){
            tamanhoItem = 470;
        }else if(window.innerWidth >= 1025){
            tamanhoItem = 670;
        }else{
            tamanhoItem = 410;
        }

        slideAuto = false;
        slideShow(0);
    }
}