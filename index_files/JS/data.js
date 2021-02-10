
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
if (mySidebar.style.display === 'block') {mySidebar.style.display = 'none';} else {mySidebar.style.display = 'block';}}

function w3_close(){mySidebar.style.display = "none";}



var       MNY_BTN=							document.getElementsByClassName("w3-bar-item w3-button");
for(i=0;i<MNY_BTN.length;i++){let I=i;
	
	
	MNY_BTN[I].onclick=function(){w3_close();}}

	MNY_BTN[4].onclick=function(){w3_open();}

var TXTdata={
	
"ABOUTOT":	"Service For Service buisness modeal (S4Sbm)  \n  S4Sbm is one new idea that is win-win solution on bouth sides clients and buisness  \n  its just private agriment that they make betwhine they without any thirty party, hiden fees etc..  \n  thye just simple make deal that 1 side will do service for other side in excange for free servise from other side  \n  that is its..  \n  alos main point is that bout side to dont involvt money inveistment in case if one of they cant do some  tricky mouves  \n  this idea is alredy in use but in still unknow to mass of people. Litel bit more famose about that is some   \n  univerity and/or agency offer oportynity for students from other contuers  \n  to work in hotle (as recepcion ) in reward to get free housing at hotel. also some sezonjobs and turis agency ofer that,,  \n  so the point of S4Sbm is just to preform that as normal thing. if you offer service that cant be taken then you cant loose money  \n  (ex. cant steal the talent form some artist that preform that in live)  \n  , but if is service that containt some kind of sicrets (ex. magician/recept preform can loose value if everybody know the sicret)  \n  the concept is good because in heige percent by defalt this system you cant lose money if dont invest money.  \n  also if this concept is menagent in right wey, you can teoretcly gain more progres in long run and do more enjoifull things that you wanna  \n  (for better understanding the concept see the video below.)  \n    so bottom line , people that are more energetly , talentd , enterpneuere , have some idea and time , with out money and risk can feel the benefits  from S4Sbm.",	
	
"PROS":{
0:"jako",
1:"sigurno",
2:"dobro",
3:"okee ee"}}

		 polneje(TXTdata);
function polneje(a){  document.getElementsByClassName("w3-center w3-large")[0].innerHTML= 	a["ABOUTOT"];

let Pros=document.getElementsByClassName("Pro"); 
for(i=0;i<Pros.length;i++){
          Pros[0].innerHTML= a["PROS"][i];}}


/// da se stave teksto
/// slikica glavno
/// videoto od powpoint
/// muzika onaka
/// claudsko

PreCekIMG(window.screen.width);
function PreCekIMG(a){ if(a<400){ let fto=document.getElementById("home");
fto.style.marginTop= 89+"px";
fto.style.height= 147+"px";
fto.style.scale= 1.5;
fto.style.width= 71+"%";
fto.style.marginLeft= 11+"%";}}

