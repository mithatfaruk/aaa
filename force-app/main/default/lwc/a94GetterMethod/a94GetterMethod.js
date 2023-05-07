import { LightningElement } from 'lwc';

export default class A94GetterMethod extends LightningElement {

index=0;
handleNumber(event){
    this.index=event.target.value
}

kisiListesi=['ahmet','mehmet','ertuğrul','ayşe','hülya'];
get kisi(){
    if(this.index > this.kisiListesi.length){
        window.alert('Numarayı doğru giriniz')
    }else{
        return this.kisiListesi[this.index].toUpperCase()
    }
}


}