import { LightningElement, track } from 'lwc';

export default class A2ConditionalRendering extends LightningElement {
    @track passwordInput = '';

    handlePasswordInput(event) {
        this.passwordInput = event.target.value;
    }

    get isPasswordValid() {
        return this.passwordInput.toLowerCase() === 'mithat';
    }

    flag=true
    handleFlag(event){
        this.flag=event.target.checked
    }

   

}