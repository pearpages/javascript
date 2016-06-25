function fn () {
    setTimeout(function () { log(1); },1000);
    setTimeout(function () { log(2); },2000);
    setTimeout(function () { log(3); },1000);
}

function log (val) {
    console.log(val);
}

fn();