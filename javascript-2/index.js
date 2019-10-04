const fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}

const fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})


async function promiseReduce(asyncFunctions, reduce, initialValue) {
    let promise = Promise.resolve(initialValue);
    asyncFunctions.forEach(
        fun => promise = promise
            .then(async sum => {
                try {
                    return reduce(sum, await fun());
                } catch (e) {
                    console.warn(`Promise failed because ${e}`);
                    return sum;
                }
            })
    );
    return promise;
}

promiseReduce(
    [fn1, fn2],
    function (memo, value) {
        console.log('reduce')
        return memo * value
    },
    1
).then(console.log)
