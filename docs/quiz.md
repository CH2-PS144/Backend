## Question Quiz Specification

[//]: # (# Create Data Quiz Api)

[//]: # (Endpoint : POST /api/questions)

[//]: # ()
[//]: # (Headers :)

[//]: # ()
[//]: # (- Authorization : token)

[//]: # ()
[//]: # (Response Body : )

[//]: # (```json)

[//]: # ({)

[//]: # (  "questions": "question data")

[//]: # (})

[//]: # (```         )

[//]: # (Response Body Success :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 201,)

[//]: # (  "status": "success",)

[//]: # (  "message": "new question data added!")

[//]: # (})

[//]: # (```)

[//]: # (Response Body Error :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 400,)

[//]: # (  "status": "failed",)

[//]: # (  "message": "create question data failed")

[//]: # (})

[//]: # (```)

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
  "quiz": [
    {
      "id": "218aba7f-8f06-4e3a-9dbe-bd689d694a62",
      "questions": "Kesalahan pengukuran yang selalu ada pada setiap pengukuran, dengan arah yang sama, disebut ...",
      "answer": [
        {
          "option": "A",
          "value": "kesalahan sistematis"
        },
        {
          "option": "B",
          "value": "kesalahan acak"
        },
        {
          "option": "C",
          "value": ". kesalahan mutlak"
        },
        {
          "option": "D",
          "value": "kesalahan baku"
        }
      ],
      "material": {
        "id": "634c4ed6-5ec8-45d1-9bf4-7790f33ea35d",
        "name": "zat dan Perubahan"
      }
    }
  ]
}
```
# Get Data Quiz By Id Api
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