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

describe(' Hospital Appointment Authorisation Service  testing', () => {
  it('get all authorisations', (done) => {
    chai.request(app)
      .get('/authorisation')
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

  it('get one authorisation', (done) => {
    chai.request(app)
      .get('/authorisation/2')
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

  it('get non authorisation', (done) => {
    chai.request(app)
      .get('/authorisation/9')
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
        res.body.should.have.property('message').equal('yetki bulunamadi');
        done();
      });
  });
  let id;
  it('authorisation create', (done) => {
    const body = {
      'authorisationStatement': 'yönetici ekle'
    };
    chai.request(app)
      .post('/authorisation')
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

  it('get created authorisation', (done) => {

    chai.request(app)
      .get(`/authorisation/${id}`)
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

  it('add existing authorisation', (done) => {
    const body = {
      'authorisationStatement': 'Hasta ekle'
    };
    chai.request(app)
      .post('/authorisation')
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

  it('update authorisation', (done) => {
    const body = {
      'id': id,
      'authorisationStatement': 'hemşire ekle'
    };
    chai.request(app)
      .put('/authorisation')
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

  it('get updated authorisation', (done) => {
    chai.request(app)
      .get(`/authorisation/${id}`)
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
        res.body.should.have.property('data').property('authorisationStatement').equal('hemşire ekle');

        done();
      });
  });

  it('delete authorisation that doesnt exist', (done) => {
    chai.request(app)
      .delete('/authorisation/9')
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

  it('delete authorisation', (done) => {
    chai.request(app)
      .delete(`/authorisation/${id}`)
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

  it('check deleted authorisation', (done) => {
    chai.request(app)
      .delete(`/authorisation/${id}`)
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