
import Camera from "../../../lib/shared/camera.js"
import { supportWorkerType } from "../../../lib/shared/util.js"
import controller from "./controller.js"
import Service from "./service.js"
import View from "./view.js"

async function getWorker(){
  if(supportWorkerType()){
    console.log('Suporta!')
    const worker = new Worker('./src/worker.js', {type: 'module'})
    return worker
  }
  const workerMock = {
    async postMessage(){},
    onmessage(msg){}
  }
    console.log("Não suporta!")
    return workerMock
}
const worker = await getWorker()

const camera = await Camera.init()
const [rootPath] = window.location.href.split('/pages/')
const factory = {
  async initalize() {
     return controller.initialize({
         view: new View(),
         service: new Service({ }),
         worker: worker
     })
  }
}

export default factory