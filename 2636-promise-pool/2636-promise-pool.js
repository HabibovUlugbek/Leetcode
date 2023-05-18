var promisePool = async function(functions, n) {
    let next = () => functions[n++]?.().then(next);
    return Promise.all(functions.slice(0, n).map(f => f().then(next)));

};