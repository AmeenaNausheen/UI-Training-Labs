this.ClientUtil = function () {
    // var fAnonymous = function(){ return 'Hello'}
    (function () {                                    //Anonymous function
      console.log("Personal Details");
    })();
    var AddAddress = function Address(typeOfAddress) {          // friendly named function
        var AddressType = typeOfAddress;
        if (AddressType == 'Personal') {
            return "Added Personal address";
        }
        else {
            return "Added Office address";
        }
    }
    this.PersonalDetails = () => { AddPersonalDetails(); }        // arrow function
    function AddPersonalDetails() {                               // named function
        var person = {
            name: 'Ameena',
            Gender: 'Female',
            Address: AddAddress('Personal'),
            MobileNum:'123456789'
        }
        console.log(person);
    }
    
    function addPersonalEventListner(eventName, eventHandler) {    // Callback function
        console.log(`Person ${eventName} successfully`);
        eventHandler();
    }

    addPersonalEventListner("Added", () => console.log("Person added"));


     var personObj = new AddPersonalDetails();
     personObj.isPresent = false;
     Object.seal(personObj);
    Object.freeze(personObj);
    personObj.isPresent = true;
     console.log(personObj);
     var newPersonObj = Object.create(personObj);
     console.log(newPersonObj);
}

var utils = new this.ClientUtil('Personal');
utils.PersonalDetails();
utils.addedNewProp = true;
console.log(utils);
Object.seal(utils);
utils.addedNewProp = false;
console.log(utils);
Object.freeze(utils);
utils.addedNewProp = true;
console.log(utils);