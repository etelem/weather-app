var cel;
var winter = 32;
var fall = 69.9;
var summer = 70;
var spring = 50;


document.getElementById("convert").onclick = function() {
  cel = parseInt(document.getElementById("cel").value);
  cel = cel*1.8+32;
     document.getElementById("far").innerHTML = cel;




if (cel <= winter) {
	document.getElementById("seasons").src = "images/winter.jpg";
}

else if (cel > spring && cel <= fall)
		document.getElementById("seasons").src = "images/fall.jpeg";


else if (cel >=summer)
		document.getElementById("seasons").src = "images/summer.jpeg";

else if (cel > winter && cel <=spring)
		document.getElementById("seasons").src = "images/spring.jpeg";


}






