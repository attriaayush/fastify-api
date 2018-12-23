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
1200 requests were completed within 60 seconds.


 