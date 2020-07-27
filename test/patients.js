let chai = require('chai'),
    chaiHTTP = require('chai-http'),
    mongooose = require('mongoose'),
    PATIENT = require('../models/patient'),
    should = chai.should(),
    app = require('../index');

    chai.use(chaiHTTP);

describe('Patient API',() => {

    before((done)=>{
        PATIENT.deleteMany({},(err)=>{
            done();
        })
    })

    describe('/POST /patient/register',() => {
        it("Creates a new Patient in the Database 🙂",(done)=>{
            chai.request(app)
            .post('/api/v1/doctor/login')
            .type('form')
            .send({
                'username': "Pseudo_Doctor",
                'password': "RandomPassword"
            })
            .end((req,res) => {
                let token =  res.body.token;
                chai.request(app)
                .post('/api/v1/patient/register')
                .set({
                    'Authorization' : `Bearer ${token}`
                })
                .type('form')
                .send({
                    'phone' : '891235467'
                })
                .end((err,res) => {

                    res.should.have.status(200);
                    res.body.message.should.be.eql("Patient Registered");
                    // console.log(res.body);
                });
                done();
            })
        });
    })
})