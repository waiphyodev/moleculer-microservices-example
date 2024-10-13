exports.OK = (data, message) => {
    this.code = 200;
    this.status = "OK";
    this.message = message ? message : "No Error";
    this.data = data ? data : null;
};