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
box.addEventListener("input",search);

function search() {

    var res = "";
    out.innerHTML = res;

    var temp = box.value;
    var pat = new RegExp(temp);
    
    var res1 = -1, res2 = -1, res3 = -1;
    var res1 = data.HOD.search(temp);
    console.log(res1);
    console.log("second loop");
    for (var index= 0; index < (data.Faculty.length); ++index){
        res2 = data.Faculty[index].search(temp);
        console.log(index,res2);
        if (res2 > -1){break;}
    }
    console.log("third loop");
    
    for (var index= 0; index < (data.Lab_Eng.length); ++index){
        res3 = data.Lab_Eng[index].search(temp);
        console.log(index,res3);
        if (res3 > -1){break;}
    }
    if (res1 == -1 && res2 == -1 && res3 ==-1){out.innerHTML = "No match found";}
    else{
        if (res1 > -1){
            if (pat.exec(data.HOD) != null){
                res += data.HOD;
                res += "<br>";
            }
        }
        if (res2 > -1){
            for (var index= 0; index < data.Faculty.length; ++index){
                if(pat.exec(data.Faculty[index]) != null){
                    res += data.Faculty[index];
                    res += "<br>";                        
                }
            }
        }
        if (res3 > -1){
            for (var index= 0; index < data.Lab_Eng.length; ++index){
                if(pat.exec(data.Lab_Eng[index]) != null){
                    res += data.Lab_Eng[index];
                    res += "<br>";                        
                }
            }
        }
    }
    out.innerHTML = res;
}