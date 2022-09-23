const request = require('supertest');
const app = require('./../server/routes');

describe("Test framework set up", () => {
  test("GET /products", (done) => {
    request(app)
      .get('/products')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
