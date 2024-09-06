const promise = new Promise((resolve,reject) => {
    Request({
        url:'http://xxx.com',
        onSuccess(data) {
            resolve(data)
        },
        onerror(err) {
            reject(err)
        },
    })
})