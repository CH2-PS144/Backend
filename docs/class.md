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
Endpoint : GET http://34.87.40.161:5000/api/class

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
      "id": "ad9e36e1-ece9-4d1f-9b7c-5d4e9ef5aded",
      "name": "IX"
    },
    {
      "id": "3ab9d84c-66b5-49dd-9407-5aa78f884f54",
      "name": "VII"
    },
    {
      "id": "34f932e0-dee6-4afe-b702-f39d29267876",
      "name": "VIII"
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
Endpoint : GET http://34.87.40.161:5000/api/class/:id

Headers :

- Authorization : token
Response Body Success :

```json
{
  "code": 200,
  "status": "success",
  "message": "data material with id ad9e36e1-ece9-4d1f-9b7c-5d4e9ef5aded found",
  "class": {
    "id": "ad9e36e1-ece9-4d1f-9b7c-5d4e9ef5aded",
    "name": "IX"
  }
}
```
Response Body Class Not Found :
```json
{
  "status": "failed",
  "message": "class with id ad9e36e1-ece9-4d1f-9b7c-5d4e9ef5adedwe not found",
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