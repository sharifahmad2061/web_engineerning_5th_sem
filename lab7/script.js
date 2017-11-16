data = {
    "HOD": "Dr. Muhammad Moazam Fraz",
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
    "Lab_Eng": [
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
var out = document.getElementById("out");
var box = document.getElementById("search_box");
box.addEventListener("keyup",search);

function search() {
    var res = "";
    out.innerHTML = res;

    var temp = box.value;
    if (temp == "")return;

    var pat = new RegExp(temp, "i");
    
    var res1 = false;
    
    var res1 = pat.test(data.HOD);
    if (res1 == true){res += data.HOD; res += "<br>";}
    res1 = false;

    for (var index= 0; index < (data.Faculty.length); ++index){
        res1 = pat.test(data.Faculty[index]);
        if (res1 == true){res += data.Faculty[index];res += "<br>";}
        res1 = false;
    }
    
    for (var index= 0; index < (data.Lab_Eng.length); ++index){
        res1 = pat.test(data.Lab_Eng[index]);
        if (res1 == true){res += data.Lab_Eng[index];res += "<br>";}
        res1 = false;
    }
    out.innerHTML = res;
}