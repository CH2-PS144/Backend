## Material API Specification

[//]: # (# Create Data Material Api)

[//]: # (Endpoint : POST /api/materials)

[//]: # ()
[//]: # (Headers :)

[//]: # ()
[//]: # (- Authorization : token)

[//]: # ()
[//]: # (Request Body : )

[//]: # (```json)

[//]: # ({)

[//]: # (  "name": "name material")

[//]: # (})

[//]: # (```)

[//]: # (Response Body Success :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 201,)

[//]: # (  "status": "success",)

[//]: # (  "message": "new material data added!")

[//]: # (})

[//]: # (```)

[//]: # (Response Body Error :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 400,)

[//]: # (  "status": "Failed",)

[//]: # (  "message": "create material data failed")

[//]: # (})

[//]: # (```)
# Get All Data Material Api
Endpoint : GET /api/materials

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "material": [
    {
      "id": "0b07e3c2-e21a-43a5-9d37-f59d249537b9",
      "name": "pengukuran dasar",
      "content": "<p dir=\"ltr\"><strong>Haii PhysEdu Friends&nbsp;</strong></p>\n<p dir=\"ltr\">Kali ini kita akan belajar tentang<strong> pengukuran dasar</strong>!!&nbsp;</p>\n<p dir=\"ltr\">Pengukuran adalah kegiatan membandingkan suatu besaran dengan besaran sejenisnya yang telah ditetapkan sebagai satuan. Besaran adalah segala sesuatu yang dapat diukur dan dinyatakan dengan angka. Satuan adalah ukuran yang telah disepakati secara internasional untuk menyatakan suatu besaran.</p>\n<p dir=\"ltr\">Dalam pengukuran, terdapat dua hal penting yang harus diperhatikan, yaitu:</p>\n<ol>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Besaran</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Satuan</p>\n</li>\n</ol>\n<p dir=\"ltr\">Besaran Pokok</p>\n<p dir=\"ltr\">Besaran pokok adalah besaran yang satuannya telah didefinisikan secara internasional. Besaran pokok ada tujuh, yaitu:</p>\n<p dir=\"ltr\"><img src=\"https://lh7-us.googleusercontent.com/dSPP1NoR8oNcB1Ie446ti7ntpdvNkoXWFSTwd2P6lhwnvOVWTVFwQ8QYg3kZy2D7fGxJ7NBBSO9Y4JqCm1TiqcVT8zUJRQnn-26eBdYJrvqe_urngB14Txv36n_w4bmjDCSN_HkMG6478vxucGN61Q\" width=\"524.1867635250092\" height=\"310\"></p>\n<p dir=\"ltr\">Besaran Turunan adalah besaran yang ditetapkan berdasarkan besaran pokok. Satuannya pun diturunkan dari beberapa satuan besaran pokok. Sebagai contoh untuk menentukan kecepatan suatu benda bergerak, kita perlu mengukur panjang lintasan dan waktu yang diperlukan untuk menempuh lintasan tersebut.</p>\n<p dir=\"ltr\"><img src=\"https://lh7-us.googleusercontent.com/LQe2gaFWMJBe2EiBVv97LEmeHD6JkESGfhWxg_za2lFXfRiawV8k5f_RqSnQyBAgkMokbXbUKhJdSoVjo3uTA7eTk8fLfwqZetw-1M-8AnjPpavJICQ4YjTSlZoICm3gMn_VoqJa70WinYVX5VrlvA\" width=\"194\" height=\"281\"></p>\n<p><strong>&nbsp;</strong></p>\n<p dir=\"ltr\">Satuan&nbsp;</p>\n<p dir=\"ltr\">Dalam melakukan pengukuran, agar seragam maka dianggap perlu untuk menetapkan suatu pembanding dalam pengukuran. Pembanding ini tetap, tidak berubah-ubah dan dapat digunakan secara umum di mana saja. Inilah yang disebut sebagai satuan baku.</p>\n<p dir=\"ltr\">Satuan yang tidak tetap, misalnya kaki adalah satuan tidak baku. Adapun untuk suhu, satuan yang sering kita gunakan adalah derajat Celcius, namun ini bukan satuan standar dalam Sains. Di negara sub tropis sering digunakan satuan Fahrenheit. Dalam Sains, satuan suhu yang digunakan sebagai Standar Internasional adalah Kelvin.</p>\n<p dir=\"ltr\"><img src=\"https://lh7-us.googleusercontent.com/xKTX7npLrRC0EgLpyjpGZdqsgEwBQLUNl5rIMlnLuJDkFpwWcgW1WDWloTlsl0r9fz5wm8YtDI6A9biPbPfHuE6JLS3FLamimFcFb_4h0nO03wU_R3HRXCODPjPSaWij6-IUwLZhv1-mKHGqazdaGQ\" alt=\"Cara Mengukur Kaki &ndash; Koku Footwear\" width=\"322\" height=\"257.63610672950745\"></p>",
      "class": {
        "id": "bb150a14-1479-4124-af83-2e7cc04caa39",
        "name": "XI"
      }
    },
    {
      "id": "0b07e3c2-e21a-43a5-9d37-f59dsdsdsw23",
      "name": "Listrik",
      "content": "<p dir=\"ltr\"><strong>Haii PhysEdu Friends&nbsp;</strong></p>\n<p dir=\"ltr\">Kali ini kita akan belajar tentang<strong> pengukuran dasar</strong>!!&nbsp;</p>\n<p dir=\"ltr\">Pengukuran adalah kegiatan membandingkan suatu besaran dengan besaran sejenisnya yang telah ditetapkan sebagai satuan. Besaran adalah segala sesuatu yang dapat diukur dan dinyatakan dengan angka. Satuan adalah ukuran yang telah disepakati secara internasional untuk menyatakan suatu besaran.</p>\n<p dir=\"ltr\">Dalam pengukuran, terdapat dua hal penting yang harus diperhatikan, yaitu:</p>\n<ol>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Besaran</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Satuan</p>\n</li>\n</ol>\n<p dir=\"ltr\">Besaran Pokok</p>\n<p dir=\"ltr\">Besaran pokok adalah besaran yang satuannya telah didefinisikan secara internasional. Besaran pokok ada tujuh, yaitu:</p>\n<p dir=\"ltr\"><img src=\"https://lh7-us.googleusercontent.com/dSPP1NoR8oNcB1Ie446ti7ntpdvNkoXWFSTwd2P6lhwnvOVWTVFwQ8QYg3kZy2D7fGxJ7NBBSO9Y4JqCm1TiqcVT8zUJRQnn-26eBdYJrvqe_urngB14Txv36n_w4bmjDCSN_HkMG6478vxucGN61Q\" width=\"524.1867635250092\" height=\"310\"></p>\n<p dir=\"ltr\">Besaran Turunan adalah besaran yang ditetapkan berdasarkan besaran pokok. Satuannya pun diturunkan dari beberapa satuan besaran pokok. Sebagai contoh untuk menentukan kecepatan suatu benda bergerak, kita perlu mengukur panjang lintasan dan waktu yang diperlukan untuk menempuh lintasan tersebut.</p>\n<p dir=\"ltr\"><img src=\"https://lh7-us.googleusercontent.com/LQe2gaFWMJBe2EiBVv97LEmeHD6JkESGfhWxg_za2lFXfRiawV8k5f_RqSnQyBAgkMokbXbUKhJdSoVjo3uTA7eTk8fLfwqZetw-1M-8AnjPpavJICQ4YjTSlZoICm3gMn_VoqJa70WinYVX5VrlvA\" width=\"194\" height=\"281\"></p>\n<p><strong>&nbsp;</strong></p>\n<p dir=\"ltr\">Satuan&nbsp;</p>\n<p dir=\"ltr\">Dalam melakukan pengukuran, agar seragam maka dianggap perlu untuk menetapkan suatu pembanding dalam pengukuran. Pembanding ini tetap, tidak berubah-ubah dan dapat digunakan secara umum di mana saja. Inilah yang disebut sebagai satuan baku.</p>\n<p dir=\"ltr\">Satuan yang tidak tetap, misalnya kaki adalah satuan tidak baku. Adapun untuk suhu, satuan yang sering kita gunakan adalah derajat Celcius, namun ini bukan satuan standar dalam Sains. Di negara sub tropis sering digunakan satuan Fahrenheit. Dalam Sains, satuan suhu yang digunakan sebagai Standar Internasional adalah Kelvin.</p>\n<p dir=\"ltr\"><img src=\"https://lh7-us.googleusercontent.com/xKTX7npLrRC0EgLpyjpGZdqsgEwBQLUNl5rIMlnLuJDkFpwWcgW1WDWloTlsl0r9fz5wm8YtDI6A9biPbPfHuE6JLS3FLamimFcFb_4h0nO03wU_R3HRXCODPjPSaWij6-IUwLZhv1-mKHGqazdaGQ\" alt=\"Cara Mengukur Kaki &ndash; Koku Footwear\" width=\"322\" height=\"257.63610672950745\"></p>",
      "class": {
        "id": "bb150a14-1479-4124-af83-2e7cc04caa39",
        "name": "XI"
      }
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

[//]: # (# Update Data Material Api)

[//]: # (Endpoint : PATCH /api/materials/:id)

[//]: # ()
[//]: # (Headers :)

[//]: # ()
[//]: # (- Authorization : token)

[//]: # ()
[//]: # (Response Body :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "name": "material name")

[//]: # (})

[//]: # (```)

[//]: # (Response Body Success :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 200,)

[//]: # (  "status": "success",)

[//]: # (  "message": "material with id 1 updated.",)

[//]: # (  "data" : [)

[//]: # (    {)

[//]: # (      "id": 1,)

[//]: # (      "name":"material class name updated")

[//]: # (    })

[//]: # (  ])

[//]: # (})

[//]: # (```)

[//]: # (Response Body Error :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 404,)

[//]: # (  "status": "failed",)

[//]: # (  "message": "material with id 1 not found.")

[//]: # (})

[//]: # (```)

[//]: # (# Delete Data Material Api)

[//]: # (Endpoint : DELETE /api/materials)

[//]: # ()
[//]: # (Headers :)

[//]: # ()
[//]: # (- Authorization : token)

[//]: # ()
[//]: # (Response Body Success :)

[//]: # (```json)

[//]: # ({)

[//]: # (  "code": 200,)

[//]: # (  "status": "success",)

[//]: # (  "message":"material with id 1 deleted.")

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