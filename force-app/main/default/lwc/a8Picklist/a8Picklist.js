import { LightningElement } from 'lwc';

export default class A8Picklist extends LightningElement {

 secilen ='';
 ulkelerbaskentler =[{label:'Türkiye', value:'Ankara'},{label:'Fransa',value:'Paris'},{label:'Amerika',value:'Washington'}]  

 handlePicklist(event){
    this.secilen=event.target.value
 }
 get secenekler (){
    return this.ulkelerbaskentler
 }
}