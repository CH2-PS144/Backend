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

# Get All Data Quiz Api

Endpoint : GET http://34.87.40.161:5000/api/quiz


Headers :


- Authorization : token


Response Body Success :

```json

{
  "code": 200,
  "status": "success",
  "quiz": [
    {
      "id": "02bb818a-a947-4f80-aa93-49340afffe71",
      "questions": "Usaha yang diperlukan untuk mengangkat vertikal sebuah tas 2 kg sejauh 1,5 adalah…. ",
      "answer": [
        {
          "option": "A",
          "value": "50 J "
        },
        {
          "option": "B",
          "value": " 30 J "
        },
        {
          "option": "C",
          "value": " 25 J "
        },
        {
          "option": "D",
          "value": "15 J "
        }
      ],
      "material": {
        "id": "a4c94013-4bf5-468a-91dc-bd3d773fe11d",
        "name": "Usaha, Energi, dan Pesawat Sederhana"
      }
    },
    {
      "id": "09d801cb-7dda-4f93-8751-790e28323e3f",
      "questions": "Apa yang dimaksud dengan hukum Ohm?",
      "answer": [
        {
          "option": "A",
          "value": "V=I×R"
        },
        {
          "option": "B",
          "value": "I=RV​"
        },
        {
          "option": "C",
          "value": "R=IV​"
        },
        {
          "option": "D",
          "value": "Semua jawaban benar"
        }
      ],
      "material": {
        "id": "da1417f5-5ccc-4e9b-9d17-3e7577eaa5c7",
        "name": "Listrik Dinamis"
      }
    },
    {
      "id": "0c93f348-50a2-4490-9383-a9ecf6949a85",
      "questions": "Apa yang menyebabkan benda menjadi magnet?",
      "answer": [
        {
          "option": "A",
          "value": " Panas"
        },
        {
          "option": "B",
          "value": "Gesekan"
        },
        {
          "option": "C",
          "value": "Arus listrik"
        },
        {
          "option": "D",
          "value": "Cahaya"
        }
      ],
      "material": {
        "id": "e419af71-61cb-45bf-ad41-6277fa557dba",
        "name": "Kemagnetan"
      }
    },
    {
      "id": "0d2da8ed-cc30-49a3-a701-43ab79d98595",
      "questions": "Apa yang merupakan perubahan fisik pada suatu zat?",
      "answer": [
        {
          "option": "A",
          "value": "Pembakaran"
        },
        {
          "option": "B",
          "value": "Pencampuran garam dalam air"
        },
        {
          "option": "C",
          "value": "Pemotongan kertas"
        },
        {
          "option": "D",
          "value": "Reaksi asam-basa"
        }
      ],
      "material": {
        "id": "1f2ba92d-42f5-4ab6-8846-9837054aa4f8",
        "name": "Zat dan Perubahannya"
      }
    },
    {
      "id": "12b807d5-1c5b-4717-82e6-b92c063bf60e",
      "questions": "Sebuah kumparan berbentuk lingkaran memiliki 100 lilitan dan dialiri arus 2A. Jika panjang lintasan di sekeliling kumparan adalah 0.2m dan permeabilitas magnetik vakum adalah 4π×10−7T⋅m/A, berapa besar medan magnetik di sekitar kumparan?",
      "answer": [
        {
          "option": "A",
          "value": "0.4T"
        },
        {
          "option": "B",
          "value": "0.8T"
        },
        {
          "option": "C",
          "value": "1.6T"
        },
        {
          "option": "D",
          "value": "2.0T"
        }
      ],
      "material": {
        "id": "e419af71-61cb-45bf-ad41-6277fa557dba",
        "name": "Kemagnetan"
      }
    },
    {
      "id": "136ab8ad-de63-47d0-ade8-b3c5e4c4b788",
      "questions": "Mana dari berikut yang merupakan definisi kalor?",
      "answer": [
        {
          "option": "A",
          "value": "Satuan suhu"
        },
        {
          "option": "B",
          "value": "Energi panas yang dipindahkan antar dua sistem karena perbedaan suhu"
        },
        {
          "option": "C",
          "value": "Jumlah partikel dalam suatu benda"
        },
        {
          "option": "D",
          "value": "Panjang suatu benda"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    },
    {
      "id": "1c20fac2-6b76-47c1-b2f8-86617bc13e7f",
      "questions": "Apa yang terjadi ketika cahaya melewati sebuah lensa konvergen?",
      "answer": [
        {
          "option": "A",
          "value": "Difusi"
        },
        {
          "option": "B",
          "value": "Pemantulan total"
        },
        {
          "option": "C",
          "value": "Penyebaran cahaya"
        },
        {
          "option": "D",
          "value": "Berkumpul pada titik fokus"
        }
      ],
      "material": {
        "id": "317e2be7-afd5-4a7b-bc21-8d82107be697",
        "name": "Cahaya dan Alat Optik "
      }
    },
    {
      "id": "2267e382-c164-444c-b825-e39a85a61852",
      "questions": "Dua buah benda diketahui memiliki muatan 1 x 10-6 C dan 3 x 10-6 C dan di antara keduanya terdapat jarak 30 cm. Dengan kondisi tersebut, gaya yang dialami oleh kedua muatan tersebut adalah … ",
      "answer": [
        {
          "option": "A",
          "value": "3 N"
        },
        {
          "option": "B",
          "value": "6 N"
        },
        {
          "option": "C",
          "value": "9 N"
        },
        {
          "option": "D",
          "value": "0,3 N"
        }
      ],
      "material": {
        "id": "e9c76a51-1481-44e7-b580-c8ae38b4472d",
        "name": "Listrik Statis"
      }
    },
    {
      "id": "27c7ca65-b698-4c37-9395-0b1dab4769fc",
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
          "value": "kesalahan mutlak"
        },
        {
          "option": "D",
          "value": "kesalahan relatif"
        }
      ],
      "material": {
        "id": "8753125f-dda7-46ad-a894-2e32e2c7aafc",
        "name": "Besaran dan Pengukuran"
      }
    },
    {
      "id": "2956333e-034e-4e4d-be9b-bd5963f1a5c3",
      "questions": "Apa yang menyebabkan terjadinya siang dan malam di Bumi?",
      "answer": [
        {
          "option": "A",
          "value": "Rotasi Bumi pada sumbunya"
        },
        {
          "option": "B",
          "value": "Revolusi Bumi mengelilingi Matahari"
        },
        {
          "option": "C",
          "value": "Gerhana Matahari"
        },
        {
          "option": "D",
          "value": "Rotasi Matahari"
        }
      ],
      "material": {
        "id": "c16d3c2c-3bba-4801-80e1-d2bbc3a3d2f8",
        "name": "Bumi dan Tata Surya"
      }
    },
    {
      "id": "34ea5137-30a0-405d-98f1-1c6b4d115846",
      "questions": "Jika arus listrik (I) adalah 2A dan hambatan (R) adalah 3Ω, berapakah tegangan (V)?",
      "answer": [
        {
          "option": "A",
          "value": "6V"
        },
        {
          "option": "B",
          "value": "2V"
        },
        {
          "option": "C",
          "value": "1.5V"
        },
        {
          "option": "D",
          "value": "5V"
        }
      ],
      "material": {
        "id": "da1417f5-5ccc-4e9b-9d17-3e7577eaa5c7",
        "name": "Listrik Dinamis"
      }
    },
    {
      "id": "38257b12-ac3c-448f-8d20-cd91de50b05e",
      "questions": "Pernyataan yang menggambarkan perubahan kimia adalah?",
      "answer": [
        {
          "option": "A",
          "value": "Es yang mencair menjadi air"
        },
        {
          "option": "B",
          "value": "Pemisahan air dan minyak"
        },
        {
          "option": "C",
          "value": "Pembakaran kayu"
        },
        {
          "option": "D",
          "value": "Pemisahan garam dan pasir"
        }
      ],
      "material": {
        "id": "1f2ba92d-42f5-4ab6-8846-9837054aa4f8",
        "name": "Zat dan Perubahannya"
      }
    },
    {
      "id": "3a4df0b8-2adf-41e3-9d8a-d20a5f0fdaa1",
      "questions": "Satuan massa dalam sistem internasional adalah ...",
      "answer": [
        {
          "option": "A",
          "value": "kg"
        },
        {
          "option": "B",
          "value": "m"
        },
        {
          "option": "C",
          "value": "s"
        },
        {
          "option": "D",
          "value": " A"
        }
      ],
      "material": {
        "id": "8753125f-dda7-46ad-a894-2e32e2c7aafc",
        "name": "Besaran dan Pengukuran"
      }
    },
    {
      "id": "43cc97eb-13ce-4c9a-8fbb-b9b33869c630",
      "questions": "Sebuah kotak kayu terletak di lantai datar didorong dengan gaya 50 N. Kotak itu bergeser sejauh 4 m. Besar usaha yang dilakukan gaya tersebut adalah…",
      "answer": [
        {
          "option": "A",
          "value": "20 J "
        },
        {
          "option": "B",
          "value": "40 J"
        },
        {
          "option": "C",
          "value": " 80 J "
        },
        {
          "option": "D",
          "value": "200 J "
        }
      ],
      "material": {
        "id": "a4c94013-4bf5-468a-91dc-bd3d773fe11d",
        "name": "Usaha, Energi, dan Pesawat Sederhana"
      }
    },
    {
      "id": "44632e53-c028-4aee-bc86-1313e4da2deb",
      "questions": "Berapa nilai perbesaran (m) suatu lensa dengan panjang fokus 10 cm dan objek diletakkan pada jarak 5cm dari lensa?",
      "answer": [
        {
          "option": "A",
          "value": " -0.5"
        },
        {
          "option": "B",
          "value": "-2"
        },
        {
          "option": "C",
          "value": "0.5"
        },
        {
          "option": "D",
          "value": "2"
        }
      ],
      "material": {
        "id": "317e2be7-afd5-4a7b-bc21-8d82107be697",
        "name": "Cahaya dan Alat Optik "
      }
    },
    {
      "id": "4d1f1aff-1ce9-49a5-8897-71d060a89765",
      "questions": "Pertanyaan: Jika arus listrik 5A mengalir selama 10s, berapakah jumlah muatan yang telah lewat?",
      "answer": [
        {
          "option": "A",
          "value": "5C"
        },
        {
          "option": "B",
          "value": "10C"
        },
        {
          "option": "C",
          "value": "50C"
        },
        {
          "option": "D",
          "value": "15C"
        }
      ],
      "material": {
        "id": "da1417f5-5ccc-4e9b-9d17-3e7577eaa5c7",
        "name": "Listrik Dinamis"
      }
    },
    {
      "id": "56f1ae64-6cb1-40d3-a454-86a34f325a42",
      "questions": "Sebuah benda dilempar vertikal ke atas dengan kecepatan awal 30 m/s. Jika percepatan gravitasi bumi adalah 10 m/s², berapa waktu yang diperlukan benda tersebut untuk mencapai titik tertinggi?",
      "answer": [
        {
          "option": "A",
          "value": "3 s"
        },
        {
          "option": "B",
          "value": " 6 s"
        },
        {
          "option": "C",
          "value": "9 s"
        },
        {
          "option": "D",
          "value": "12 s"
        }
      ],
      "material": {
        "id": "46138f26-67d8-4d51-a25b-ccdccedb4fb5",
        "name": "Gerak dan Gaya"
      }
    },
    {
      "id": "5ee48d7e-c370-4eaa-8f7e-8d12b637be3d",
      "questions": "Energi sebesar 10 Joule diperlukan untuk memindahkan muatan 50 C. Berapakah energi potensialnya?",
      "answer": [
        {
          "option": "A",
          "value": "50 V"
        },
        {
          "option": "B",
          "value": "100 V"
        },
        {
          "option": "C",
          "value": "0,2 V"
        },
        {
          "option": "D",
          "value": "0,3 V"
        }
      ],
      "material": {
        "id": "e9c76a51-1481-44e7-b580-c8ae38b4472d",
        "name": "Listrik Statis"
      }
    },
    {
      "id": "62740418-98e4-497c-8c27-46490965f2a7",
      "questions": "Sebuah peti didorong dengan kekuatan 500 newton dan berpindah sejauh 4 meter, usaha yang dilakukan peti tersebut adalah … J. ",
      "answer": [
        {
          "option": "A",
          "value": "20 "
        },
        {
          "option": "B",
          "value": "200 "
        },
        {
          "option": "C",
          "value": "2000 "
        },
        {
          "option": "D",
          "value": "20.000 "
        }
      ],
      "material": {
        "id": "a4c94013-4bf5-468a-91dc-bd3d773fe11d",
        "name": "Usaha, Energi, dan Pesawat Sederhana"
      }
    },
    {
      "id": "62af28df-8aaa-4b95-a870-398c1b3ad220",
      "questions": "Bagaimana amplitudo gelombang mempengaruhi tinggi suara gelombang suara?",
      "answer": [
        {
          "option": "A",
          "value": "Semakin besar amplitudo, semakin tinggi suara"
        },
        {
          "option": "B",
          "value": " Semakin kecil amplitudo, semakin tinggi suara"
        },
        {
          "option": "C",
          "value": "Tidak ada pengaruh amplitudo terhadap tinggi suara"
        },
        {
          "option": "D",
          "value": "Amplitudo hanya mempengaruhi warna suara"
        }
      ],
      "material": {
        "id": "0d036737-a2b8-492a-8322-44255b0943eb",
        "name": "Getaran, Gelombang dan Cahaya"
      }
    },
    {
      "id": "665a8fd4-94a5-4690-a1e7-beafb2dba4b1",
      "questions": "Massa jenis (densitas) suatu zat dihitung dengan rumus?",
      "answer": [
        {
          "option": "A",
          "value": "Massa/Jumlah atom"
        },
        {
          "option": "B",
          "value": "Massa/Variasi fisik"
        },
        {
          "option": "C",
          "value": "Massa/Volume"
        },
        {
          "option": "D",
          "value": "Volume/Jumlah molekul"
        }
      ],
      "material": {
        "id": "1f2ba92d-42f5-4ab6-8846-9837054aa4f8",
        "name": "Zat dan Perubahannya"
      }
    },
    {
      "id": "676bfec6-32cf-4bd3-8a21-174f93727ae5",
      "questions": "Jarak yang ditempuh oleh mobil saat melaju dengan usaha sebesar 40.000 J dan gaya sebesar 400 N adalah … m.",
      "answer": [
        {
          "option": "A",
          "value": "1 "
        },
        {
          "option": "B",
          "value": " 10 "
        },
        {
          "option": "C",
          "value": "100"
        },
        {
          "option": "D",
          "value": "1000 "
        }
      ],
      "material": {
        "id": "a4c94013-4bf5-468a-91dc-bd3d773fe11d",
        "name": "Usaha, Energi, dan Pesawat Sederhana"
      }
    },
    {
      "id": "706f5e56-5b76-47c9-9f57-15ebc9341174",
      "questions": "Berapa jumlah planet yang mengelilingi Matahari dalam Tata Surya kita?",
      "answer": [
        {
          "option": "A",
          "value": "5"
        },
        {
          "option": "B",
          "value": "7"
        },
        {
          "option": "C",
          "value": "8"
        },
        {
          "option": "D",
          "value": "10"
        }
      ],
      "material": {
        "id": "c16d3c2c-3bba-4801-80e1-d2bbc3a3d2f8",
        "name": "Bumi dan Tata Surya"
      }
    },
    {
      "id": "711b90b0-5e2f-4168-8782-34f075043a98",
      "questions": "Proses perpindahan panas melalui kontak langsung antara partikel-partikel benda disebut?",
      "answer": [
        {
          "option": "A",
          "value": "Konduksi"
        },
        {
          "option": "B",
          "value": "Konveksi"
        },
        {
          "option": "C",
          "value": "Radiasi"
        },
        {
          "option": "D",
          "value": "Kondensasi"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    },
    {
      "id": "813b5956-ef15-428c-b015-dace971f18c4",
      "questions": "Sebuah mobil bergerak lurus dengan kecepatan konstan sebesar 20 m/s selama 40 detik. Berapa jarak yang ditempuh mobil tersebut?",
      "answer": [
        {
          "option": "A",
          "value": " 400 m"
        },
        {
          "option": "B",
          "value": "600 m"
        },
        {
          "option": "C",
          "value": "800 m"
        },
        {
          "option": "D",
          "value": "1000 m"
        }
      ],
      "material": {
        "id": "46138f26-67d8-4d51-a25b-ccdccedb4fb5",
        "name": "Gerak dan Gaya"
      }
    },
    {
      "id": "9232b1e4-008e-4e92-bcc0-cd861556d857",
      "questions": "Sebuah kawat konduktor berada di dalam medan magnet yang stabil. Jika luas permukaan lintasan kawat tersebut adalah 0.02m2 dan fluks magnetiknya berkurang sebesar 0.1T⋅m2 dalam waktu 0.5detik, berapa besar EMK yang dihasilkan?",
      "answer": [
        {
          "option": "A",
          "value": "0.2V"
        },
        {
          "option": "B",
          "value": "0.1V"
        },
        {
          "option": "C",
          "value": "−0.1V"
        },
        {
          "option": "D",
          "value": "−0.2V"
        }
      ],
      "material": {
        "id": "e419af71-61cb-45bf-ad41-6277fa557dba",
        "name": "Kemagnetan"
      }
    },
    {
      "id": "9320635c-92ed-445b-88d2-4d8e5ff45bd1",
      "questions": "Jika sebuah solenoid dibungkus oleh kawat dan dialiri arus listrik, apa yang akan terjadi?",
      "answer": [
        {
          "option": "A",
          "value": "Solenoid menjadi magnet"
        },
        {
          "option": "B",
          "value": "Solenoid menjadi panas"
        },
        {
          "option": "C",
          "value": "Solenoid menghilang"
        },
        {
          "option": "D",
          "value": "Solenoid menjadi ringan"
        }
      ],
      "material": {
        "id": "e419af71-61cb-45bf-ad41-6277fa557dba",
        "name": "Kemagnetan"
      }
    },
    {
      "id": "9df5ddf0-bd73-462d-8275-ef43a8bde400",
      "questions": "Pertanyaan: Sebuah baterai memberikan tegangan 12 V pada rangkaian dengan hambatan 4Ω. Berapakah besar arus yang mengalir?",
      "answer": [
        {
          "option": "A",
          "value": "3A"
        },
        {
          "option": "B",
          "value": "4A"
        },
        {
          "option": "C",
          "value": " 2A"
        },
        {
          "option": "D",
          "value": "1A"
        }
      ],
      "material": {
        "id": "da1417f5-5ccc-4e9b-9d17-3e7577eaa5c7",
        "name": "Listrik Dinamis"
      }
    },
    {
      "id": "9ec167ab-52be-4d38-8a95-19af642b42a0",
      "questions": "Berikut ini yang menunjukan keadaan pada benda bermuatan listrik negatif yang benar adalah …",
      "answer": [
        {
          "option": "A",
          "value": "tidak ada proton"
        },
        {
          "option": "B",
          "value": "jumlah elektron < jumlah proton"
        },
        {
          "option": "C",
          "value": " jumlah elektron > jumlah proton"
        },
        {
          "option": "D",
          "value": "jumlah elektron = jumlah proton"
        }
      ],
      "material": {
        "id": "e9c76a51-1481-44e7-b580-c8ae38b4472d",
        "name": "Listrik Statis"
      }
    },
    {
      "id": "a8647504-2f05-473d-85cf-9a6f73b83c46",
      "questions": "Sebuah cermin cekung memiliki jari-jari lengkung 20cm. Berapakah panjang fokus cermin tersebut?",
      "answer": [
        {
          "option": "A",
          "value": "-20 cm"
        },
        {
          "option": "B",
          "value": "20 cm"
        },
        {
          "option": "C",
          "value": "-10 cm"
        },
        {
          "option": "D",
          "value": "10 cm"
        }
      ],
      "material": {
        "id": "317e2be7-afd5-4a7b-bc21-8d82107be697",
        "name": "Cahaya dan Alat Optik "
      }
    },
    {
      "id": "a8dce87a-ea3c-4ea2-9e02-a2e9edbb49d6",
      "questions": "Sebuah mobil dengan massa 1000 kg melaju dengan kecepatan 20 m/s. Jika gaya geseknya adalah 500 N, berapa percepatan mobil tersebut?",
      "answer": [
        {
          "option": "A",
          "value": "2 m/s²"
        },
        {
          "option": "B",
          "value": "4 m/s²"
        },
        {
          "option": "C",
          "value": "6 m/s²"
        },
        {
          "option": "D",
          "value": "8 m/s²"
        }
      ],
      "material": {
        "id": "46138f26-67d8-4d51-a25b-ccdccedb4fb5",
        "name": "Gerak dan Gaya"
      }
    },
    {
      "id": "aa0e77a2-83a2-412c-997c-353b87047983",
      "questions": "Ketika benda memanjang karena perubahan suhu, fenomena ini disebut?",
      "answer": [
        {
          "option": "A",
          "value": "Pemuaian panjang"
        },
        {
          "option": "B",
          "value": "Pemuaian luas"
        },
        {
          "option": "C",
          "value": "Pemuaian volume"
        },
        {
          "option": "D",
          "value": "Pemuaian massa"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    },
    {
      "id": "ab9df064-e484-40ec-b406-0bae2b0e94e5",
      "questions": "Sebuah benda dengan massa 5 kg ditarik oleh gaya sebesar 20 N. Berapakah percepatan benda tersebut?",
      "answer": [
        {
          "option": "A",
          "value": "2 m/s²"
        },
        {
          "option": "B",
          "value": "4 m/s²"
        },
        {
          "option": "C",
          "value": "6 m/s²"
        },
        {
          "option": "D",
          "value": "8 m/s²"
        }
      ],
      "material": {
        "id": "46138f26-67d8-4d51-a25b-ccdccedb4fb5",
        "name": "Gerak dan Gaya"
      }
    },
    {
      "id": "aedf9f53-b3e2-475c-939f-104331dc752e",
      "questions": "Jika frekuensi suatu gelombang adalah 550 Hz, berapakah perioda gelombang tersebut? ",
      "answer": [
        {
          "option": "A",
          "value": "0.02 s"
        },
        {
          "option": "B",
          "value": "0.04 s"
        },
        {
          "option": "C",
          "value": "0.2 s"
        },
        {
          "option": "D",
          "value": "2 s"
        }
      ],
      "material": {
        "id": "0d036737-a2b8-492a-8322-44255b0943eb",
        "name": "Getaran, Gelombang dan Cahaya"
      }
    },
    {
      "id": "bca6d522-227f-4f8b-90c0-4eba292c581a",
      "questions": "Suatu gaya sebesar 300 N bekerja pada sebuah benda sehingga berpindah sejauh 10 meter. Besar usaha yang dilakukan benda adalah….",
      "answer": [
        {
          "option": "A",
          "value": "3000 joule "
        },
        {
          "option": "B",
          "value": "300 joule"
        },
        {
          "option": "C",
          "value": "30 joule"
        },
        {
          "option": "D",
          "value": "3 joule "
        }
      ],
      "material": {
        "id": "a4c94013-4bf5-468a-91dc-bd3d773fe11d",
        "name": "Usaha, Energi, dan Pesawat Sederhana"
      }
    },
    {
      "id": "c0ec759e-c472-4618-8034-7fe7c394c1e5",
      "questions": "Planet manakah yang memiliki cincin yang terlihat dari Bumi?",
      "answer": [
        {
          "option": "A",
          "value": "Mars"
        },
        {
          "option": "B",
          "value": "Jupiter"
        },
        {
          "option": "C",
          "value": "Saturnus"
        },
        {
          "option": "D",
          "value": "Uranus"
        }
      ],
      "material": {
        "id": "c16d3c2c-3bba-4801-80e1-d2bbc3a3d2f8",
        "name": "Bumi dan Tata Surya"
      }
    },
    {
      "id": "cdc291e6-179f-4273-9319-31bf1e0d0bb0",
      "questions": "Sebuah getaran memiliki frekuensi 100Hz. Berapa perioda dari getaran tersebut?",
      "answer": [
        {
          "option": "A",
          "value": "0.01 s"
        },
        {
          "option": "B",
          "value": " 0.1 s"
        },
        {
          "option": "C",
          "value": "1 s"
        },
        {
          "option": "D",
          "value": "10 s"
        }
      ],
      "material": {
        "id": "0d036737-a2b8-492a-8322-44255b0943eb",
        "name": "Getaran, Gelombang dan Cahaya"
      }
    },
    {
      "id": "d02f092f-518c-4509-b79e-755baac4f7e1",
      "questions": "Pertanyaan: Jika sebuah resistor memiliki hambatan 8Ω dan arus 2A mengalir melaluinya, berapakah daya yang dihasilkan?",
      "answer": [
        {
          "option": "A",
          "value": "4W"
        },
        {
          "option": "B",
          "value": "16W"
        },
        {
          "option": "C",
          "value": "10W"
        },
        {
          "option": "D",
          "value": "20W"
        }
      ],
      "material": {
        "id": "da1417f5-5ccc-4e9b-9d17-3e7577eaa5c7",
        "name": "Listrik Dinamis"
      }
    },
    {
      "id": "d4208550-f111-4f81-a85c-c2395356998d",
      "questions": "Apa yang dimaksud dengan ekliptika?",
      "answer": [
        {
          "option": "A",
          "value": "Pusat Tata Surya"
        },
        {
          "option": "B",
          "value": "Bidang di mana planet-planet mengorbit Matahari"
        },
        {
          "option": "C",
          "value": "Kutub magnetik Bumi"
        },
        {
          "option": "D",
          "value": "Garis khatulistiwa"
        }
      ],
      "material": {
        "id": "c16d3c2c-3bba-4801-80e1-d2bbc3a3d2f8",
        "name": "Bumi dan Tata Surya"
      }
    },
    {
      "id": "d7233093-52dc-4b81-aab3-efa3b4aeb792",
      "questions": "Alat yang digunakan untuk mengukur waktu adalah ...",
      "answer": [
        {
          "option": "A",
          "value": "mistar"
        },
        {
          "option": "B",
          "value": " neraca"
        },
        {
          "option": "C",
          "value": "stopwatch"
        },
        {
          "option": "D",
          "value": "amperemeter"
        }
      ],
      "material": {
        "id": "8753125f-dda7-46ad-a894-2e32e2c7aafc",
        "name": "Besaran dan Pengukuran"
      }
    },
    {
      "id": "da82a669-b18e-446e-b5a6-f8b67e01755b",
      "questions": "Sebutkan bagian dari Inti atom! ",
      "answer": [
        {
          "option": "A",
          "value": "proton dan neutron"
        },
        {
          "option": "B",
          "value": "proton, elektron, dan neutron"
        },
        {
          "option": "C",
          "value": "proton dan elektron"
        },
        {
          "option": "D",
          "value": "elektron dan neutron"
        }
      ],
      "material": {
        "id": "e9c76a51-1481-44e7-b580-c8ae38b4472d",
        "name": "Listrik Statis"
      }
    },
    {
      "id": "dde05812-add9-41a4-a054-289e95144d10",
      "questions": "Sebuah mobil melaju dengan kecepatan awal 10 m/s dan mengalami percepatan sebesar 2 m/s². Berapa kecepatan mobil setelah 8 detik?",
      "answer": [
        {
          "option": "A",
          "value": "10 m/s"
        },
        {
          "option": "B",
          "value": "18 m/s"
        },
        {
          "option": "C",
          "value": "26 m/s"
        },
        {
          "option": "D",
          "value": "34 m/s"
        }
      ],
      "material": {
        "id": "46138f26-67d8-4d51-a25b-ccdccedb4fb5",
        "name": "Gerak dan Gaya"
      }
    },
    {
      "id": "de5bb548-2538-44ca-8e32-01aeca787096",
      "questions": "Apa yang dimaksud dengan revolusi Bumi?",
      "answer": [
        {
          "option": "A",
          "value": "Putaran Bumi pada sumbunya"
        },
        {
          "option": "B",
          "value": "Gerakan Bumi mengelilingi Matahari"
        },
        {
          "option": "C",
          "value": "Perubahan musim"
        },
        {
          "option": "D",
          "value": " Rotasi Bumi"
        }
      ],
      "material": {
        "id": "c16d3c2c-3bba-4801-80e1-d2bbc3a3d2f8",
        "name": "Bumi dan Tata Surya"
      }
    },
    {
      "id": "e03643b5-c00c-4a43-bca2-e7ddb95ec8cf",
      "questions": "Apa yang menyebabkan magnet memiliki dua kutub, yaitu kutub utara dan kutub selatan?",
      "answer": [
        {
          "option": "A",
          "value": "Perbedaan suhu"
        },
        {
          "option": "B",
          "value": "Rotasi bumi"
        },
        {
          "option": "C",
          "value": "Arus listrik"
        },
        {
          "option": "D",
          "value": "Sifat intrinsik magnet"
        }
      ],
      "material": {
        "id": "e419af71-61cb-45bf-ad41-6277fa557dba",
        "name": "Kemagnetan"
      }
    },
    {
      "id": "e1320031-2455-403d-a691-5196409d1d11",
      "questions": "Bunyi ledakan begitu menggelegar tiba-tiba yang merupakan akibat dari pemuaian udara merupakan istilah …",
      "answer": [
        {
          "option": "A",
          "value": "angin"
        },
        {
          "option": "B",
          "value": "listrik"
        },
        {
          "option": "C",
          "value": " guntur"
        },
        {
          "option": "D",
          "value": "petir"
        }
      ],
      "material": {
        "id": "e9c76a51-1481-44e7-b580-c8ae38b4472d",
        "name": "Listrik Statis"
      }
    },
    {
      "id": "e329977d-740e-4d8b-821a-fec9dae097ac",
      "questions": "Suatu zat berubah dari wujud gas ke wujud cair. Perubahan ini disebut? ",
      "answer": [
        {
          "option": "A",
          "value": "Pemisahan"
        },
        {
          "option": "B",
          "value": "Pemadatan"
        },
        {
          "option": "C",
          "value": "Pemuaian"
        },
        {
          "option": "D",
          "value": "Pemurnian"
        }
      ],
      "material": {
        "id": "1f2ba92d-42f5-4ab6-8846-9837054aa4f8",
        "name": "Zat dan Perubahannya"
      }
    },
    {
      "id": "e47f1f7f-b6aa-4afe-9439-1f4716ace465",
      "questions": "Apa yang dimaksud dengan perioda suatu gelombang?",
      "answer": [
        {
          "option": "A",
          "value": "Jarak antara dua puncak gelombang"
        },
        {
          "option": "B",
          "value": "Waktu yang diperlukan untuk satu siklus gelombang"
        },
        {
          "option": "C",
          "value": "Amplitudo gelombang"
        },
        {
          "option": "D",
          "value": "Jarak antara dua titik lemah pada gelombang"
        }
      ],
      "material": {
        "id": "0d036737-a2b8-492a-8322-44255b0943eb",
        "name": "Getaran, Gelombang dan Cahaya"
      }
    },
    {
      "id": "e4abe301-7f38-4c85-b245-f0bff47f9376",
      "questions": "Besaran yang dapat diukur dengan menggunakan mistar adalah ...",
      "answer": [
        {
          "option": "A",
          "value": "panjang"
        },
        {
          "option": "B",
          "value": "massa"
        },
        {
          "option": "C",
          "value": "waktu"
        },
        {
          "option": "D",
          "value": "suhu"
        }
      ],
      "material": {
        "id": "8753125f-dda7-46ad-a894-2e32e2c7aafc",
        "name": "Besaran dan Pengukuran"
      }
    },
    {
      "id": "e60492a8-8adf-4990-af8c-dc82d16ab32b",
      "questions": "Bagaimana cara menghitung kecepatan gelombang (v) jika diketahui panjang gelombang (λ) dan frekuensi (f)?",
      "answer": [
        {
          "option": "A",
          "value": "v=λ×f"
        },
        {
          "option": "B",
          "value": "v=fλ​"
        },
        {
          "option": "C",
          "value": "v=λ+f"
        },
        {
          "option": "D",
          "value": "v=λf​"
        }
      ],
      "material": {
        "id": "0d036737-a2b8-492a-8322-44255b0943eb",
        "name": "Getaran, Gelombang dan Cahaya"
      }
    },
    {
      "id": "e830491a-09b6-4cd2-9580-ce6e0aecb342",
      "questions": "Sebuah benda dengan massa 200 gram mengalami kenaikan suhu sebesar 30°C. Berapa kalor yang diperlukan? (Kalor jenis benda = 0,5 J/g°C)",
      "answer": [
        {
          "option": "A",
          "value": "300 J"
        },
        {
          "option": "B",
          "value": "450 J"
        },
        {
          "option": "C",
          "value": "600 J"
        },
        {
          "option": "D",
          "value": "900 J"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    },
    {
      "id": "ea7639c8-b274-46da-a727-f732e8fda982",
      "questions": "Suatu larutan memiliki massa jenis 1,2 g/mL dan volumenya 150 mL. Berapakah massa larutan tersebut?",
      "answer": [
        {
          "option": "A",
          "value": "0,008 g"
        },
        {
          "option": "B",
          "value": "0,18 g"
        },
        {
          "option": "C",
          "value": "0,12 g"
        },
        {
          "option": "D",
          "value": "180 g"
        }
      ],
      "material": {
        "id": "1f2ba92d-42f5-4ab6-8846-9837054aa4f8",
        "name": "Zat dan Perubahannya"
      }
    },
    {
      "id": "f348176a-d413-4b9c-807f-3f2a485d631e",
      "questions": "Volume benda yang bentuknya tidak beraturan dapat diukur dengan menggunakan ...",
      "answer": [
        {
          "option": "A",
          "value": "neraca"
        },
        {
          "option": "B",
          "value": "stopwatch"
        },
        {
          "option": "C",
          "value": "gelas ukur"
        },
        {
          "option": "D",
          "value": "jangka sorong"
        }
      ],
      "material": {
        "id": "8753125f-dda7-46ad-a894-2e32e2c7aafc",
        "name": "Besaran dan Pengukuran"
      }
    },
    {
      "id": "fc7b8fe6-8c0f-4195-9edd-7433c032e4d7",
      "questions": "Apa fungsi lensa konvergen dalam mikroskop?",
      "answer": [
        {
          "option": "A",
          "value": "Memperbesar objek"
        },
        {
          "option": "B",
          "value": "Memfokuskan cahaya"
        },
        {
          "option": "C",
          "value": "Menyebarkan cahaya"
        },
        {
          "option": "D",
          "value": "Menyerap cahaya"
        }
      ],
      "material": {
        "id": "317e2be7-afd5-4a7b-bc21-8d82107be697",
        "name": "Cahaya dan Alat Optik "
      }
    },
    {
      "id": "fcb78ec9-b1eb-4b15-934c-e9deaca05026",
      "questions": "Sebuah panci berisi 500 gram air pada suhu 20°C. Jika panas diberikan ke air sehingga suhunya naik menjadi 50°C, berapa kalor yang diserap air? (Kalor jenis air = 4,18 J/g°C)",
      "answer": [
        {
          "option": "A",
          "value": "627 J"
        },
        {
          "option": "B",
          "value": "1.045 J"
        },
        {
          "option": "C",
          "value": "1.255 J"
        },
        {
          "option": "D",
          "value": "2.090 J"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    },
    {
      "id": "fda5e996-6fe2-4aa7-8610-ca9b2aebb7d8",
      "questions": "Cahaya yang melewati suatu prisma akan mengalami fenomena apa?",
      "answer": [
        {
          "option": "A",
          "value": "Pemantulan total"
        },
        {
          "option": "B",
          "value": "Pemantulan bias"
        },
        {
          "option": "C",
          "value": "Pemantulan cahaya"
        },
        {
          "option": "D",
          "value": "Pembiasan cahaya"
        }
      ],
      "material": {
        "id": "317e2be7-afd5-4a7b-bc21-8d82107be697",
        "name": "Cahaya dan Alat Optik "
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
  "message": "failed getting all quiz data"
}
```
# Get Data Quiz By Material Id Api
Endpoint : GET http://34.87.40.161:5000/api/quiz/material/:id

