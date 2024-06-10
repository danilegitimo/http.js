# HTTP.JS
Make HTTP/HTTPS requests without much hassle in the client's browser. Simple and
objective, ideal for applications that do not require frameworks. This project has
been tested in most browsers, but does not guarantee that it will work specifically
for your project.

## Topics
1. How to install it in my project?
2. How can I use it?
3. Using shortcuts for cleaner code
4. Using a class for API
5. Good practices

## How to install it in my project?
To install the project, you need to download the code, add it to your project
and mention the "http.js" file in your HTML file. To keep the code clean, leave
the class file just for the class, create another file to add your API
functions or just requests.

## How can I use it?
After you mention the file that contains the class, in your project, you will
need to create an instance of the class. Do something similar to this:
```js
const MyRequest = new HTTP();
```

Feel free to choose the variable name. For every request, you must inform the
method and the URL. Do it:
```js
MyRequest.REQUEST({
  "method": "GET",
  "URL": "https://api.example.com",
  "params": {
    "param1": "value",
    "param2": "value"
  }
}, (headers, response) => {
  // Your code here...
});
```

If you need to add some parameters to your request, use "params". It is an
object that will be transformed into a "query string". It would be similar to
this:
```js
MyRequest.REQUEST({
  "method": "GET",
  "URL": "https://api.example.com",
  "params": {
    "param1": "value",
    "param2": "value"
  }
}, (headers, response) => {
  // Your code here...
});
```

If you need to add headers to the request, use "headers". For example:
```js
MyRequest.REQUEST({
  "method": "GET",
  "URL": "https://api.example.com",
  "headers": {
    "Content-Type": "application/json",
    "Authentication": "bearear"
  }
}, (headers, response) => {
  // Your code here...
});
```

Does your request have a body? Send using "body". Simple example:
```js
MyRequest.REQUEST({
  "method": "POST",
  "URL": "https://api.example.com",
  "body": "file"
}, (headers, response) => {
  // Your code here...
});
```

If you need to capture an event from XMLHttpRequest, you can use "events" and the name of the event. If the event exists, its function will be executed
```js
MyRequest.REQUEST({
  "method": "GET",
  "URL": "https://api.example.com",
  "events": {
    "progress": function(event) {
      // You code here...
    },
    "abort": function(event) {
      // You code here...
    }
  }
}, (headers, response) => {
  // Your code here...
});
```

## Using alias for cleaner code
To make the code cleaner and more cohesive, use shortcuts for requests:
GET HTTP Method
```js
MyRequest.GET({
  "URL": "https://api.example.com",
  "params": {
    "param1": "value",
    "param2": "value"
  }
}, (headers, response) => {
  // Your code here...
});
```

POST HTTP Method
```js
MyRequest.POST({
  "URL": "https://api.example.com",
  "params": {
    "param1": "value",
    "param2": "value"
  },
  "body": "body-here",
  "headers": {
    "Content-Type": "application/json"
  }
}, (headers, response) => {
  // Your code here...
});
```

OPTIONS HTTP Method
```js
MyRequest.OPTIONS({
  "URL": "https://api.example.com",
  "params": {
    "param1": "value",
    "param2": "value"
  }
}, (headers, response) => {
  // Your code here...
});
```

Using shortcuts, you will not need to enter the HTTP methods, but you will continue to enter the URL.

## Using a class for API
To facilitate the request to an API, use the API class from the API.js file. 
Contains a small example code on how to expand the structure. It is up to you
whether or not you want to continue expanding. Example:

```js

// Make instance of API class
const MyAPI = new API();

// Function for example. Show response into console
MyAPI.getObjects().then(response => console.log(response));

```

## Good practices
Of course, each developer has their own techniques, but I recommend using two
tab spaces. Also, use the names of functions and variables as declaratively as
possible, this way, it will not be necessary to use comments in the code to 
explain the obvious.

Another good practice is to use method code shortcuts. In addition to avoiding
writing the method for each request, it makes the code clearer what is being
done.

<p style="font-style: italic; color: red">This document was translated from Portuguese into English. Please let the author know if there is any error in communication. I would love to continue maintaining this project. Thanks.</p>