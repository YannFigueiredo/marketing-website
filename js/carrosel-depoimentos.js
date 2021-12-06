function carroselDepoimentos(config){
    this.container = document.querySelector(config.container);
    this.item = document.querySelectorAll(config.item);
    this.dots = document.querySelector(config.dots);
    this.boxitem = document.querySelector(config.boxitem);

    var _this = this;
    var tamanhoItem;
    var itemAtual;

    criarDots();

    var dot = _this.dots.querySelectorAll('div');

    adaptarTamanhoContainer();

    window.addEventListener('resize', adaptarTamanhoContainer);

    dot.forEach(item => {
        item.addEventListener('click', function(){
            slideAuto = false;
            slideShow(item.id);
        });
    });

    document.querySelector('body').addEventListener('mousemove', function(event) {
        posX = event.clientX;
      });

    setInterval(function(){
        if(itemAtual + 1 < _this.item.length)
            slideShow(parseInt(document.querySelector('.area-dots .ativo').id) + 1);
    }, 4000);

    function criarDots(){
        for(var i = 0; i < _this.item.length; i++){
            var div = document.createElement('div');
            div.id = i;
            _this.dots.appendChild(div);
        }

        _this.dots.querySelectorAll('div')[0].classList.add('ativo');
    }

    function slideShow(index){
        _this.boxitem.style.marginLeft = -tamanhoItem*index + 'px';
        document.querySelector('.area-dots .ativo').classList.remove('ativo');
        dot[index].classList.add('ativo');
        itemAtual = index;
    }

    function adaptarTamanhoContainer(){
        if(window.innerWidth >= 700 && window.innerWidth < 1025){
            tamanhoItem = 470;
        }else if(window.innerWidth >= 1025){
            tamanhoItem = 670;
        }else{
            tamanhoItem = 410;
        }

        slideShow(0);
    }
}