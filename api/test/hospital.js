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

describe(' Hospital Appointment Hospital Service  testing', () => {
  it('get all hospitals', (done) => {
    chai.request(app)
      .get('/hospital')
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

  it('get one hospital', (done) => {
    chai.request(app)
      .get('/hospital/2')
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

  it('get non hospital', (done) => {
    chai.request(app)
      .get('/hospital/9')
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
        res.body.should.have.property('message').equal('hastane bulunamadi');
        done();
      });
  });
  let id;
  it('hospital create', (done) => {
    const body = {
      'hospitalName': 'Pendik Devlet'
    };
    chai.request(app)
      .post('/hospital')
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

  it('get created hospital', (done) => {

    chai.request(app)
      .get(`/hospital/${id}`)
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

  it('add existing hospital', (done) => {
    const body = {
      'hospitalName': 'Medipol'
    };
    chai.request(app)
      .post('/hospital')
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

  it('update hospital', (done) => {
    const body = {
      'id': id,
      'hospitalName': 'Kartal Devlet'
    };
    chai.request(app)
      .put('/hospital')
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

  it('get updated hospital', (done) => {
    chai.request(app)
      .get(`/hospital/${id}`)
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
        res.body.should.have.property('data').property('hospitalName').equal('Kartal Devlet');

        done();
      });
  });

  it('delete hospital that doesnt exist', (done) => {
    chai.request(app)
      .delete('/hospital/9')
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

  it('delete hospital', (done) => {
    chai.request(app)
      .delete(`/hospital/${id}`)
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

  it('check deleted hospital', (done) => {
    chai.request(app)
      .delete(`/hospital/${id}`)
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