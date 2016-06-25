function Calc(start){
    var that = this;
    that.add = function (x) {
        start = start + x;
        return that;
    };

    that.multiply = function (x) {
        start = start * x;
        return that;
    }

    that.equals = function (callback) {
        callback(start);
        return that;
    }
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function(result) {
        console.log(result);
    });