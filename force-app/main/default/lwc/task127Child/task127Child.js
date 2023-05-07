import { LightningElement } from 'lwc';

export default class Task127Child extends LightningElement {

 city=''

 handleCity(event){
    this.city=event.target.value
 }

}