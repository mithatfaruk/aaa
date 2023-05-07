public with sharing class lwcContactCreation {
    
    @AuraEnabled
    public static string contactCreation(string name, string surname, string title){
        contact cnt= new contact();
        cnt.FirstName=name;
        cnt.LastName=surname;
        cnt.Title=title;
        
        insert cnt;
        
        if(cnt.Id !=null){
            return 'tebrikler';
        }else{ 
        	return 'sorun olustu';
        }
    }

}