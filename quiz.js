var ApiKey = function () {
  // var ApiKey is going to make the key. Its a key generator. Also, since Api is uppercase its a constructor.
  var result = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(Math.random() * 35));
  // this is a bank of characters followd by a method to choose some
  return {
    value: result;
    // value is a class and result is a property of that class
  }
}
// this function is generating a random key!
var app = function () {
  // app is a function that adds data to the key that was generated
  return {
    apiKey: "GKAL-28903A-LKVMDKH-01984",
    // the result of the first function, a random mix of numbers and letters
    serviceName: 'Etsybay',
    // Im sure this comes in handy but its not in the code
    getData: function () {
      return remoteResource.getData(this.apiKey);
    },
    // this function is putting some data with the key
    setApiKey: function (newKey) {
      this.apiKey = newKey.value;
    },
    users: ['john', 'steve', 'jane', 'mary', 'sue'],
    // another class/property pair
    loggedHours: 289299
    // the amount of time Ive wasted in life learning about things that dont matter. Like dog emotions.
    //
  };
};

app.setApiKey(new ApiKey());
// this is calling the function app, setApiKey, and Apikey.
