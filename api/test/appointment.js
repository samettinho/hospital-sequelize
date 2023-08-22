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

describe(' Hospital Appointment  Service testing', () => {
  it('get all appointment', (done) => {
    chai.request(app)
      .get('/appointments')
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
        res.body.data.length.should.be.equal(3);
        done();
      });
  });

  it('get one appointment', (done) => {
    chai.request(app)
      .get('/appointments/2')
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
        res.body.data.should.have.property('doctor_full_name').equal('Samet Yılmaz');
        done();
      });
  });

  it('get non appointment', (done) => {
    chai.request(app)
      .get('/appointments/9')
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
        res.body.should.have.property('message').equal('randevu bulunamadi');
        done();
      });
  });
  let id;
  it('appointment create', (done) => {
    const body = {
      userId: 4,
      doctor: 3,
      hospitalId: 1,
      entryDate: '2023-08-20 17:45:00'
    };
    chai.request(app)
      .post('/appointments')
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

  it('get created appointment', (done) => {
    chai.request(app)
      .get(`/appointments/${id}`)
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
        res.body.data.should.have.property('hospital_name').equal('Medicana');
        done();
      });
  });

  it('Cannot create an appointment with a non-user', (done) => {
    const body = {
      'userId': 47,
      'doctor': 2,
      'hospitalId': 2,
      'entryDate': '2023-08-20 17:45:00'
    };
    chai.request(app)
      .post('/appointments')
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
        res.body.should.have.property('message').equal('Böyle bir kullanici yok');
        done();
      });
  });

  it('Cannot create an appointment with a non-doctor', (done) => {
    const body = {
      'userId': 6,
      'doctor': 3,
      'hospitalId': 2,
      'entryDate': '2023-08-20 17:45:00'
    };
    chai.request(app)
      .post('/appointments')
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
        res.body.should.have.property('message').equal('doktor ve hastane eşleşmiyor');
        done();
      });
  });

  it('incorrect information entry adding  appointment', (done) => {
    const body = {
      'userId': 4,
      'doctor': 3,
      'hospitalId': 1,
      'entryDate': '2023-08-20 17:45:00'
    };
    chai.request(app)
      .post('/appointments')
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
        res.body.should.have.property('message').equal('randevu oluşturulamadi. saat dolu.');
        done();
      });
  });

  it('update appointment', (done) => {
    const body = {
      'id': id,
      'userId': 4,
      'doctor': 3,
      'hospitalId': 1,
      'entryDate': '2023-08-20 18:45:00'
    };
    chai.request(app)
      .put('/appointments')
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

  it('get updated appointment', (done) => {
    chai.request(app)
      .get(`/appointments/${id}`)
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

        done();
      });
  });

  it('wrong update  appointment', (done) => {
    const body = {
      'id': id,
      'userId': 4,
      'doctor': 3,
      'hospitalId': 1,
      'entryDate': '2023-08-20 17:25:00'
    };
    chai.request(app)
      .put('/appointments')
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

  it('delete appointment that doesnt exist', (done) => {
    chai.request(app)
      .delete('/appointments/9')
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

  it('delete appointment', (done) => {
    chai.request(app)
      .delete('/appointments/2')
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

  it('check deleted appointment', (done) => {
    chai.request(app)
      .delete('/appointments/2')
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