class Handler {
  // lambda-like handler function
  GetZipcodeData = async event => {
    const promise = new Promise((resolve, reject) => {
      let errMsg = null;      
      this.callApi().then(res => {
        console.log("handler success");
        if (res.length === 0) {
          errMsg = "No Data found.";
          reject(errMsg);
        }
        else
          resolve(res);
      });
    });

    return promise;
  }

  callApi = async () => {
    const response = await fetch('/allZipcodeData');
    const body = await response.json();
    // if (response.status !== 200) throw Error(body.message);

    return body;
  }
}

export default Handler;
