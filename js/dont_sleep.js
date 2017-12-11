navigator.wakeLock.request("display").then(
    function successFunction() {
        // success
    },
    function errorFunction() {
        // error
    },
//here system indicates CPU, GPU, radio, wifi etc.
navigator.wakeLock.request("system").then(
    function successFunction() {
        // success
    },
    function errorFunction() {
        // error
    }
); 

//release() is used to release the lock.
navigator.wakeLock.release("display");