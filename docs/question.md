## Question Api Specification

# Create Data Material Api
Endpoint : POST /api/questions

Headers :

- Authorization : token

Response Body : 
```json
{
  "questions": "question data"
}
```
Response Body Success :
```json
{
  "code": 201,
  "status": "success",
  "message": "new question data added!"
}
```
Response Body Error :
```json
{
  "code": 400,
  "status": "failed",
  "message": "create question data failed"
}
```
# Get All Data Material Api
Endpoint : GET /api/questions

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status" : "success",
  "message": "success getting all question data",
  "data": [
    {
      "id": 1,
      "question":"material data"
    },
    {
      "id": 2,
      "name":"material data"
    }
  ]
}
```
Response Body Error :
```json
{
"code": 400,
"status": "Failed",
"message": "failed getting all question data"
}
```
# Get Data Material By Id Api
Endpoint : GET /api/questions/:id

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "message": "data question with id 1 found.",
  "data": [
    {
      "id": 1,
      "name":"question data"
    }
  ]
}
```
Response Body Error : 
```json
{
  "code": 404,
  "status": "failed",
  "message": "data material with id 1 not found."
}
```
# Update Data Material Api
Endpoint : PATCH /api/materials/:id

Headers :

- Authorization : token

Request Body :
```json
{
  "questions": "question data"
}
```
Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "message": "data question with id 1 updated.",
  "data" : [
    {
      "id": 1,
      "name":"data question class name updated"
    }
  ]
}
```
Response Body Error :
```json
{
  "code": 404,
  "status": "failed",
  "message": "data material with id 1 not found."
}
```
# Delete Data Material Api
Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "message":"data question with id 1 deleted."
}
```

Response Body Error :
```json
{
  "code": 404,
  "status": "failed",
  "message": "data question with id 1 not found."
}
```