
var form = document.getElementById("form-akan");

document.getElementById("submit-btn").addEventListener("click", function () {
    //   form.submit();
    var dob = document.getElementById("dob").value;
    // alert(dob);
    var CC = dob.substring(0,2);
    var YY = dob.substring(0,4);
    var MM = dob.substring(4,6);
    var DD = dob.substring(6,8);
    alert("CC:" + CC + ", MM:" + MM + ", DD:" + DD);
    var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 ;
});
