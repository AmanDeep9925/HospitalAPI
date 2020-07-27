# Hospital API

Developing an API using Node.js and MongoDB for the doctors of a Delhi Hospitals which have been allocated by the Govt for testing and caring for the Covid+ patients

### SetUp on your machine

1. Clone/Download root folder on your machine
2. Now, open up the cloned folder
3. Fire up terminal, and follow these commands

### Start Twitching

```
npm install
node index.js
```

### Create it...

    Goto localhost:8000 on any browser

### Checkout the API's

- /doctor/register
- /doctor/login
- /pateint/register
- /patient/:id/createreport
- patient/:id/allreports
- report/:status

### Testing the API

    Well it's good to be sure that what you have been developed must be correct and in a state of usability.

    Testing is the crucial part for a developer and hence it must for him to grasp knowledge over this topic too.

#### Testing the API that we have created

For testing we are using the *mocha* a javascript framework for testing the javascript app, *Chai* as a assertion library

#### Making the sutable changes for the testing

    Installing the testing libraries

    ```
        npm i mocha chai chai-http
    ```

#### Testing Environment

Make a directory name of test and all the files that you want to run on the test API

1. `/doctor/register` :- Registers a new Doctor to the hospital Database with their credentials.
2. `/doctor/login` :- Giving access to registered doctor to check the reports of their patients.
3. `/patient/register` :- For registering a patient with a mobile number.
4. `/patient/:id/createreport` :- API to create the reports of the registered patients.
5. `/patient/:id/allreports` :- To get all the reports of the patient that request their reports.
6. `/report/:status`  :- To generate all the reports of the of patient

### Folder Structure

```
    |__ HospitalApi
        |
        |__ config
        |   |__ mongooese.js
        |   |__ passportJWTstrategy.js
        |__ controllers
        |   |__api
        |        |__v1
        |             |__ DoctorApi.js
        |             |__ PatientApi.js
        |             |__ ReportApi.js
        |
        |__ models
        |   |__ doctor.js
        |   |__ patient.js
        |   |__ report.js
        |__ routes
        |   |__ index.js
        |   |__ api
        |       |__ index.js
        |       |__ v1
        |           |__ index.js
        |           |__ DoctorApi.js
        |           |__ PatientApi.js
        |           |__ ReportApi.js
        |__ test
        |    |__ doctor.js
        |    |__ patient.js
        |
        |__ .gitignore
        |__ index.js
        |__ package-lock.json
        |__ package.json
        |__ README.md

```
Happy Hacking 😁