class HTTP {

  constructor() {
    this.client = new XMLHttpRequest();
  }

  request(options, callback = false) {
    
    // Step 1: Prepare an URL
    var public_url = new URL(options.URL);
    var client = new XMLHttpRequest();

    // Step 1: If contains params for send
    if ( options.hasOwnProperty("params") ) {
      for (const key in options.params) {
        public_url.searchParams.append(key, options.params[key]);
      }
    }
    
    // Step 3: If contains headers for send
    if ( options.hasOwnProperty("headers") ) {
      for (const key in options.headers) {
        client.setRequestHeader(key, options.headers[key]);
      }
    }

    // Step 4: Add event listeners
    if ( options.hasOwnProperty("events") ) {
      for (const key in options.events) {
        client.addEventListener(key, event => {
          options.events[key](event);
        })
      }
    }

    // Step 5: If contains body
    if ( options.hasOwnProperty("body") ) {
      client.send(options.body);
    } else {
      client.send(null);
    }

    // Step 2: Define settings in client
    client.open(options.method, public_url.toString(), true);
 
    // For every status change, calling this function
    client.onreadystatechange = function (event) {
      if ( this.readyState == client.DONE ) {

        // Get all headers with plan text, and parse for an array
        var planText = this.getAllResponseHeaders();
        var headers = {};

        // Transform text in array
        var array = planText.trim().split(/[\r\n]+/);
        array.forEach(function (line) {
          const parts = line.split(': ');
          const header = parts.shift();
          const value = parts.join(': ');
          headers[header] = value;
        });

        // Define status code in headers
        headers["statusCode"] = this.status;
        callback ? callback(headers, this.response) : false;
      }
    }

  }

}