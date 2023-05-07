import { LightningElement, track } from 'lwc';

export default class Resume extends LightningElement {
    @track name;
    @track email;
    @track phone;
    @track address;
    @track experiences = [];

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handlePhoneChange(event) {
        this.phone = event.target.value;
    }

    handleAddressChange(event) {
        this.address = event.target.value;
    }

    handleExperienceChange(event) {
        const id = event.target.dataset.id;
        const value = event.target.value;
        const experience = this.experiences.find((exp) => exp.id === id);
        experience.value = value;
        this.experiences = [...this.experiences];
    }

    addExperience() {
        const newId = new Date().getTime().toString();
        this.experiences.push({ id: newId, value: '' });
        this.experiences = [...this.experiences];
    }
}