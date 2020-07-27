// Accessing the required dependecies
let chai = require('chai');
let chaiHTTP = require('chai-http');
let mongoose = require('mongoose');
let DOCTOR = require('../models/doctor');
let should = chai.should();
// Accessing the app
let app = require('../index');

// Usin the chaiHTTP
chai.use(chaiHTTP);

// Starting the test featutes
// TODO:
// * Handle the test for Doctor API

// Declaring the describe function for the doctor
describe('/POST doctor/register', () => {

// ! Removing all the doctors from the doctor collection
    before((done) => {
        DOCTOR.deleteMany({}, (err) => {
            done();
        })
    });

    // * Registering a new DOCTOR

    it("Registering a new DOCTOR ", (done) => {
        chai.request(app)
            .post('/api/v1/doctor/register')
            .type('form')
            .send({
                'username': "Pseudo_Doctor",
                'password': "RandomPassword"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.should.be.eql("Registered Successfully 🙂");
                done()
            })
    })

    // * Test for Existing user
    describe('/POST doctor/register',() => {
        it('Should not registerd a new doctor if , Doctor already exsist',(done)=>{
            chai.request(app)
            .post('/api/v1/doctor/register')
            .type('form')
            .send({
                'username' : 'Pseudo_Doctor',
                'password' : 'RandomPassword'
            })
            .end((err,res)=>{
                res.should.have.status(422);
                res.body.message.should.be.eql("Already registered, try with other details 😰 ");
                done();
            })
        })
    });

    // * Test for accesing the account
    describe('/POST doctor/login',() =>{
        it('Allows user to login with Valid Credentials 😎 and should return the AUTH TOKEN',(done)=>{
            chai.request(app)
            .post('/api/v1/doctor/login')
            .type('form')
            .send({
                'username': "Pseudo_Doctor",
                'password': "RandomPassword"
            })
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.message.should.be.eql('Logged In Successfully 😎');
                done();
            })
        })
    })

    // * Test for accesing the account with wrong credentials
    describe('/POST doctor/login',() =>{
        it('Not allowing the user to access with invalid credentials',(done)=>{
            chai.request(app)
            .post('/api/v1/doctor/login')
            .type('form')
            .send({
                'username': "Pseudo_Doctor",
                'password': "PseudoRandomPassword"
            })
            .end((err,res)=>{
                res.should.have.status(422);
                res.body.message.should.be.eql('Invalid Credentials');
                done();
            })
        })
    })

});

