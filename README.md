
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
        |
        |
        |__ .gitignore
        |__ index.js
        |__ package-lock.json
        |__ package.json
        |__ README.md

```
