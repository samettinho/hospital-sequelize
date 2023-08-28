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
  let agent = chai.request.agent(app);
  beforeEach((done) => {
    const body = {
      tc: '25256358547',
      password: '12345'
    };
    agent
      .post('/public/auth/login')
      .send(body)
      .then((res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('get all users', (done) => {
    agent
      .get('/private/user')
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
    agent
      .get('/private/user/2')
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
    agent
      .get('/private/user/9')
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
      'tc': '77777777777',
      'name': 'samet',
      'surName': 'kerim',
      'phone': '5489635258',
      'email': 'samet@gmail.com',
      'password': '12345',
      'roleId': 1
    };
    agent
      .post('/private/user')
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

    agent
      .get(`/private/user/${id}`)
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
    agent
      .post('/private/user')
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
    agent
      .post('/private/user')
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
      'name': 'samet',
      'surName': 'kerim',
      'phone': '5489635258',
      'email': 'samet@gmail.com',
      'password': '12345'
    };
    agent
      .put('/private/user')
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
    agent
      .get(`/private/user/${id}`)
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
        res.body.should.have.property('data').property('name').equal('samet');
        res.body.should.have.property('data').property('surName').equal('kerim');
        res.body.should.have.property('data').property('phone').equal('5489635258');
        res.body.should.have.property('data').property('email').equal('samet@gmail.com');

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
    agent
      .put('/private/user')
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
    agent
      .delete('/private/user/9')
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
    agent
      .delete('/private/user/7')
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
    agent
      .delete('/private/user/7')
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