import { api, LightningElement } from 'lwc';

export default class A96GetterSetterObjectChild extends LightningElement {

container
@api get customer(){
    return this.container
}
/*/set customer(data){
 this.container=data;   
}*/
    set customer(data){
        let geciciKopya={...data}
        geciciKopya.name=geciciKopya.name + ' Faruk'
        geciciKopya.yas=(geciciKopya.yas)*3
        this.container=geciciKopya

        
    }


}