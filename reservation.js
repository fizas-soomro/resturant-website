function reserve(){


let name =
document.getElementById("name").value;


let phone =
document.getElementById("phone").value;


let date =
document.getElementById("date").value;


let time =
document.getElementById("time").value;


let guests =
document.getElementById("guests").value;



if(
name=="" ||
phone=="" ||
date=="" ||
time=="" ||
guests==""
){

alert("Please complete all fields");

return;

}





let reservation = {


name:name,

phone:phone,

date:date,

time:time,

guests:guests


};




localStorage.setItem(

"reservation",

JSON.stringify(reservation)

);



alert("Your table has been reserved!");



}







function checkReservation(){



let phone =
document.getElementById("checkPhone").value;



let data =
JSON.parse(localStorage.getItem("reservation"));





if(data == null){


document.getElementById("result").innerHTML =
"No reservation found";


return;


}





if(data.phone == phone){



document.getElementById("result").innerHTML = `


<h3>Reservation Found</h3>

<p>Name: ${data.name}</p>

<p>Date: ${data.date}</p>

<p>Time: ${data.time}</p>

<p>Guests: ${data.guests}</p>


`;



}

else{


document.getElementById("result").innerHTML =
"Wrong phone number";


}



}