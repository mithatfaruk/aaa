import { LightningElement } from 'lwc';

export default class A95GetterSetterParent extends LightningElement {

yas=0
handleYas(event){
    this.yas=event.target.value
}

}