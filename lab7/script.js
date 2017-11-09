var data = {
    "HOD": "Moazam Fraz",
    "Faculty": [
        "Engr. Dr. Muhammad Muneeb Ullah",
        "Engr. Dr. Nadeem Ahmed",
        "Engr. Dr. Omar Arif",
        "Engr. Dr. Muhammad Ali Tahir",
        "Engr. Dr. Faisal Shafait",
        "Engr. Dr. Hasan Tahir",
        "Engr. Dr. Rafia Mumtaz",
        "Dr. Imran Mahmood",
        "Dr. Muhammad Shahzad",
        "Dr. Shahzad Saleem",
        "Dr. Seemab Latif",
        "Engr. Ayesha Kanwal",
        "Engr. Haleemah Zia",
        "Ms. Hirra Anwar",
        "Mr. Shamyl Bin Mansoor",
        "Mr. Taufeeq Ur Rehman"
    ],
    "Lab Engineers": [
        "Mr. Ahsan Gul",
        "Mr. Ahmed Shahzaib Abid Bhatti",
        "Mr. Syed Muhammad Ali Musa",
        "Mr. Muhammad Akhtar Munir",
        "Mr. Khurram Altaf",
        "Ms. Maryam Sajjad",
        "Mr. Nadeem Nawaz",
        "Ms. Iram Tariq Bhatti",
        "Engr. Rabbia Hassan",
        "Mr. Rehan Iqbal",
        "Engr. Mehwish Kiran"
    ]
}

var par = document.createElement("p");
par.innerHTML = data.HOD;
var att = document.getElementById("out");
att.insertAdjacentElement(par);