class API {

  constructor(address, getLocalAddress = false) {
    this.address = getLocalAddress ? this.getLocalAddress() + address : address;
  }

  // This is special method, cation conflict of names
  getLocalAddress() {
    return window.location.toString().replace(/\?.+$/g, '').trimEnd('/') + '/';
  }

  // This function is example for work with this class. Please, copy and paste
  // new functions below.
  getObjects() {
    return new Promise((resolve, reject) => {
      MyRequest.GET({
        "URL": this.address,
        "params": {
          "param1": "value",
          "param2": "value"
        },
        "events": {
          "error": (error) => reject(error),
          "progress": (progress) => console.log(progress)
        }
      }, (headers, response) => {
        resolve( JSON.parse(response) );
      })
    })
  }

}