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

describe("Test routes", () => {
  test("GET /products", async () => {
    const response = await request(app)
      .get('/products');
    expect(response.status).toEqual(200);
    expect(response.body.length).toBe(5);
    expect(response.body[0]["id"]).toBe(1);
  });

  test("fail GET /products", async () => {
    const response = await request(app)
      .get('/product');
    expect(response.status).toEqual(404);
    const response2 = await request(app)
      .get('/products?count=abc');
    expect(response2.status).toEqual(400);
    const response3 = await request(app)
      .get('/products?count=10&page=0');
    expect(response3.status).toEqual(400);
  });

  test('GET /products?count', async () => {
    const response = await request(app)
      .get('/products?count=10');
    expect(response.status).toEqual(200);
    expect(response.body.length).toBe(10);
    expect(response.body[0]["id"]).toBe(1);
  })

  test('GET /products?page', async () => {
    const response = await request(app)
      .get('/products?count=10&page=2');
    expect(response.status).toEqual(200);
    expect(response.body.length).toBe(10);
    expect(response.body[0]["id"]).toBe(11);
  })

  test('GET /products/:product_id', async () => {
    const response = await request(app)
      .get('/products/1111');
    expect(response.status).toEqual(200);
    expect(response.body.id).toBe(1111);
    expect(response.body.features.length).toBe(3);
  })

  test('fail GET /products/:product_id', async () => {
    const response = await request(app)
      .get('/products/11111111');
    expect(response.status).toEqual(404);
    const response2 = await request(app)
      .get('/products/abc');
    expect(response2.status).toEqual(400);
  })

  test('GET /products/:product_id/styles', async () => {
    const response = await request(app)
      .get('/products/1111/styles');
    expect(response.status).toEqual(200);
    expect(response.body.product_id).toBe(1111);
    expect(response.body.results.length).toBe(4);
  })

  test('fail GET /products/:product_id/styles', async () => {
    const response = await request(app)
      .get('/products/11111111/styles');
      expect(response.status).toEqual(404);
    const response2 = await request(app)
      .get('/products/abc/styles');
    expect(response2.status).toEqual(400);
  })

  test('GET /products/:product_id/related', async () => {
    const response = await request(app)
      .get('/products/1111/related');
    expect(response.status).toEqual(200);
    expect(response.body.length).toBe(5);
  })

  test('fail GET /products/:product_id/related', async () => {
    const response = await request(app)
      .get('/products/11111111/related');
    expect(response.status).toEqual(404);
    const response2 = await request(app)
      .get('/products/abc/related');
    expect(response2.status).toEqual(400);
  })
});
