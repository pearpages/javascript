function Calc(initialValue) {
    this.value = initialValue;
    return this;
}

Calc.prototype.add = function (val) {
    this.value = this.value + val;
    return this;
}

Calc.prototype.multiply = function (val) {
    this.value *= val;
    return this;
}

Calc.prototype.equals = function (callback) {
    callback(this.value);
    return this;
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function (result) {
        console.log(result);
    }); 