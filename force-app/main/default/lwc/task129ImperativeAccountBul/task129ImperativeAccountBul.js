import { LightningElement } from 'lwc';
import accountAramaMotoru from '@salesforce/apex/AccountAnnualRevenueImperative.getAllAccounts2';
export default class Task129ImperativeAccountBul extends LightningElement {

        filtre
        handleInput(event){
        this.filtre = event.target.value
        
        }
        
          //  @wire (accountAramaMotoru ,{isim:'$filtre'}  )  butunAccountlar;
        
        accountListesi
        hata
          handleClick(){
            accountAramaMotoru({sayi:this.filtre})
            .then ( (result) => { this.accountListesi =result ;
                                   this.hata = undefined      }     )
            .catch ( (error) => { this.hata = error ; 
                                  this.accountListesi = undefined }  )
          } 



}