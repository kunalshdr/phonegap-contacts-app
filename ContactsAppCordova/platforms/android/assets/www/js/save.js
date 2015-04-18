

$("#saveContact").click( function()
           {
                var displayName = $('#text-1').val();
                var nickName = $('#text-3').val();
                var givenName = $('#text-4').val();
                var familyName = $('#text-5').val();
                var workTel = $('#tel-1').val();
                var mobileTel = $('#tel-2').val();
                var homeTel = $('#tel-3').val();
                   
                        // create a new contact object
    var contact;
                   try { contact = navigator.contacts.create();
                       } catch(err) {
                           alert("Reaching here" + err);
                       }
                contact.displayName = displayName;
                    contact.nickname = nickName;            // specify both to support all devices

                    // populate some fields
                    var name = new ContactName();
                    name.givenName = givenName;
                    name.familyName = familyName;
                    contact.name = name;

                    var contactNums = [];
                    contactNums[0] = new ContactField('work', workTel, false);
                    contactNums[1] = new ContactField('mobile', mobileTel, true);
                    contactNums[2] = new ContactField('home', homeTel, false);
                    contact.phoneNumbers = contactNums;
                
                    contact.save(onSuccess,onError);
    
    function onSuccess(contact) {
    navigator.notification.alert(
    'Contact Saved!',  // message
    alertDismissed,         // callback
    'Saved',            // title
    'OK'                  // buttonName
);
};
    
    function alertDismissed() {
        // do nothing
    };

function onError(contactError) {
     navigator.notification.alert(
    'Contact Save Failure!',  // message
    alertDismissed,         // callback
    'Failed',            // title
    'OK'                  // buttonName
);
};

           }
        );



