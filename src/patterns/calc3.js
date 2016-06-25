function Calc(initialValue) {
    var value = initialValue;
    var that = this;
    that.getVal = function() {
        return value;
    }
    that.setVal = function(val) {
        value = val;
        return that;
    }
    return that;
}

Calc.prototype.add = function (val) {
    this.setVal(this.getVal() + val);
    return this;
}

Calc.prototype.multiply = function (val) {
    this.setVal(this.getVal() * val);
    return this;
}

Calc.prototype.equals = function (callback) {
    callback(this.getVal());
    return this;
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function (result) {
        console.log(result);
    }); 