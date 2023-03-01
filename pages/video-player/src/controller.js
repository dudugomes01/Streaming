export default class Controller{
  #view
  #service
  #worker
    constructor({view, service, worker}){
      this.#view = view
      this.#service = service
      this.#worker = this.#configureWorker(worker)

      this.#view.configureOnBtnClick(this.onBtnStart.bind(this))
    }
    static async initialize(deps) {
      const controller = new Controller(deps)
      controller.log('not yet detectin eye blink! Click in the button to start')
      return controller.init()
    }
  #configureWorker(worker){
    worker.onmessage = (msg) =>{
      if('READY' === msg.data){
        this.#view.enablebtton()
        return;
      }
    }
    return worker
  }
    async init(){
        console.log("hello")
    }
    log(text){
      this.#view.log(`logger: ${text}`)
    }
    onBtnStart(){
      this.log('Initializing dection...')
    }
}