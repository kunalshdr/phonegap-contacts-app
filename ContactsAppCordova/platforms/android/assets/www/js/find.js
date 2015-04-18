$("#tabs").tabs({
    activate: function (event, ui) {
         $("#contacts").empty();
        var active = $('#tabs').tabs('option', 'active');
         console.log(active);
        if (active === 2) {
            var options      = new ContactFindOptions();
            var fields       = ["*"];
            try {
                navigator.contacts.find(fields, onSuccess, onError);
            } catch(err) {
                alert(err);
            }
            function onSuccess(contacts) {
                //alert(JSON.stringify(contacts));
                for (var i = 0; i < contacts.length; i++) {
                        try {   
                            //alert(JSON.stringify(contacts[i].phoneNumbers[2]));
                            $("#contacts").append("<li>" + contacts[i].displayName + " " + contacts[i].phoneNumbers[2].value +"</li>");
                             $("#contacts").listview("refresh");
                        } catch(err) {
                            alert(err);
                        }
                   
                }
                
            };

            // onError: Failed to get the contacts
            function onError(contactError) {
                  navigator.notification.alert(
                'Contact Fetch Failure!',  // message
                alertDismissed,         // callback
                'Failed',            // title
                    'OK'                  // buttonName
                    );
            };
    }
}
});
            

