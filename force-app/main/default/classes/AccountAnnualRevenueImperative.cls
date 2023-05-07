public with sharing class AccountAnnualRevenueImperative {
    
     @auraEnabled(cacheable=true)
    public static list<account> getAllAccounts2(integer sayi){
     integer arama= sayi;
        list<account>accList=[select id,name,AnnualRevenue from account];
        list<account>newlist= new list<account>();
        for(account acc:accList){
            
            if(arama<acc.annualrevenue){
                newlist.add(acc);
                
            }
            
            
        }
        return newlist;
        
        
        
    }
    }