
var form = document.getElementById("form-akan");

document.getElementById("submit-btn").addEventListener("click", function () {
    //   form.submit();
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender-selection"]:checked').value;
    // alert(gender);

    var akan = getAkanName(dob, gender)
    alert("Akan : " + akan)

});

function getAkanName(dob, gender){
    const male_akan = ["Kwasi","Kwadwo","Kwabena","Kwaku"," Yaw","Kofi","Kwame"];
    const female_akan = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
    
    // alert(dob);
    var CC = parseInt(dob.substring(0,2));
    var YY = parseInt(dob.substring(0,4));
    var MM = parseInt(dob.substring(4,6));
    var DD = parseInt(dob.substring(6,8));
    // alert("CC:" + CC + ", YY:" + YY + ", MM:" + MM + ", DD:" + DD);
    var d = Math.trunc(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    //alert("d : " + d);

    if(gender == "M"){
        return male_akan[d];
    }else if(gender == "F"){
        return female_akan[d];
    }else
        return null;

}