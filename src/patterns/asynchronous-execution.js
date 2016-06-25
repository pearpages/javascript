var buffer = function (items, iterFn, callback) {
    var i = 0, len = items.length;

    setTimeout(function () {
        for (var start = +new Date; i < len && result !== false && ( (+new Date) - start < 50); i++) {
            result = iterFn.call(items[i], items[i], i);
        }

        if (i < len && result !== false) {
            setTimeout(arguments.calle,20);
        }else{
            callback(items);
        }
    }, 20);
}