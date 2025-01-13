import {LitElement,html,css} from 'lit'

export class MyApp extends LitElement{

constructor(){
    super()
}


    render(){
        return html`
        <h1>hola</h1>
        `
    }
}
customElements.define('my-app',MyApp)