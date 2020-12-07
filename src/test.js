const { GetZipcodeData } = require("./handler");

describe("basic tests", () => {
  test("handler function exists", () => {
    var t = index.GetZipcodeData();
    console.log(t);
    expect(typeof GetZipcodeData).toBe("function");
  });
});
