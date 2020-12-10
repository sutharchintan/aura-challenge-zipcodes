import Handler from "./handler";

class ZipcodeProvider {

    init = (callback, data) => {
        new Handler().GetZipcodeData(data).then(result => { this.allZipCodeData = result; console.log("provider init"); callback(this); },
            error => { console.log(error); this.allZipCodeData = null; callback(this); });
    }
}

export default ZipcodeProvider;