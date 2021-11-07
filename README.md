# g-n-output-api

## Description
This is a mini server that has only one endpoint. This endpoint takes a number, and the result is a string that is a presentation of the received number as follows:
  - If the integer is a multiple of 3, it should return "G",
  - If the integer is a multiple of 5, it should return "N",
  - If the integer is a multiple of both 3 and 5, then both "GN" should be displayed, otherwise the provided integer should be returned;
  
Endpoint `/get`:
  - HTTP method `GET`;
  - has query parmeter `n`- it`s a number;
  - return - JSON object in format `{ value: number }`;
  
  
  ## How to start:
    yarn start - will start the server;
    yarn test - will run unit test;
    
