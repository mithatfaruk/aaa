import { LightningElement, track } from 'lwc';

export default class A91TrackListDecorator extends LightningElement {

bireyAdi="Mithat"
bireyYas=31
bireyId=3

@track  aileBireyleri=[{id:1,
                name:'Resul',
                yas:50 }, 
                {id:2, 
                name:'Pınar', 
                yas:47}]


handleIsım(event){
    this.bireyAdi=event.target.value

}
handleYas(event){
    this.bireyYas=event.target.value
}
handleClick(){
    const member={id:this.bireyId,
                  name:this.bireyAdi,
                  yas:this.bireyYas}
     this.aileBireyleri.push(member)      
     bireyId++      
}
}