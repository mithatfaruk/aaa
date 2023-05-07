import { LightningElement } from 'lwc';
import contactCreation from '@salesforce/apex/lwcContactCreation.contactCreation';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class Task126ContactRecordCreate extends LightningElement {

name1='';
surname1='';
title1='';

handleName(event){
    this.name1=event.target.value
}
handleSurname(event){
    this.surname1=event.target.value
}
handleTitle(event){
    this.title1=event.target.value
}
handleClick(){
    contactCreation({name:this.name1,
                     surname:this.surname1,
                    title:this.title1  })    
    .then (response => {
        if(response == 'success'){
             this.dispatchEvent(new ShowToastEvent({
             title: 'bu da yeni contact',
             message : '****** Contact created Successfully ******',
             variant : 'error'
         }))} 
         else {
         this.dispatchEvent(new ShowToastEvent({
             title: 'Error',
             message : 'something went wrong',
             variant : 'success'
         }));
        }
         
     })
    .catch (error=> { console.log('error: ', error);})
    .finally( () => { this.isOpenSpinner = false ;}); 
  } 





}