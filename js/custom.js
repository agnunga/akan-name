document.getElementById("submit-btn").addEventListener("click", function () {
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender-selection"]:checked').value;
    // alert(gender);

    var akan = getAkanName(dob, gender);

    // if(akan != null){
        alert("Akan : " + akan);
    // }

});

function getAkanName(dob, gender){
    var akan_name = null;
    const male_akan = ["Kwasi","Kwadwo","Kwabena","Kwaku"," Yaw","Kofi","Kwame"];
    const female_akan = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
    
    // alert(dob);
    var cc = parseInt(dob.substring(0,2));
    var yy = parseInt(dob.substring(0,4));
    var mm = parseInt(dob.substring(4,6));
    var dd = parseInt(dob.substring(6,8));

    //validate date and month
    if(mm <=0 || mm > 12){
        alert("Invalid Month");
        return null;
    }
    if(dd <=0 || dd > 31){
        alert("Invalid Day of Month");
        return null;
    }
    
    // alert("cc:" + cc + ", yy:" + yy + ", mm:" + mm + ", dd:" + dd);
    var d = Math.trunc(( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
    // alert("d : " + d);

    switch(gender){
        case 'M':
            return male_akan[d];
        case 'F':
            return female_akan[d];
        default:
            return null;
    }

}