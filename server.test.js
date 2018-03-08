const request = require('supertest');
const app = require('./server.js');

describe('Test the root path', () => {
  test('It should response the GET method', (done) => {
    request(app).get("/").then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});

describe('Information should have a defined body ', () => {
  test('Information should return a response body ', () => {
    return request(app).get("/information/101").then(response => {
      expect(response).toBeDefined();
    });
  });
});
describe('Pictures should have a defined body ', () => {
  test('Pictures should return a response body ', () => {
    return request(app).get("/pictures/105").then(response => {
      expect(response).toBeDefined();
    });
  });
});
describe('Title should have a defined body ', () => {
  test('Pictures should return a response body ', () => {
    return request(app).get("/title/107").then((response) => {
      expect(response).toBeDefined();
    });
  });
});
describe('Map should have a defined body ', () => {
  test('Pictures should return a response body ', () => {
    return request(app).get("/map/140").then(response => {
      expect(response.body).toBeDefined();
    });
  });
});
describe('Restaurants should have a defined body ', () => {
  test('Pictures should return a response body ', () => {
    return request(app).get("/restaurants/180/reviews").then(response => {
      expect(response.body).toBeDefined();
    });
  });
});


