import { LightningElement } from 'lwc';

export default class A1DataBindingManipule extends LightningElement {

name='ahmet'
buyukisim;
handleInput(event){
this.name=event.target.value

}

get ismibüyükyap(){
    this.buyukisim=this.name.toUpperCase()
    return this.buyukisim;
}

firstname=''
lastname=''

handleInput2(event){
    this.firstname=event.target.value
}
handleInput3(event){
    this.lastname=event.target.value
}
tamisimgoster;
get tamisim(){
this.tamisimgoster=this.firstname.toUpperCase() + ' ' + this.lastname.toUpperCase()
return this.tamisimgoster;
}

}