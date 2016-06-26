var Promise = function () {
    var data,
        done = [],
        fail = [],
        status = 'progress';

    this.done = function (fn) {
        done.push(fn);

        if (status === 'done') {
            fn(data);
        }

        return this;
    };

    this.failed = function (fn) {
        fail.push(fn);

        if (status === 'failed') {
            fn(data);
        }

        return this;
    };

    this.resolve = function (fn) {
        if (status !== 'progress') {
            throw 'Promise has arleady completed with sttus of ' + status + '.';
        }

        status = 'done';
        data = result;

        done.forEach(function(action) {
            done(data);
        });
    };

    this.fail = function (fn) {

    };
}

module.exports = Promise;