# How to use?
For use this classe, download it and past in your working project:


## 1. Make instance of class
For this, link file in your HTML file and create variable with instance class.

In your HTML file:
>> <script src="path-to-file"></script>

In your JS file:
```
const MyRequest = new HTTP();
```

## 2. Make simple request
For this simple HTTP/HTTPS requests

```
MyRequest.GET({
  "URL": "https://www.example.org",
  "params": {
    "param1": "value",
    "param2": "value
  }
}, (ehaders, results) => {
  // Your code here...
});
```