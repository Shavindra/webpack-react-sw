import * as workerPath from "file-loader?name=[name].js!./service-worker";

navigator['serviceWorker'].register(workerPath)
    .then((res) => { console.log('SW registered') })
    .catch(console.error);

