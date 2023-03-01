export default class View{
    #btnInit = document.querySelector('#init')
    #statusElement = document.querySelector('#status')
    
    enablebtton(){
        this.#btnInit.disabled = false
    }
    configureOnBtnClick(fn){
        this.#btnInit.addEventListener('click', fn)
    }
    log(text){
        this.#statusElement.innerHTML = text
    }
}