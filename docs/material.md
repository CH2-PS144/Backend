## Material API Specification

# Create Data Material Api
Endpoint : POST /api/materials

Headers :

- Authorization : token

Request Body : 
```json
{
  "name": "name material"
}
```
Response Body Success :
```json
{
  "code": 201,
  "status": "success",
  "message": "new material data added!"
}
```
Response Body Error :
```json
{
  "code": 400,
  "status": "Failed",
  "message": "create material data failed"
}
```
# Get All Data Material Api
Endpoint : GET /api/materials

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status" : "success",
  "message": "success getting all material data",
  "data": [
    {
      "id": 1,
      "name":"class material"
    },
    {
      "id": 2,
      "name":"class material"
    }
  ]
}
```
Response Body Error :
```json
{
  "code": 400,
  "status": "Failed",
  "message": "failed getting all material data"
}
```
# Get Data Material By Id Api
Endpoint : POST /api/materials/:id

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "message": "material with id 1 found.",
  "data": [
    {
      "id": 1,
      "name":"class material"
    }
  ]
}
```
Response Body Error :
```json
{
  "code": 404,
  "status": "failed",
  "message": "material with id 1 not found."
}
```
# Update Data Material Api
Endpoint : PATCH /api/materials/:id

Headers :

- Authorization : token

Response Body :
```json
{
  "name": "material name"
}
```
Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "message": "material with id 1 updated.",
  "data" : [
    {
      "id": 1,
      "name":"material class name updated"
    }
  ]
}
```
Response Body Error :
```json
{
  "code": 404,
  "status": "failed",
  "message": "material with id 1 not found."
}
```
# Delete Data Material Api
Endpoint : DELETE /api/materials

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "message":"material with id 1 deleted."
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