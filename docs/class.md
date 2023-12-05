## Class API Specification

[//]: # (# Create Class API)

[//]: # (Endpoint : POST /api/class)

[//]: # ()
[//]: # (Headers :)

[//]: # ()
[//]: # (- Authorization : token)

[//]: # ()
[//]: # (Request Body : )

[//]: # (```json)

[//]: # ({)

[//]: # (  "name": "class name")

[//]: # (})

[//]: # (```)

[//]: # (Response Body Success :)

[//]: # ()
[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 201,)

[//]: # (  "status": "success",)

[//]: # (  "message": "new class data added!",)

[//]: # (  "class": {)

[//]: # (    "id": "3055ec07-4519-4537-9ea4-3d54b0d9aa1c",)

[//]: # (    "name": "VI")

[//]: # (  })

[//]: # (})

[//]: # (```)

[//]: # (Response Body empty value :)

[//]: # ()
[//]: # (```json)

[//]: # ({)

[//]: # (  "status": "failed",)

[//]: # (  "message": "\"name\" is not allowed to be empty")

[//]: # (})

[//]: # (```)

[//]: # (Response Body Error :)

[//]: # ()
[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 400,)

[//]: # (  "status": "Failed",)

[//]: # (  "message": "create class data failed")

[//]: # (})

[//]: # (```)

## Get All Data Class API 
Endpoint : GET /api/class

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 201,
  "status": "success",
  "message": "success getting all Class data",
  "class": [
    {
      "id": "429af5ff-0c02-4639-a709-f27846916a11",
      "name": "VII"
    },
    {
      "id": "bb150a14-1479-4124-af83-2e7cc04caa39",
      "name": "XI"
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
  "message": "data material with id 429af5ff-0c02-4639-a709-f27846916a11 found",
  "class": {
    "id": "429af5ff-0c02-4639-a709-f27846916a11",
    "name": "VII"
  }
}
```
Response Body Error :
```json
{
  "status": "failed",
  "message": "class with id 23123 not found",
  "class": []
}
```

[//]: # (# Update Data Class API)

[//]: # (Endpoint : PATCH /api/class/:id)

[//]: # ()
[//]: # (Headers :)

[//]: # (- Authorization : token)

[//]: # ()
[//]: # (Request Body : )

[//]: # (```json)

[//]: # ({)

[//]: # (  "name": "class name")

[//]: # (})

[//]: # (```)

[//]: # (Response Body Success :)

[//]: # ()
[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 200,)

[//]: # (  "status": "success",)

[//]: # (  "message": "class with id 1 updated.",)

[//]: # (  "data" : [)

[//]: # (    {)

[//]: # (      "id": 1,)

[//]: # (      "name":"new class name updated")

[//]: # (    })

[//]: # (  ])

[//]: # (})

[//]: # (```)

[//]: # (Response Body Error :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 404,)

[//]: # (  "status": "failed",)

[//]: # (  "message": "class with id 1 not found.")

[//]: # (})

[//]: # (```)

[//]: # (## Delete Data Class Api)

[//]: # (Endpoint : DELETE /api/class/:id)

[//]: # ()
[//]: # (Headers :)

[//]: # (- Authorization : token)

[//]: # ()
[//]: # (Responses Body Success : )

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 200,)

[//]: # (  "status": "success",)

[//]: # (  "message":"class with id 1 deleted.")

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (Responses Body Error :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 404,)

[//]: # (  "status": "failed",)

[//]: # (  "message": "class with id 1 not found.")

[//]: # (})

[//]: # (```)