/* eslint-disable multiline-comment-style */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app.js';
import { it } from 'mocha';

chai.use(chaiHttp);
chai.should();

describe(' Hospital Appointment User Service testing', () => {
  let id;
  it('get all users', (done) => {
    chai.request(app)
      .get('/user')
      .set('language', 'tr')
      .end((err, res) => {
        if (err) {
          done(err);
        }
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message',
          'data'
        );
        res.body.should.have.property('type').equal(true);

        done();
      });
  });

  it('get one user', (done) => {
    chai.request(app)
      .get('/user/2')
      .set('language', 'tr')
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message',
          'data'
        );
        res.body.should.have.property('type').equal(true);

        done();
      });
  });

  it('get non user', (done) => {
    chai.request(app)
      .get('/user/9')
      .set('language', 'tr')
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message'
        );
        res.body.should.have.property('type').equal(false);
        res.body.should.have.property('message').equal('kullanici bulunamadi');
        done();
      });
  });

  it('user create', (done) => {
    const body = {
      'tc': '85749652111',
      'name': 'tufan',
      'surName': 'tosun',
      'phone': '5486953256',
      'email': 'tufan@gmail.com',
      'roleId': 2,
      'hospitalId': 1
    };
    chai.request(app)
      .post('/user')
      .set('language', 'tr')
      .send(body)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message',
          'data'
        );
        res.body.should.have.property('type').equal(true);
        id = res.body.data.id;
        done();
      });
  });

  it('get created user', (done) => {

    chai.request(app)
      .get(`/user/${id}`)
      .set('language', 'tr')
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message',
          'data'
        );
        res.body.should.have.property('type').equal(true);

        done();
      });
  });

  it('add existing user', (done) => {
    const body = {
      'tc': '"65235874158"',
      'name': 'bercan',
      'surName': 'tosun',
      'phone': '5486953256',
      'email': 'tufan@gmail.com'
    };
    chai.request(app)
      .post('/user')
      .set('language', 'tr')
      .send(body)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message'
        );
        res.body.should.have.property('type').equal(false);

        done();
      });
  });

  it('incorrect information entry adding  user', (done) => {
    const body = {
      'tc': '"6523584158"',
      'name': 'bercan',
      'surName': 'tosun',
      'phone': '5486953256',
      'email': 'tufan@gmail.com'
    };
    chai.request(app)
      .post('/user')
      .set('language', 'tr')
      .send(body)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message'
        );
        res.body.should.have.property('type').equal(false);

        done();
      });
  });

  it('update user', (done) => {
    const body = {
      'id': id,
      'tc': '85216325253',
      'name': 'ali veli',
      'surName': 'tosun',
      'phone': '5486953256',
      'email': 'tosun@gmail.com'
    };
    chai.request(app)
      .put('/user')
      .set('language', 'tr')
      .send(body)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message',
          'data'
        );
        res.body.should.have.property('type').equal(true);

        done();
      });
  });

  it('get updated user', (done) => {
    chai.request(app)
      .get(`/user/${id}`)
      .set('language', 'tr')
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message',
          'data'
        );
        res.body.should.have.property('type').equal(true);
        res.body.should.have.property('data').property('tc').equal('85216325253');
        res.body.should.have.property('data').property('name').equal('ali veli');
        res.body.should.have.property('data').property('surName').equal('tosun');
        res.body.should.have.property('data').property('phone').equal('5486953256');
        res.body.should.have.property('data').property('email').equal('tosun@gmail.com');

        done();
      });
  });

  it('wrong update  user', (done) => {
    const body = {
      'id': id,
      'tc': '8',
      'name': 'tufan',
      'surName': 'tosun',
      'phone': '5486953256',
      'email': 'tufan@gmail.com'
    };
    chai.request(app)
      .put('/user')
      .set('language', 'tr')
      .send(body)
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message'
        );
        res.body.should.have.property('type').equal(false);

        done();
      });
  });

  it('delete user that doesnt exist', (done) => {
    chai.request(app)
      .delete('/user/9')
      .set('language', 'tr')
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message',
        );
        res.body.should.have.property('type').equal(false);
        res.body.should.have.property('message').equal('id bulunamadi');

        done();
      });
  });

  it('delete user', (done) => {
    chai.request(app)
      .delete('/user/7')
      .set('language', 'tr')
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message'
        );
        res.body.should.have.property('type').equal(true);

        done();
      });
  });

  it('check deleted user', (done) => {
    chai.request(app)
      .delete('/user/7')
      .set('language', 'tr')
      .end((err, res) => {
        if (err) {
          done(err);
        }

        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.keys(
          'type',
          'message'
        );
        res.body.should.have.property('type').equal(false);
        res.body.should.have.property('message').equal('id bulunamadi');
        done();
      });
  });
});