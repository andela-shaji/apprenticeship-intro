const should = require('chai').should(),
  expect = require('chai').expect,
  supertest = require('supertest'),
  api = supertest('http://localhost:8000');

describe('User', () => {
  it('should be created', (done) => {
    api.post('/api/users')
      .set('Accept', 'application/json')
      .send({
        username: 'Suada',
        fname: 'Suada',
        lname: 'Haji',
        email: 'suada@email.com'
      })
      .expect(201)
      .end((err, res) => {
        expect(res.body.username).to.equal("Suada");
        expect(res.body.fname).to.equal("Suada");
        expect(res.body.lname).to.equal("Haji");
        expect(res.body.email).to.equal("suada@email.com");
        done();
      });
  });
  it('should return a 200 response', (done) => {
    api.get('/api/users/')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.body.length).to.be.above(0);
        done();
      });
  });
  it('should be an object with keys and values', (done) => {
    api.get('/api/users/2')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        expect(res.body).to.have.property("username");
        expect(res.body.username).to.not.equal(null);
        expect(res.body).to.have.property("fname");
        expect(res.body.fname).to.not.equal(null);
        expect(res.body).to.have.property("lname");
        expect(res.body.lname).to.not.equal(null);
        expect(res.body).to.have.property("email");
        expect(res.body.email).to.not.equal(null);
        done();
      });
  });
  it('should be updated with new details', (done) => {
    api.put('/api/users/2')
      .set('Accept', 'application/json')
      .send({
        username: "joan",
        fname: "Joan",
        lname: "Ngatia",
        email: "joan@email.com"
      })
      .expect(200)
      .end((err, res) => {
        expect(res.body.username).to.equal("joan");
        expect(res.body.fname).to.equal("Joan");
        expect(res.body.lname).to.equal("Ngatia");
        expect(res.body.email).to.equal("joan@email.com");
        done();
      });
  });
  it('should be deleted', (done) => {
    api.delete('/api/users/10')
    .set('Accept', 'application/json')
    .expect(204)
    .end((err, res) => {
      expect(err).to.equal(null);
      expect(typeof res.body).to.equal('object');
      done();
    });
  });
});