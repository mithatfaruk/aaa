import { LightningElement,api } from 'lwc';

export default class A95GetterSetterChild extends LightningElement {

 container 
 @api get dogumYili(){
    return this.container 
}

set dogumYili(data){
    const d= new Date();
    let year =d.getFullYear();
    this.container=year-data;

}

}