Headers :

- Authorization : token

Response Body Success :
```json
{
  "code": 200,
  "status": "success",
  "message": "Quizzes for material with id 6fc09172-5e11-403d-bebc-69622d1f6911 found",
  "quizzes": [
    {
      "id": "136ab8ad-de63-47d0-ade8-b3c5e4c4b788",
      "questions": "Mana dari berikut yang merupakan definisi kalor?",
      "answer": [
        {
          "option": "A",
          "value": "Satuan suhu"
        },
        {
          "option": "B",
          "value": "Energi panas yang dipindahkan antar dua sistem karena perbedaan suhu"
        },
        {
          "option": "C",
          "value": "Jumlah partikel dalam suatu benda"
        },
        {
          "option": "D",
          "value": "Panjang suatu benda"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    },
    {
      "id": "711b90b0-5e2f-4168-8782-34f075043a98",
      "questions": "Proses perpindahan panas melalui kontak langsung antara partikel-partikel benda disebut?",
      "answer": [
        {
          "option": "A",
          "value": "Konduksi"
        },
        {
          "option": "B",
          "value": "Konveksi"
        },
        {
          "option": "C",
          "value": "Radiasi"
        },
        {
          "option": "D",
          "value": "Kondensasi"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    },
    {
      "id": "aa0e77a2-83a2-412c-997c-353b87047983",
      "questions": "Ketika benda memanjang karena perubahan suhu, fenomena ini disebut?",
      "answer": [
        {
          "option": "A",
          "value": "Pemuaian panjang"
        },
        {
          "option": "B",
          "value": "Pemuaian luas"
        },
        {
          "option": "C",
          "value": "Pemuaian volume"
        },
        {
          "option": "D",
          "value": "Pemuaian massa"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    },
    {
      "id": "e830491a-09b6-4cd2-9580-ce6e0aecb342",
      "questions": "Sebuah benda dengan massa 200 gram mengalami kenaikan suhu sebesar 30°C. Berapa kalor yang diperlukan? (Kalor jenis benda = 0,5 J/g°C)",
      "answer": [
        {
          "option": "A",
          "value": "300 J"
        },
        {
          "option": "B",
          "value": "450 J"
        },
        {
          "option": "C",
          "value": "600 J"
        },
        {
          "option": "D",
          "value": "900 J"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    },
    {
      "id": "fcb78ec9-b1eb-4b15-934c-e9deaca05026",
      "questions": "Sebuah panci berisi 500 gram air pada suhu 20°C. Jika panas diberikan ke air sehingga suhunya naik menjadi 50°C, berapa kalor yang diserap air? (Kalor jenis air = 4,18 J/g°C)",
      "answer": [
        {
          "option": "A",
          "value": "627 J"
        },
        {
          "option": "B",
          "value": "1.045 J"
        },
        {
          "option": "C",
          "value": "1.255 J"
        },
        {
          "option": "D",
          "value": "2.090 J"
        }
      ],
      "material": {
        "id": "6fc09172-5e11-403d-bebc-69622d1f6911",
        "name": "Suhu dan Kalor"
      }
    }
  ]
}
```
Response Body Error : 
```json
{
  "code": 200,
  "status": "success",
  "message": "Quizzes for material with id 6fc09172-5e11-403d-bebc-69622d1f69112 found",
  "quizzes": []
}
```
# Submit Answer Api
Endpoint : GET http://34.87.40.161:5000/api/questions/submit-answer

Headers :

- Authorization : token

Response Body Success :
```json
{
    "quiz": {
        "hasil": [
            {
                "idAnswer": "136ab8ad-de63-47d0-ade8-b3c5e4c4b788",
                "value": true
            },
            {
                "idAnswer": "711b90b0-5e2f-4168-8782-34f075043a98",
                "value": false
            },
            {
                "idAnswer": "aa0e77a2-83a2-412c-997c-353b87047983",
                "value": true
            },
            {
                "idAnswer": "e830491a-09b6-4cd2-9580-ce6e0aecb342",
                "value": false
            },
            {
                "idAnswer": "fcb78ec9-b1eb-4b15-934c-e9deaca05026",
                "value": true
            }
        ],
        "skore_Anda": 60,
        "description": "Anda tidak lulus pada materi Suhu dan Kalor"
    }
}
```