public with sharing class AccountControllerAramaMotoru {
    
    @auraEnabled(cacheable=true)
    
    public static list<account> getAllAccounts(string isim) {
        
		string arama= '%' + isim + '%';
            
        return [select id,name from account where name like:arama]  ;  
    }
}