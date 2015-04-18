$(function(){
     
    //document.addEventListener("deviceready", onDeviceReady, false);
	function onDeviceReady() {
	    alert("1");
	    $('#saveBtn').click(function() {
		var contact = navigator.contacts.create({"displayName":$("#text-1").val()});
		contact.displayName = $("#text-1").val();
		contact.nickname = $("#text-2").val();            // specify both to support all devices
		alert($("#text-3").val());
		// populate some fields
		var name = new ContactName();
		name.givenName = $("#text-3").val();
		name.familyName = $("#text-4").val();
		contact.name = name;

		var contactNumbers = [];
		contactNumbers[0] = new ContactField('work', $("#number-1").val(),false);
		contactNumbers[1] = new ContactField('mobile', $("#number-2").val(),true);
		contactNumbers[2] = new ContactField('home', $("#number-3").val(),false);
		
		contact.phoneNumbers = contactNumbers;
		// save to device
		contact.save(onSuccess,onError);

		alert("hi");	
	    });
	}

    function onSaveSuccess(contact) {
	alert("Save Success");
    }

    function onSaveError(contactError) {
	alert("Error = " + contactError.code);
    }

});
