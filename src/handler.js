class Handler {
  // lambda-like handler function
  GetZipcodeData = async data => {
    const promise = new Promise((resolve, reject) => {
      let errMsg = null;
      if (Object.keys(data).length === 0) {
        this.callGetApi().then(res => {
          if (res.length === 0) {
            errMsg = "No Data found.";
            reject(errMsg);
          }
          else
            resolve(res);
        });
      } else {
        this.callPostApi(data).then(res => {
          if (res.length === 0) {
            errMsg = "No Data found.";
            reject(errMsg);
          }
          else
            resolve(res);
        });
      }
    });

    return promise;
  }

  callGetApi = async () => {
    const response = await fetch('/resources');
    const body = await response.json();
    return body;
  };

  callPostApi = async data => {
    const settings = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
    const response = await fetch('/resources', settings);
    const body = await response.json();
    console.log(body);
    return body;
  };
}

export default Handler;
