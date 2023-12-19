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
Endpoint : GET http://34.87.40.161:5000/api/materials

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "material": [
    {
      "id": "0d036737-a2b8-492a-8322-44255b0943eb",
      "name": "Getaran, Gelombang dan Cahaya",
      "content": "<p dir=\"ltr\"><em>Hai PhysEdu Friends&nbsp;</em></p>\n<p dir=\"ltr\"><em>Kali ini kita akan belajar tentang Getaran, Gelombang, dan Cahaya!!</em></p>\n<p dir=\"ltr\"><strong>1. Getaran:</strong></p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/JP4oBRCjIvfpuAt0tzTC_jKStUeW6GPX9jIEWHPAO-UbVGsroO_G6skm0xIBm6cmik81xwXdcIj0goAfzx71wKZRhaT-Dc9EnCPxZZl5Qbm99ykXX89leyDwd9_ObtNn6hl1pd_uMD-Q\" width=\"624\" height=\"351\"></p>\n<p dir=\"ltr\">Definisi: Getaran adalah gerakan bolak-balik yang terjadi secara periodik pada suatu benda atau medium.</p>\n<p dir=\"ltr\">Sumber Getaran: Getaran dapat berasal dari berbagai sumber, seperti pegas, senar, atau osilasi suatu objek.</p>\n<p dir=\"ltr\">Besaran-Besaran Fisika pada Benda yang Bergetar</p>\n<p dir=\"ltr\"><strong>Periode (T)</strong></p>\n<p dir=\"ltr\">Waktu yang diperlukan untuk melakukan satu getaran. Satuannya adalah detik (sekon).</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/A6z2rhuo21wufHeQQbpAj8BwQG3UTqXax8cKbBv_6NAlhXea15RJXdiqey__alivjXAfQNYBRpmdOPr5NKciEehGtlnbYXtQoRlJKBh1xiIPF4olpcct36BiMPQ5WQNnkPgLNrxApr_ghtc2rfYdPA\" width=\"169\" height=\"176\">&nbsp;</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/J1P1Z1RIOp4MVy2SrT1RYj3ZFWwXrRLU8pXvZRVV-icHuPWmu7ezVIk8OBuQuEgfuCyWSCZRci5eviBVlrsBs6I9Au64dv6IyPaVE6y6aCCZqjQBNUYUacORGWs5fBPBDdmTyW1fRpcKkOIhMbeG1g\" width=\"223\" height=\"151\"></p>\n<p dir=\"ltr\"><strong>Frekuensi (f)</strong></p>\n<p dir=\"ltr\">Banyaknya getaran yang terjadi dalam tiap satuan waktu tertentu. Satuannya adalah 1 per detik atau hertz (Hz).</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/aI70_2ve1HAvh50WeBMbQ8y_K_NTX9Y2G0lpzm1q-QrsOJcFAcv5-g23CtR0ull934hv_U2BTlMTrTU56R4EenP1AFLLL8cpi5wqlOuRRK6nFGTYopKtcY045khoFFX-vLaF9sBAxg0WdMe8ZF8ecQ\" width=\"192\" height=\"192.93453431129456\"></p>\n<p dir=\"ltr\"><strong>Simpangan (x)</strong></p>\n<p dir=\"ltr\">Jarak antara kedudukan benda yang bergetar dengan titik kesetimbangan. Satuan internasionalnya adalah meter.</p>\n<p dir=\"ltr\"><strong>Amplitudo (A)</strong></p>\n<p dir=\"ltr\">Simpangan maksimum atau simpangan terjauh dari titik kesetimbangan.</p>\n<p dir=\"ltr\"><strong>2. Gelombang:</strong></p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/zmbLUxZrkMSAK3JUCPx_puCfITrw2S633bq2i3NDVHWjlLLj4miwDi2UeuSC2ieNQgdjGwPdXWCJRfGiBJHUfm-nDGFaOPzUbIYyAku9GmKAnOQ2bMVHIu0iDflGS4sXAhqhTrWpSDGs\" width=\"624\" height=\"351\"></p>\n<p dir=\"ltr\">Definisi: Gelombang adalah perambatan energi melalui medium atau ruang hampa tanpa perpindahan massa secara keseluruhan.</p>\n<p dir=\"ltr\">Klasifikasi Gelombang berdasarkan Medium Perambatnya</p>\n<ol>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\"><strong>Gelombang&nbsp;Mekanik</strong></p>\n</li>\n</ol>\n<p dir=\"ltr\">Gelombang yang&nbsp;membutuhkan medium&nbsp;dalam perambatannya. Contohnya adalah&nbsp;zat padat, zat cair, atau zat gas. Seseorang dapat mendengarkan musik dan suara karena gelombang bunyi merambat melalui udara sehingga sampai ke telinga.</p>\n<ol start=\"2\">\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\"><strong>Gelombang&nbsp;Elektromagnetik</strong></p>\n</li>\n</ol>\n<p dir=\"ltr\">Gelombang yang&nbsp;tidak membutuhkan medium&nbsp;dalam perambatannya&nbsp;dan bisa merambat di ruang yang hampa udara.&nbsp;Contohnya adalah&nbsp;cahaya matahari. Walaupun ruang angkasa adalah ruang yang hampa udara, tapi sinar matahari tetap bisa bersinar sampai ke bumi.</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/NF1pANUZD3glm2zFGGj54oTZVZQShxSts7W3iJIFOO1Oe8x-u0UDjcuvBluvEQm6FC7DvX-MP7_CBCChf7S01g_UWbBDjv8Ldkpq5gEh10dmlnL-K7YkyzdtRXl3ygbG9KOhL737Mt2C\" width=\"624\" height=\"351\"></p>\n<p dir=\"ltr\">&nbsp;</p>\n<p dir=\"ltr\"><strong>Klasifikasi Gelombang berdasarkan Arah Rambatnya</strong></p>\n<ol>\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\"><strong>Gelombang&nbsp;Longitudinal</strong></p>\n</li>\n</ol>\n<p dir=\"ltr\">Gelombang yang arah getarannya&nbsp;sejajar&nbsp;atau berimpit&nbsp;dengan arah rambatnya. Dalam satu gelombang longitudinal terdiri dari satu regangan dan satu rapatan. Contohnya pada gelombang suara di udara.</p>\n<ol start=\"2\">\n<li dir=\"ltr\" aria-level=\"1\">\n<p dir=\"ltr\" role=\"presentation\"><strong>Gelombang&nbsp;Transversal</strong></p>\n</li>\n</ol>\n<p dir=\"ltr\">Gelombang yang arah getarannya&nbsp;tegak lurus&nbsp;dengan arah rambatnya. Contohnya pada gelombang tali. Ketika tali digerakkan ke atas dan ke bawah (atau naik dan turun), arah getarannya akan tegak lurus dengan arah gerakan (arah rambat) gelombang.</p>\n<p dir=\"ltr\"><strong>Besaran-Besaran pada Gelombang</strong></p>\n<p dir=\"ltr\"><strong>Simpangan (y)</strong></p>\n<p dir=\"ltr\">Jarak dari kedudukan benda yang bergetar ke titik kesetimbangannya. Satuan internasional nya adalah meter (m).</p>\n<p dir=\"ltr\"><strong>Amplitudo (A)</strong></p>\n<p dir=\"ltr\">Simpangan terbesar dari suatu benda yang bergetar. Satuan internasionalnnya adalah meter (m).</p>\n<p dir=\"ltr\"><strong>Periode</strong></p>\n<p dir=\"ltr\">Waktu yang dibutuhkan satu gelombang untuk melewati suatu titik.</p>\n<p dir=\"ltr\"><strong>Frekuensi</strong></p>\n<p dir=\"ltr\">Banyaknya gelombang yang melewati satu titik dalam suatu satuan waktu.</p>\n<p dir=\"ltr\"><strong>Panjang Gelombang</strong></p>\n<p dir=\"ltr\">Jarak yang ditempuh oleh satu gelombang. Satuan internasionalnnya adalah meter (m).</p>\n<p dir=\"ltr\"><strong>Cepat Rambat Gelombang</strong></p>\n<p dir=\"ltr\">Jarak yang ditempuh gelombang per satuan waktu.</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/h8WMGKomBT5zr8vWSvRBKWITLB-73XwUqQSeF342O4WNpLzwPv_kXM-azPXAoyumzRErlUbFGeMJwfV6CTvi6hoCK22sLmJobbMuyBIVAJ1yxd3Vg0CEy93gYbvBbJUip4drfWupFlSxklTrxWMXJg\" alt=\"V=F&lambda; The Wave Equation - YouTube\" width=\"320\" height=\"180.00049257278442\"></p>\n<p dir=\"ltr\"><strong>3. Getaran dan Gelombang Mekanik:</strong></p>\n<p dir=\"ltr\">Hubungan: Getaran pada medium mekanik, seperti pada senar gitar, dapat menciptakan gelombang mekanik yang merambat melalui senar tersebut.</p>\n<p dir=\"ltr\"><strong>4. Sifat Gelombang:</strong></p>\n<p dir=\"ltr\">Amplitudo: Maksimum perpindahan partikel medium dari posisi setimbangnya.</p>\n<p dir=\"ltr\">Frekuensi: Jumlah getaran atau siklus per detik.</p>\n<p dir=\"ltr\">Panjang Gelombang: Jarak antara dua titik berurutan pada gelombang.</p>\n<p dir=\"ltr\"><strong>5. Cahaya sebagai Gelombang Elektromagnetik:</strong></p>\n<p dir=\"ltr\">Spektrum Elektromagnetik: Cahaya merupakan bagian dari spektrum elektromagnetik yang meliputi sinar gamma, sinar-X, ultraviolet, cahaya tampak, inframerah, gelombang mikro, dan gelombang radio.</p>\n<p dir=\"ltr\">Kecepatan Cahaya: Kecepatan cahaya dalam vakum adalah sekitar 3 x 10^8 meter per detik.</p>\n<p dir=\"ltr\"><strong>6. Dualitas Gelombang-Partikel Cahaya:</strong></p>\n<p dir=\"ltr\">Foton: Cahaya dapat dijelaskan sebagai partikel foton, terutama dalam eksperimen cahaya yang menunjukkan sifat korpuskularnya.</p>\n<p dir=\"ltr\"><strong>7. Pembiasan dan Pemantulan Cahaya:</strong></p>\n<p dir=\"ltr\">Pembiasan: Cahaya berubah arah saat memasuki medium dengan kecepatan cahaya yang berbeda.</p>\n<p dir=\"ltr\">Pemantulan: Cahaya memantul dari suatu permukaan, mengikuti hukum pemantulan.</p>\n<p dir=\"ltr\"><strong>8. Pembentukan Warna:</strong></p>\n<p dir=\"ltr\">Pemisahan Warna: Pemisahan warna dalam spektrum cahaya menciptakan warna-warna yang berbeda.</p>\n<p dir=\"ltr\">Pigmen dan Warna: Pigmen dapat menciptakan warna dengan menyerap sebagian cahaya dan memantulkan yang lain.</p>\n<p dir=\"ltr\"><strong>9. Aplikasi Teknologi:</strong></p>\n<p dir=\"ltr\">Fiber Optik: Penggunaan serat kaca untuk mentransmisikan data dalam bentuk sinyal cahaya.</p>\n<p dir=\"ltr\">Mikroskop dan Teleskop: Optika digunakan untuk memperbesar atau mengamati objek yang sangat kecil atau jauh.</p>\n<p dir=\"ltr\">Pencitraan Medis: Penggunaan cahaya dalam teknologi pencitraan medis, seperti MRI dan CT scan.</p>\n<p>&nbsp;</p>",
      "class": {
        "id": "34f932e0-dee6-4afe-b702-f39d29267876",
        "name": "VIII"
      }
    },
    {
      "id": "1f2ba92d-42f5-4ab6-8846-9837054aa4f8",
      "name": "Zat dan Perubahannya",
      "content": "<p dir=\"ltr\"><em>Hai PhysEdu Friends&nbsp;</em></p>\n<p dir=\"ltr\"><em>Kali ini kita akan belajar tentang zat dan perubahannya!!&nbsp;</em></p>\n<p dir=\"ltr\"><strong>Zat</strong> adalah segala sesuatu yang memiliki massa dan menempati ruang. Zat memiliki sifat-sifat yang dapat diukur, seperti massa, volume, wujud, warna, bau, rasa, dan kekentalan.</p>\n<p dir=\"ltr\"><strong>Wujud Zat</strong></p>\n<p dir=\"ltr\">Ada tiga wujud zat, yaitu:</p>\n<p dir=\"ltr\">Padat, Cair, Gas</p>\n<p dir=\"ltr\">Perbedaan ketiga wujud zat ini terletak pada jarak antar partikelnya. Jarak antar partikel zat padat paling rapat, kemudian zat cair, dan paling renggang adalah zat gas.</p>\n<p dir=\"ltr\"><strong>Perubahan Wujud Zat</strong></p>\n<p dir=\"ltr\">Perubahan wujud zat adalah perubahan dari satu wujud zat ke wujud zat lain. Perubahan wujud zat dapat terjadi karena beberapa faktor, yaitu:</p>\n<ul>\n<li dir=\"ltr\">Suhu</li>\n<li dir=\"ltr\">Tekanan</li>\n<li dir=\"ltr\">Campuran</li>\n</ul>\n<p dir=\"ltr\">Berikut adalah beberapa contoh perubahan wujud zat:</p>\n<p dir=\"ltr\"><strong>Perubahan wujud zat membeku</strong></p>\n<p dir=\"ltr\">Membeku&nbsp;adalah perubahan wujud dari cair menjadi padat. Misalnya, air membeku menjadi es.</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/KgueBmGieVvBksFnTgTGS8LbED9v-VXgjeTi13zI_FY8z0ZBtW1SgJcm2zDR4vdC_aMCHJ5aPRBaZ8qBw3KSbriXReYAddzuOeDBxk0ZrjPlSySBMZo5rml3ZW6piNO_dMG99PTWA7Gj\" width=\"624\" height=\"351\">&nbsp;</p>\n<p dir=\"ltr\"><strong>Perubahan wujud zat mencair</strong></p>\n<p dir=\"ltr\">Mencair&nbsp;adalah perubahan wujud dari padat menjadi cair. Misalnya, es mencair menjadi air.</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/VdSPrh6_2c7Kt9krBROj7npgZuXBapyWoY_5YTGwo0TJP2Aj70R1jSOhogMfmFy5TKTcLKr-CuiNcVaRV__VaE4AIShtFyjBO8h_2624pglmzOmwuKMsySU3oYLF7RotLkGGMGCEDKtu\" width=\"624\" height=\"351\"></p>\n<p dir=\"ltr\"><strong>Perubahan wujud zat menguap</strong></p>\n<p dir=\"ltr\">Menguap&nbsp;adalah perubahan wujud dari cair menjadi gas. Misalnya, air mendidih menjadi uap air.</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/-J_Q_mFnZKLL-lY36w5MsiNIZAfF6eqFD5kW_zfqovMkyFs2XlEzAgT9FSUY1BzoigvYNYllBlmt2nsgJ1Ew-3zBoeZIkC8yWVrpOwspaQ5ibE1wxjgG_R2Hl1xc1RAnjjtCDg3yf0mV\" width=\"624\" height=\"351\">&nbsp;</p>\n<p><strong>&nbsp;</strong></p>\n<p dir=\"ltr\"><strong>Perubahan wujud zat mengembun</strong></p>\n<p dir=\"ltr\">Mengembun&nbsp;adalah perubahan wujud dari gas menjadi cair. Misalnya, uap air di udara mengembun menjadi embun.</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/dhXnCHW5dfj-c_z2vlRoBv_X75ggKTa7gqVzBRKCqJ4_iaqCe6IjtSKOsQrAeHFm7IBgXxtCYnecSF0_Frg660Ir3laQnpv0EvIqBakKcFlC671oOssYNwPZfLg82PyHiWyBDzB6xwrm\" width=\"624\" height=\"351\">&nbsp;</p>\n<p dir=\"ltr\"><strong>Perubahan wujud zat menyublim</strong></p>\n<p dir=\"ltr\">Menyublim&nbsp;adalah perubahan wujud dari padat menjadi gas tanpa melalui wujud cair. Misalnya, kapur barus menyublim menjadi gas.</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/RvQjNanH3h5gCSI8m7IVhzlz4Cfq5yc2hR7-936YPA30RuHzRKvwR51BRBpHKGxVfWUHSDaGNbkaHND-DEJxvS9VlWZ0XW7E6Fn9FsrjD4rQk2f8H7UjSW1qjndxsmxgUQYPtPOrG5My\" width=\"624\" height=\"351\">&nbsp;</p>\n<p dir=\"ltr\"><strong>Perubahan wujud zat mengkristal</strong></p>\n<p dir=\"ltr\">Mengkristal&nbsp;adalah perubahan wujud dari gas menjadi padat. Misalnya, uap air di udara mengkristal menjadi salju.</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/MOgK23PxcIh4JkRQ1QWQQsbMTATp-AMpcFfaJYDoGZV2lFt4MNvPzesl9CP4lZDOumtmpHr0ZndUcJypP0jT4siqDpoQ9J1Qdn3NvCKXM-Kf4aGgxRp8d7vFP3xoN85RsX-lF1nCmk2v\" width=\"624\" height=\"351\">&nbsp;</p>\n<p dir=\"ltr\"><strong>Perubahan Kimia</strong></p>\n<p dir=\"ltr\">Perubahan kimia adalah perubahan zat yang menghasilkan zat baru dengan sifat yang berbeda dari zat asalnya. Perubahan kimia ditandai dengan adanya reaksi kimia, yaitu proses perubahan zat menjadi zat lain.</p>\n<p dir=\"ltr\">Berikut adalah beberapa contoh perubahan kimia:</p>\n<ul>\n<li dir=\"ltr\">Pembakaran&nbsp;adalah perubahan zat yang menghasilkan gas karbon dioksida dan uap air. Misalnya, pembakaran kayu menghasilkan gas karbon dioksida dan uap air.</li>\n<li dir=\"ltr\">Perubahan kimia pembakaran</li>\n<li dir=\"ltr\">Pelapukan&nbsp;adalah perubahan zat yang disebabkan oleh reaksi kimia dengan udara dan air. Misalnya, pelapukan besi disebabkan oleh reaksi kimia antara besi dengan oksigen di udara.</li>\n<li dir=\"ltr\">Perubahan kimia pelapukan</li>\n<li dir=\"ltr\">Penguapan&nbsp;adalah perubahan zat yang disebabkan oleh reaksi kimia dengan air. Misalnya, penguapan garam disebabkan oleh reaksi kimia antara garam dengan air.</li>\n<li>&nbsp;</li>\n</ul>",
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
Endpoint : POST http://34.87.40.161:5000/api/materials/:id

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "message": "data materials with id 317e2be7-afd5-4a7b-bc21-8d82107be697 found",
  "material": {
    "id": "317e2be7-afd5-4a7b-bc21-8d82107be697",
    "name": "Cahaya dan Alat Optik ",
    "content": "<p dir=\"ltr\"><em>Hai PhysEdu Friends&nbsp;</em></p>\n<p dir=\"ltr\"><em>Kali ini kita akan belajar tentang Cahaya dan Alat Optik!!</em></p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/G47XEowggKq8XLd9G0wGu4ewB5nazTnh76mmT9y9fMvM684zgoiuRy12EFLbHEApXfGAlXZUF3ZwlBrBUdesF0J6_ghzVAyJzu5WPPwyWgeHmH3_L76NBfveuUBdSQteGvZVgQM-mdoGTx-EKSpTlw\" alt=\"Alat Optik | Quizizz\" width=\"624\" height=\"367.3306908607483\"></p>\n<p dir=\"ltr\"><strong>1. Cahaya:</strong></p>\n<p dir=\"ltr\">Definisi Cahaya: Cahaya adalah bentuk energi elektromagnetik yang dapat dilihat oleh mata manusia.</p>\n<p dir=\"ltr\">Kecepatan Cahaya: Kecepatan cahaya adalah sekitar 3 x 108 meter per detik di vakum.</p>\n<p dir=\"ltr\"><strong>2. Sifat Cahaya:</strong></p>\n<p dir=\"ltr\">Sifat &ndash; sifat cahaya ada 4 yaitu merambat lurus, dapat dipantulkan, dapat dibiaskan dan merupakan gelombang elektromagnetik.</p>\n<p dir=\"ltr\">Dualitas Gelombang-Partikel: Cahaya memiliki sifat sebagai gelombang dan partikel (foton).</p>\n<p dir=\"ltr\">Pembiasan Cahaya: Cahaya mengalami pembiasan saat melewati medium dengan kecepatan yang berbeda.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/X6lZ_vn7-nYe_RM-utHgCjOlnxFf_Fopbq4C1qkn4SelUx27vIi6dSMy-06O51I0rqVgUw6ikYQXdBtAk3zxHiCJ4chzGwP3gLd8DihpCytes-j5BnbIHURAvnc3tnfW-cR3yRxwQe2abKhfneS7OA\" width=\"624\" height=\"301\"></p>\n<p dir=\"ltr\"><strong>3. Warna dan Spektrum Cahaya:</strong></p>\n<p dir=\"ltr\">Pemisahan Warna: Pemisahan warna cahaya terjadi pada prisma atau melalui fenomena pembiasan.</p>\n<p dir=\"ltr\">Spektrum Cahaya Tampak: Merupakan rentang warna yang dapat dilihat manusia, dari merah hingga ungu.</p>\n<p dir=\"ltr\">Berdasar frekuensinya, gelombang elektromagnetik ada banyak jenis yang disebut spektrum elektromagnetik. Berikut jenis &ndash; jenis spektrum elektromagnetik :</p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/rT8XbVj_dz-SD5WM23v7nkjdfwswjF6Hm-w_FlyDPoay9y7XbucD4u121Kmiol3WTvs6ghzXnnU4Ah5_6oU9JiPdcUb2aw4SzyqvjpaqRHpRXDF4MwoaaHB2Czo3lmMFbgu5gwPXSjgk0YemJwL7WQ\" alt=\"spektrum elektromagnetik\" width=\"624\" height=\"507\"></p>\n<p dir=\"ltr\"><strong>4. Refleksi dan Pembiasan:</strong></p>\n<p dir=\"ltr\">Hukum Refleksi: Cahaya memantul sesuai dengan hukum refleksi, di mana sudut datang sama dengan sudut pantul.</p>\n<p dir=\"ltr\">Pembiasan Cahaya: Terjadi ketika cahaya melewati antarmuka dua medium dengan kecepatan cahaya yang berbeda.</p>\n<p dir=\"ltr\"><strong>5. Alat Optik:</strong></p>\n<p dir=\"ltr\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/qVlSdGgwquOv2nYOV8RfN99wmdonHhqwW570_3MVemlnsZ-HW3MhwheZKLLpzt7nHSmgXSsjottb_QMjfl7AEPlRvGBWZipXADFkgyvUqza5FtpFpWL1QcsDKzbKdG3TxCe5mStbqGIyPkqWbA_FNA\" width=\"402.00181770324707\" height=\"261\"></p>\n<ul>\n<li dir=\"ltr\">Mikroskop: Alat optik yang digunakan untuk melihat objek yang sangat kecil dengan memperbesar gambar.</li>\n<li dir=\"ltr\">Teleskop: Alat optik yang digunakan untuk melihat objek yang sangat jauh di luar angkasa.</li>\n<li dir=\"ltr\">Kacamata dan Lensa Pembesar: Digunakan untuk memperbaiki atau memperbesar penglihatan manusia.</li>\n<li dir=\"ltr\">Proyektor: Menggunakan lensa untuk memproyeksikan gambar dari sumber cahaya ke layar.</li>\n</ul>\n<p dir=\"ltr\"><strong>6. Lensa dan Pembentukan Gambar:</strong></p>\n<p dir=\"ltr\">Jenis Lensa: Lensa dapat menjadi konvergen (membuat sinar cahaya berkumpul) atau divergen (membuat sinar cahaya menjauh).</p>\n<p dir=\"ltr\">Pembentukan Gambar oleh Lensa: Lensa dapat membentuk gambar nyata atau virtual tergantung pada posisi objek dan lensa.</p>\n<p dir=\"ltr\">&nbsp;<img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://lh7-us.googleusercontent.com/t2UT6bTFc8SrNeiS8XFIkdKri8ZSMgzCWsonRCU1jyKGswq0GT3kf1frXoKLkGJpF6_2S-9c8r1pOgDTBdI7j81PbuND9pk-AEqLlEgNLk2jcaS5avvVIRio_MGI2UOP1oYz22wqOfXD\" width=\"199\" height=\"311\"></p>\n<p dir=\"ltr\"><strong>7. Aplikasi Cahaya dalam Teknologi:</strong></p>\n<ul>\n<li dir=\"ltr\">Fiber Optik: Digunakan untuk mentransmisikan data dalam bentuk sinyal cahaya dengan kecepatan tinggi.</li>\n<li dir=\"ltr\">Sensor Cahaya: Digunakan dalam berbagai perangkat elektronik, seperti kamera dan sensor otomatisasi.</li>\n<li dir=\"ltr\">Holografi: Teknik yang menggunakan cahaya untuk menciptakan gambar tiga dimensi.</li>\n<li>&nbsp;</li>\n</ul>",
    "class": {
      "id": "34f932e0-dee6-4afe-b702-f39d29267876",
      "name": "VIII"
    }
  }
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