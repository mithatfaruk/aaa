({
myAction : function(component, event, helper) {
		
	},
    onclickHandler: function(component, event, helper) {
		alert('Bu alert Button sayesinde olustu')
        helper.alarmVerdir(component, event)
	},
    doInit : function(component, event, helper) {
		alert('Bu alert doInit sayesinde olustu')
        helper.alarmVerdir(component, event)
	},
})