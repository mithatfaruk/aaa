import { LightningElement } from 'lwc';

export default class KoordinatGosterme extends LightningElement {

xkoo=0
yoo=0
handleMouse(event){
    this.xkoo=event.clientX
    this.yoo=event.pageY
}

}