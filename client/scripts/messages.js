// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.


//must have methods that take in data from the controllers and apply that data to the model. this function will have to make a call to the view
var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};

// Be sure to use proper escaping on any user input. Since you're displaying input that other users have
// typed, your app is vulnerable XSS attacks. See the section about escaping below. TEXT INPUT = PREVENT INPUT OF JAVASCRIPT



// Read about Underscore's easy templating abilities  ,
//then create a template function to render a message to HTML.

//Alternatively, you may use jQuery to construct DOM nodes and compose them together to create the desired HTML output.
// Underscore's template system is quite extensive and you can read about it's advanced capabilities here  .