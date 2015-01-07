var ScrollDoctor = function(){
    this.direction = false;
    this.lastDirection = false;
    this.flowState = [];
    this.fullDelts = [];

    this.defaultOptions = {
        topUp: function(){ },
        topDown: function(){ },
        bottomUp: function(){ },
        bottomDown: function(){ },
        scroll: function(){ }
    };
};

ScrollDoctor.prototype.doctor = function(delta) {
    this.fullDelts.push(delta);

    if(this.fullDelts.length < 3) {
        return;
    }

    this.analize();

    return this;
};

ScrollDoctor.prototype.analize = function(){
    var delts = this.fullDelts.reverse(),
        stateRange = 5,
        st = {
            'bottom-down': 0,
            'bottom-up': 0,
            'top-down': 0,
            'top-up': 0
        },
        direction = false;

    this.lastDirection = this.direction;

    if(delts[0] > 0) {
        if(delts[0] > delts[1]) {
            this.flowState.push('top-up');
        } else {
            this.flowState.push('top-down');
        }
    }

    if(delts[0] < 0) {
        if(delts[0] < delts[1]) {
            this.flowState.push('bottom-up');
        } else {
            this.flowState.push('bottom-down');
        }
    }

    if(this.flowState.length > stateRange) {
        this.flowState = this.flowState.splice(1, this.flowState.length);
    }


    for(var i = 0; i < this.flowState.length; i++){
        st[this.flowState[i]] += 1;
    }

    Object.keys(st).map(function(dir, n) {
        if(!direction) {
            direction = dir;
        } else {
            if(st[dir] > st[direction]) {
                direction = dir
            }
        }
    });

    this.direction = direction;

    return this;

};

ScrollDoctor.prototype.watcher = function(opts){
    var options = opts || this.defaultOptions;

    if(this.direction !== this.lastDirection) {

        this.direction === 'top-up' && options.topUp();
        this.direction === 'bottom-up' && options.bottomUp();

//        crash code lines
//        this.direction === 'top-down' && options.topDown();
//        this.direction === 'bottom-down' && options.bottomDown();

        (this.direction === 'top-up' || this.direction === 'bottom-up') && options.scroll();
    }

    return this;
};


ScrollDoctor.prototype.visyalize = function(delta){
    var dotNotSmoth = $('<div></div>');

    this.visialisateData.i++;

    dotNotSmoth
        .attr('style', this.visialisateData.style)
        .css({
            top: this.fullDelts[this.visialisateData.i] + 'px',
            left: this.visialisateData.i,
            background: '#000'
        });

    $('.stat__wrap')
        .css('left', '-=1px')
        .append(dotNotSmoth);

    return this;
};
