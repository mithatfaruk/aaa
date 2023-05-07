import {wire, LightningElement } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountController.getAllAccounts';
export default class A08wireDecorator extends LightningElement {
    @wire (getAllAccounts)
       butunAccountlar; //1) data 2)error ===> @wire decorator
}