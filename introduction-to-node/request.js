const http = require('http');
const options = {
    hostname: 'localhost',
    port: 3000,
    method: 'GET',
}

function sendRequestAsync(count) {
    for (let i = 0; i < count; ++i) {
        const req = http.request(options, (res) => {
            console.log(`Response № ${i + 1}`)
        });
        req.end()
    }
}
function sendRequestSync (count) {
    let i = 0;
    const sendReq = () => {
        ++i;
        const req = http.request(options, (res) => {
            console.log(`Response № ${i}`)
            if (i < count) sendReq()
        });
        req.end();
    }
    sendReq();
}
function startWork(count, type) {
    if (type === 'async') {
        sendRequestAsync(count, type)
    } else {
        sendRequestSync(count, type)
    }
}

startWork(10,'async')

