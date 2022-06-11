// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,

  create: function(message, successCB, errorCB = null) {
    // TODO: send a request to the Parse API to save the message
    //POST instead of GET maybe
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,   //the parse API or website we are sending a request to
      type: 'GET',    //the HTTP verb saying what action or type of request  we are making
      data: { order: '-createdAt' },  //sata sent to server, specifying extra options for how 'get' should happen, OR when sendiing info to server, this is that data
      contentType: 'application/json',   ///format of content we are providing to them
      success: successCB, //perform a CB ater eveything else is run, like a setTimeout
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};

//need to pre-stringify if undefined is anywhere