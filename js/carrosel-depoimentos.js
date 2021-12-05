function carroselDepoimentos(config){
    this.container = document.querySelector(config.container);
    this.item = document.querySelectorAll(config.item);
    this.dots = document.querySelector(config.dots);
    this.boxitem = document.querySelector(config.boxitem);

    var _this = this;
    var tamanhoItem;

    criarDots();

    var dot = _this.dots.querySelectorAll('div');

    adaptarTamanhoContainer();

    console.log(tamanhoItem);

    window.addEventListener('resize', adaptarTamanhoContainer);

    dot.forEach(item => {
        item.addEventListener('click', function(){
            slideShow(item.id);
        });
    });

    /*console.log(_this.container.clientWidth);
    console.log(window.innerWidth);

    console.log(_this.item.length);

    for(var i = 0; i < _this.item.length; i++){
        console.log(_this.item[i].clientWidth);
    }*/

    /*_this.item.forEach(elemento => {
        elemento.addEventListener('mousedown', function(e){
            console.log('evento disparado!');
            e.target.style.marginLeft = '55px';
        });
    });*/

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