'use strict';


const validator = require('./validator');

describe('Validator Middleware', () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      query: {}
    };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    };
    next = jest.fn();
  });

  it('should pass the request through when the query string has a name property', () => {
    req.query.name = 'saleh';

    validator(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should send a 500 error when the query string does not have a name property', () => {
    validator(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('No name provided');
    expect(next).not.toHaveBeenCalled();
  });

});
