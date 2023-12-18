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
  "message": "data materials with id 46138f26-67d8-4d51-a25b-ccdccedb4fb5 found",
  "material": {
    "id": "46138f26-67d8-4d51-a25b-ccdccedb4fb5",
    "name": "Gerak dan Gaya",
    "content": "<p dir=\"ltr\">Haii PhysEdu Friends&nbsp;</p>\n<p dir=\"ltr\">Kali ini kita akan belajar tentang Gerak dan Gaya!&nbsp;</p>\n<p dir=\"ltr\"><strong>GERAK&nbsp;</strong></p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/-ELywKU7Ah1AKzReUo-8FU1TbLqB9yXJdpQu3_N8bOw4FJ3p0WEDuySKvS1jQMx1lOFYH-OsXpt5KOv56KbyTwsTaraPa3ExICR8LSlg-HEcBQImZg0bXUlcY9I_i1-v3Y8H0OuLx-mr\" width=\"624\" height=\"351\"></p>\n<p dir=\"ltr\"><strong>Pengertian GLB</strong></p>\n<p dir=\"ltr\">Gerak lurus beraturan atau GLB adalah gerak yang terjadi di sepanjang lintasan lurus dengan kecepatan tetap. Artinya, kecepatan benda di setiap titik selalu sama, baik besar maupun arahnya. Jika kecepatannya tetap, maka perubahan kecepatannya sama dengan nol. Artinya, percepatan benda akan bernilai nol.</p>\n<p dir=\"ltr\"><strong>Pengertian GLBB</strong></p>\n<p dir=\"ltr\">Gerak lurus berubah beraturan atau GLBB adalah gerak yang terjadi di sepanjang lintasan lurus dengan perubahan kecepatan tetap. Artinya, kecepatan gerak benda berubah secara teratur setiap detiknya, sehingga perubahan kecepatannya tetap. Jika perubahan kecepatannya tetap, maka percepatan geraknya tetap atau tidak bernilai nol. Berdasarkan jenis percepatannya, GLBB dibagi menjadi dua, yaitu GLBB dipercepat dan diperlambat.</p>\n<ol>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\"><em>GLBB dipercepat </em>adalah gerak yang kecepatan bendanya selalu bertambah setiap detiknya, sehingga geraknya semakin cepat. Pada GLBB jenis ini, percepatan bendanya bernilai positif. Ingat, percepatan termasuk besaran vektor, sehingga kamu harus memperhatikan perjanjian tandanya.&nbsp;</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\"><em>GLBB diperlambat</em> adalah gerak yang kecepatan benda selalu berkurang setiap detiknya, hingga benda tersebut berhenti. Pada GLBB jenis ini, percepatan bendanya bernilai negatif.</p>\n</li>\n</ol>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/kd_ayv5iRAg-gpig1aQkQdS9w3buXBXXcJz_hQYG1ZwMAhQw0FdmO6l39IkZA9aHAjKJFS7yqQFa3i_XUoiZa_ncT_HGx7cRhZIcNzmcYuLGMy1PyamH6CgOW5pwZOJKxGe9u4_YGd1UIpYOvbVVbA\" alt=\"Perbedaan GLB dan GLBB Lengkap dengan Penjelasan Rumus dan ...\" width=\"499\" height=\"313\"></p>\n<p><strong>&nbsp;</strong></p>\n<p dir=\"ltr\"><strong>GAYA</strong></p>\n<p dir=\"ltr\">Gaya adalah besaran vektor yang menyebabkan perubahan pada gerak benda. Gaya dapat menyebabkan benda bergerak, berhenti, atau berubah arah. Gaya diukur dalam satuan Newton (N).</p>\n<p dir=\"ltr\">Ada beberapa macam gaya yang berperan dalam gerak benda, antara lain:</p>\n<ul>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Gaya tarik-menarik (gaya gravitasi)</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Gaya normal</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Gaya gesek</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Gaya pegas</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Gaya magnet</p>\n</li>\n</ul>\n<p dir=\"ltr\">Ada tiga hukum Newton yang merupakan hukum dasar dalam fisika mekanika yang melandasi gaya-gaya yang bekerja pada benda.</p>\n<p dir=\"ltr\"><strong>Hukum I Newton</strong></p>\n<p dir=\"ltr\">Hukum I Newton, juga dikenal sebagai hukum inersia, menyatakan bahwa benda akan tetap dalam keadaan diam atau bergerak lurus beraturan dengan kecepatan tetap jika gaya total yang bekerja pada benda adalah nol. Artinya, benda cenderung mempertahankan keadaannya sampai ada gaya yang merubahnya.</p>\n<p dir=\"ltr\"><strong>Hukum II Newton</strong></p>\n<p dir=\"ltr\">Hukum II Newton menyatakan bahwa percepatan benda proporsional dengan gaya total yang bekerja pada benda dan berbanding terbalik dengan massa benda. Rumus hukum II Newton adalah:</p>\n<p dir=\"ltr\">F = m x a</p>\n<p dir=\"ltr\">Di mana F adalah gaya total yang bekerja pada benda (dalam Newton), m adalah massa benda (dalam kilogram), dan a adalah percepatan benda (dalam meter per detik kuadrat).</p>\n<p dir=\"ltr\"><strong>Hukum III Newton</strong></p>\n<p dir=\"ltr\">Hukum III Newton menyatakan bahwa setiap gaya aksi memiliki reaksi yang sama besar namun berlawanan arah dengan gaya tersebut. Artinya, jika suatu benda memberi gaya pada benda lain, benda kedua akan memberi gaya balasan dengan besar yang sama namun arahnya berlawanan.</p>\n<p dir=\"ltr\">Mengenal Konsep Gerak dan Gaya pada Benda beserta Sifat-Sifatnya</p>\n<p dir=\"ltr\">Konsep gerak dan gaya pada benda sangat erat kaitannya dalam ilmu fisika. Tanpa adanya gaya, benda tidak dapat melakukan gerak maupun berpindah tempat. Hubungan gerak dan gaya dalam fisika dibahas dan dirumuskan dalam hukum Newton.&nbsp;</p>\n<p dir=\"ltr\">Hubungan antara gerak benda dengan gaya dapat ditemui dalam kehidupan sehari-hari. Contohnya seperti memindahkan kursi, bermain bola, bermain ketapel, menimba air, dan lain sebagainya.</p>\n<p dir=\"ltr\"><strong>Konsep Gerak dan Gaya</strong></p>\n<p dir=\"ltr\">Dilihat dari pengertiannya, gaya adalah tarikan atau dorongan yang menyebabkan suatu benda bergerak sedangkan gerak adalah perpindahan posisi benda dari tempat asalnya ke tempat lain. Pada prinsipnya, yang mempengaruhi gerak suatu benda adalah gaya.</p>\n<p dir=\"ltr\">Meski saling berkaitan, gaya dan gerak adalah dua hal yang berbeda. Berikut beberapa perbedaan gaya dan gerak.</p>\n<ul>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Gaya merupakan dorongan atau tarikan yang menyebabkan pergerakan benda. Sedangkan gerak merupakan perpindahan tempat dan perubahan percepatan suatu benda karena adanya gaya.&nbsp;</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Gaya tidak dapat dilihat namun dapat dirasakan, sedangkan gerak dapat dilihat.</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Gaya dapat memengaruhi bentuk benda, sedangkan gerak tidak memengaruhinya.&nbsp;</p>\n</li>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\">Gaya tidak dipengaruhi oleh gerak, sementara gerak dipengaruhi gaya, dan sebaliknya.&nbsp;</p>\n</li>\n</ul>\n<p dir=\"ltr\"><strong>Sifat-Sifat Gaya</strong></p>\n<p dir=\"ltr\">1. Mengubah Bentuk Benda</p>\n<p dir=\"ltr\">Sifat ini adalah satu sifat yang utama. Gaya dapat mengubah bentuk benda atau sebuah objek tertentu. Contohnya seperti tanah liat. Melalui gaya, tanah liat bisa dijadikan sebuah bentuk atau menjadi celengan dan lainnya.</p>\n<p dir=\"ltr\">2. Mengubah Arah Suatu Benda</p>\n<p dir=\"ltr\">Tidak hanya bentuk benda, gaya juga dapat mengubah arah benda. Gaya dapat mengubah arah benda yang bergerak. Benda yang bergerak dapat merubah ke arah lainnya melalui gaya.&nbsp;</p>\n<p dir=\"ltr\">Contohnya, seperti permainan sepak bola, ketika seseorang menendang bola ke arah kiper, kiper dapat mengubah kembali arah bola tersebut. Melalui gaya, tendangan yang mengarahkan bola menjauhi daerah gawang.</p>\n<p dir=\"ltr\">3. Mengubah Benda Diam Menjadi Bergerak, Begitu Pula Sebaliknya.</p>\n<p dir=\"ltr\">Gaya dapat mengubah benda diam menjadi bergerak. Contohnya seperti benda-benda di sekitar. Sebuah meja yang diam, melalui gaya tarikan atau dorongan meja tersebut dapat berubah menjadi bergerak.</p>\n<p dir=\"ltr\">Begitu pula sebaliknya, gaya dapat mengubah benda bergerak menjadi diam. Melalui gaya benda bergerak bisa menjadi diam, ketika seseorang menangkap bola, maka bola yang semula bergerak menjadi diam.</p>\n<p dir=\"ltr\">4. Mengubah Kecepatan Gerak Benda</p>\n<p dir=\"ltr\">Melalui gaya, benda yang bergerak dapat diatur batas kecepatannya. Bisa dibuat melambat atau bahkan lebih cepat. Contohnya seperti sedang mengendarai mobil, melalui gaya mobil bisa diatur kecepatannya. Bisa dibuat melambat atau bahkan lebih cepat.</p>\n<p>&nbsp;</p>",
    "class": {
      "id": "3ab9d84c-66b5-49dd-9407-5aa78f884f54",
      "name": "VII"
    }
  }
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