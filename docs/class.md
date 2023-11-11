## Class API Specification

# Create Class API
Endpoint : POST /api/class

Headers :

- Authorization : token

Request Body : 
```json
{
  "name": "class name"
}
```
Response Body Success :

```json
{
  "code" : 201,
  "status": "success",
  "message": "new class data added!",
  "data": {
    "id" : 1,
    "name": "Class name"
  }
}
```
Response Body Error :

```json
{
  "code": 400,
  "status": "Failed",
  "message": "create class data failed"
}
```

## Get All Data Class API 
Endpoint : GET /api/class

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status" : "success",
  "message": "success getting all Class data",
  "data": [
    {
      "id": 1,
      "name":"class name"
    },
    {
      "id": 2,
      "name":"class name"
    }
  ]
}
```
Response Body Error :
```json
{
  "code": 400,
  "status": "failed",
  "message": "failed getting all class data"
}
```
## Get Data Class By Id API 
Endpoint : GET /api/class/:id

Headers :

- Authorization : token
- 
Response Body Success :

```json
{
  "code": 200,
  "status": "success",
  "message": "class with id 1 found.",
  "data": [
    {
      "id": 1,
      "name":"class name"
    }
  ]
}
```
Response Body Error :
```json
{
  "code": 404,
  "status": "failed",
  "message": "class with id 1 not found."
}
```
# Update Data Class API
Endpoint : PATCH /api/class/:id

Headers :
- Authorization : token

Request Body : 
```json
{
  "name": "class name"
}
```
Response Body Success :

```json
{
  "code": 200,
  "status": "success",
  "message": "class with id 1 updated.",
  "data" : [
    {
      "id": 1,
      "name":"new class name updated"
    }
  ]
}
```
Response Body Error :
```json
{
  "code": 404,
  "status": "failed",
  "message": "class with id 1 not found."
}
```
## Delete Data Class Api
Endpoint : DELETE /api/class/:id

Headers :
- Authorization : token

Responses Body Success : 
```json
{
  "code": 200,
  "status": "success",
  "message":"class with id 1 deleted."
}
```

Responses Body Error :
```json
{
  "code": 404,
  "status": "failed",
  "message": "class with id 1 not found."
}
```