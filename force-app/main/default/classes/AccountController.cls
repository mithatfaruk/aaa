public with sharing class AccountController {
    
    @auraenabled(cacheable=true)
    public static list<account> getAllAccounts(){
        
        return [select id,name,rating from account];
        
    }

}