var myTable = document.getElementById("myTab");


myTable.style.textAlign="center";

var myTh = document.querySelectorAll("th, td");
for (let i = 0; i < myTh.length; i++) {
    if(i % 7==0 || (i >=0 && i <=6)){
        myTh[i].style.backgroundColor = "#D8E6F3";
        myTh[i].style.color="white";
        myTh[i].style.padding="10px 20px";
        myTh[i].style.border = "1px solid";
        
    }
    else{
    myTh[i].style.backgroundColor = "#AFCDE7";
    myTh[i].style.color="white";
    myTh[i].style.padding="10px 20px";
    myTh[i].style.border = "1px solid";
    }
  }
  for (let i = 0; i < myTh.length; i++) {
    if(i > 97 && i <= 123){
        if(i % 2 ==0 ){
            myTh[i].style.backgroundColor = "#D8E6F3";
        }
        else{
        myTh[i].style.backgroundColor = "#AFCDE7";
        }
         
    }
    if(i > 123){
        myTh[i].style.backgroundColor = "#AFCDE7";   
    }
  }

var mySrc = document.querySelectorAll("img");
for (let i = 0; i < mySrc.length; i++) {
    mySrc[i].style.paddingRight='6px';
    mySrc[i].style.width="18px";
    mySrc[i].style.height="18px";
  }
var myH1 = document.querySelectorAll("h1");

for (let i = 0; i < myH1.length; i++) {
    myH1[i].style.fontSize="18px";
    myH1[i].style.fontFamily="monospace"; 
    myH1[i].style.position="relative";
  }

document.getElementById("row1").style.fontSize="20px";
document.getElementById("row2").style.fontSize="20px";
document.getElementById("row3").style.fontSize="20px";

var myCon = document.getElementById("con");
myCon.style.backgroundColor="#D8E6F3";
myCon.style.borderTop="2px solid #AFCDE7";
document.getElementById("col1").style.paddingLeft="30px";

var myP = document.querySelectorAll("h5").style.color="white";
for(let i = 0; i < myP.length; i++){
    myP[i].style.fontFamily="monospace"; 
    myP[i].style.color="white";

}
