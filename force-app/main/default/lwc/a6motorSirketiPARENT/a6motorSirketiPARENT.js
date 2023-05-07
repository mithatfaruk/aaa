import { LightningElement } from 'lwc';

export default class A6motorSirketiPARENT extends LightningElement {


mpower=0    
carbrand=''
carmodel=''
handleInput (event){
    this.mpower=event.target.value
}
handleInput2 (event){
    this.carbrand=event.target.value
}
handleInput3(e){
    this.carmodel=e.target.value
}
}