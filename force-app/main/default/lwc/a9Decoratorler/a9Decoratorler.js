import { LightningElement , track} from 'lwc';

export default class A9Decoratorler extends LightningElement {

ad;
yas;

@ track bireyler=[{name:'Mithat', yas:31},{name:'Ahmet',yas:35}]
handleAd(event){
    this.bireyler.name=event.target.value
}
handleYas(e){
    this.bireyler.yas=e.target.value
}

}