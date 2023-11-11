## Answer Api Specification

# Create Data Answer Api
Endpoint : POST /api/answers

Headers :

- Authorization : token

Request Body :
```json
{
  "resultAnswer" :"result answer",
  "active":"true"
}
```
Response Body Success : 
```json
{
  "code": 201,
  "status": "success",
  "message": "new answer data added!"
}
```
Response Body Error :
```json
{
  "code": 400,
  "status": "Failed",
  "message": "create answer data failed"
}
```
# Get All Data Answer Api
Endpoint : POST /api/questions

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status" : "success",
  "message": "success getting all answer data",
  "data": [
    {
      "id": 1,
      "resultAnswer" :"result answer",
      "active":"true"
    },
    {
      "id": 2,
      "resultAnswer" :"result answer",
      "active":"true"
    }
  ]
}
```
Response Body error :
```json
{
  "code": 400,
  "status": "Failed",
  "message": "failed getting all answer data"
}
```
# Get Data Material By Id Api
Endpoint : POST /api/questions/:id

Headers :

- Authorization : token

Response Body :
```json
{
  "code": 200,
  "status": "success",
  "message": "material with id 1 found.",
  "data": [
    {
      "id": 1,
      "resultAnswer" :"result answer",
      "active":"true"
    }
  ]
}
```
# Update Data Answer Api
Endpoint : POST /api/questions/id

Headers :

- Authorization : token

Request Body :
```json
{
  "resultAnswer" :"result answer",
  "active":"true"
}
```
# Delete Data Answer Api
Endpoint : POST /api/questions/id

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "message":"data answer with id 1 deleted."
}
```
Response Body Error :
```json
{
  "code": 404,
  "status": "failed",
  "message": "data answer with id 1 not found."
}
```