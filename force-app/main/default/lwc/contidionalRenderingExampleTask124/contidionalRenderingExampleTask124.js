import { LightningElement } from 'lwc';

export default class ContidionalRenderingExampleTask124 extends LightningElement {

flag=true
handleFlag(event){
    this.flag=event.target.checked
}

}