function carroselDepoimentos(config){
    this.container = document.querySelector(config.container);
    this.item = document.querySelectorAll(config.item);
    this.dots = document.querySelector(config.dots);
    this.boxitem = document.querySelector(config.boxitem);

    var _this = this;

    criarDots();

    var dot = _this.dots.querySelectorAll('div');

    for(var i = 0; i < dot.length; i++)
        console.log(dot[i]);

    /*_this.boxitem.addEventListener('click', function(e){
        console.log(e);
    });*/

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
        _this.boxitem.style.marginLeft = -410*index + 'px';
        document.querySelector('.area-dots .ativo').classList.remove('ativo');
        dot[index].classList.add('ativo');
    }
}