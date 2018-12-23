# Fastify-API 
Building an application with fastify npm library proof-of-concept that displays:

* Speed - API response time
* Documentation - Using Swagger
* Maintable and expandable codebase

## Prerequisites
* Node 8.9.11 or above
* NPM
* MongoDB 

## How to Build
* ```npm install```
* ```npm start```
* Visit the ```http://localhost:4000/documentation/``` on your local machine to explore the APIs.

Note: Please ensure to run these commands at the root level of this project.

## Results
Performed load testing with ArtilleryJS, configuration for the test could be found in ```artillery.config.yml``` file  
#### Scenario 1
1200 requests without a failure were completed within 60 seconds with the TPS of 20.
```
All virtual users finished
Summary report @ 18:26:42(+0000) 2018-12-23
  Scenarios launched:  1200
  Scenarios completed: 1200
  Requests completed:  1200
  RPS sent: 19.86
  Request latency:
    min: 1.7
    max: 40.4
    median: 2.1
    p95: 3.9
    p99: 6.4
  Scenario counts:
    0: 1200 (100%)
  Codes:
    200: 1200
```
#### Scenario 2
3600 requests without a failure were completed within 60 seconds with the TPS of 60.
```
All virtual users finished
Summary report @ 18:33:59(+0000) 2018-12-23
  Scenarios launched:  3600
  Scenarios completed: 3600
  Requests completed:  3600
  RPS sent: 59.53
  Request latency:
    min: 1.5
    max: 65.7
    median: 2.2
    p95: 4.2
    p99: 9.9
  Scenario counts:
    0: 3600 (100%)
  Codes:
    200: 3600
```


 