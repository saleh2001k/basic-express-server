"use strict";

const logger = require("./logger");

describe("Logger Middleware", () => {
  let consoleSpy;
  let req;
  let res;
  let next;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation();
    req = {};
    res = {};
    next = jest.fn();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("should log the request method and path", () => {
    req.method = "GET";
    req.path = "/test";

    logger(req, res, next);

    expect(consoleSpy).toHaveBeenCalledWith("GET /test");
    expect(next).toHaveBeenCalled();
  });
});
