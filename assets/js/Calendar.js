var myFlip = document.getElementById("flip");
var myPanel = document.getElementById("panel");
document.getElementById("logo").style.marginLeft="37%";
document.getElementById("logo").style.fontWeight="bold";
myFlip.style.padding="10px";
myPanel.style.paddingTop="30px";
myPanel.style.paddingLeft="25%";
var myText = document.querySelectorAll("a");
for(let i = 0; i < myText.length; i++){
    myText[i].style.textDecoration = "none";
    myText[i].style.color= "black";
}
document.getElementById("l1").style.display="inline-block";
document.getElementById("l2").style.display="inline-block";
document.getElementById("l3").style.display="inline-block";
document.getElementById("l4").style.display="inline-block";
document.getElementById("l5").style.display="inline-block";
document.getElementById("l6").style.display="inline-block";

var myLi = document.querySelectorAll("li")
for(let i = 0; i < myLi.length; i++){
    myLi[i].style.listStyleType="none";
    myLi[i].style.paddingLeft="40px";
}
var k=0;
$(document).ready(function(){
    
    $("#flip").click(function(){
        if(k % 2 == 0){
            k++;
            $("#panel").slideToggle("slow");
            $("#logo").css("borderBottom", "2px solid black"); 
            $("#logo").css("borderTop", "0px solid black");  
            $("#logo").addClass("btn"); 
        }
        else{
            k++;
            $("#panel").slideToggle("slow");
            
            $("#logo").css("borderTop", "2px solid black");  
            $("#logo").css("borderBottom", "0px solid black");    
            $("#logo").addClass("btn"); 
             
        }
    });
    
});

var i =0;
$(document).ready(function(){
    $("#flip").click(function(){
      if(i % 2 == 0){
      var div = $("#flip"); 
      div.animate({right: '100px'}, "slow");
      div.animate({fontSize: '4em'}, "slow");
      div.animate({left: '100px'}, "slow");
      div.animate({fontSize: '18px'}, "slow");
      
      }
      i++;
    });
  });

  function sound() {
    var audio = new Audio();
    audio.src = 'assets/sounds/erro.mp3';
    audio.autoplay = true; 
 }
   var radio = new Audio(); 
   radio.src = 'assets/sounds/Dehao Zhang — Ching Chang Hon Chi (www.lightaudio.ru).mp3';
   
  var Sound = 0;
  $(document).ready(function(){
    $("#btn0").click(function(){
      $("#btn0").addClass("btn");
      if (radio.paused == true) {
        radio.play();
        }
         else {
        radio.pause();
        }
    });
  });
 
  $(document).ready(function(){
    $("#btn1").click(function(){
      sound();
      $("#item2").hide();
      $("#item3").hide();
      $("#btn2").removeClass("btn");
      $("#btn3").removeClass("btn");
    });
    $("#btn1").click(function(){
      $("#item1").show();
      $("#btn1").addClass("btn");
    });
  });


  $(document).ready(function(){
    $("#btn2").click(function(){
      sound();
      $("#item1").hide();
      $("#item3").hide();
      $("#btn1").removeClass("btn");
      $("#btn3").removeClass("btn");
    });
    $("#btn2").click(function(){
      $("#item2").show();
      $("#btn2").addClass("btn");
    });
  });


  $(document).ready(function(){
    $("#btn3").click(function(){
      sound();
      $("#item1").hide();
      $("#item2").hide();
      $("#btn2").removeClass("btn");
      $("#btn1").removeClass("btn");
    });
    $("#btn3").click(function(){
      $("#item3").show();
      $("#btn3").addClass("btn");
    });
  });

  $(document).ready(function(){
    $("#btn4").click(function(){
      var audio = new Audio();
      audio.src = 'assets/sounds/windows-10-error-sound.mp3';
      audio.autoplay = true; 
      $("#item1").show();
      $("#item2").show();
      $("#item3").show();
      $("#btn1").removeClass("btn");
      $("#btn2").removeClass("btn");
      $("#btn3").removeClass("btn");
      $("#btn4").addClass("btn");
    });
  });




const myTh = document.querySelectorAll("th");
for( let i = 0; i < myTh.length; i++){
    if(i!=0 && i!=1 && i!=myTh.length-1){
    myTh[i].style.fontFamily="'Source Sans Pro', sans-serif";
    myTh[i].style.paddingBottom="20px";
    myTh[i].style.paddingTop="20px";
    myTh[i].style.paddingLeft="100px";
    }
}
const myTr = document.querySelectorAll("tr");
for( let i = 0; i < myTr.length; i++){
    myTr[i].style.borderBottom="1px solid #CDCDCD";
}

const myTable = document.querySelectorAll("table");
for( let i = 0; i < myTable.length; i++){
    if(i%2==0 && i!=0){
    myTable[i].style.marginLeft="90px";
    }
    myTable[i].style.display="inline-block";
    
}
myTable[1].style.marginLeft="50px"; 
myTable[3].style.marginLeft="76px"; 
myTable[5].style.marginLeft="105px"; 
myTable[0].style.marginLeft="40px"; 

const myBut = document.querySelectorAll("button");
myBut[1].style.marginLeft="325px";
myBut[4].style.marginLeft="435px";
for( let i = 0; i < myBut.length; i++){
    myBut[i].style.backgroundColor="#4676D7";
    myBut[i].style.borderRadius="5px";
    myBut[i].style.border="0";
    myBut[i].style.color="#fff";
    myBut[i].style.padding="8px 16px";
    myBut[i].style.fontSize="16px";
}

document.getElementById("item1").style.borderTop="2px solid black";
document.getElementById("item1").style.marginTop="20px";
document.getElementById("item2").style.borderTop="2px solid black";
document.getElementById("item2").style.marginTop="20px";
document.getElementById("item3").style.borderTop="2px solid black";
document.getElementById("item3").style.marginTop="20px";

const myH2 = document.querySelectorAll("h2");
for(let i = 0; i < myH2.length; i++){
    myH2[i].style.paddingLeft="50%";
    myH2[i].style.fontFamily="'Source Sans Pro', sans-serif";
}

document.getElementById("th_side1").style.borderRadius="0px 0 0 100px";
document.getElementById("th_side1").style.backgroundColor="beige";
document.getElementById("th_side1").style.width="1%";

document.getElementById("th_side2").style.borderRadius="0 0 100px 0";
document.getElementById("th_side2").style.backgroundColor="beige";
document.getElementById("th_side2").style.width="1%";

document.getElementById("myFeed").style.padding="2% 0 0 38%";
document.getElementById("myFeed").style.fontSize="30px";
document.getElementById("myFeed").style.borderTop="2px solid black";
document.getElementById("myFeed").style.borderRadius='10px';

document.getElementById("myInput").style.border="2px solid black";
document.getElementById("myInput").style.borderRadius="10px";
document.getElementById("myInput").style.marginLeft="42.8%";


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

document.getElementById("myFbTb").style.marginLeft="25%";

document.getElementById("myFbTb").style.borderTop="2px solid black";
document.getElementById("myFbTb").style.borderBottom="2px solid black";
document.getElementById("myFbTb").style.borderRadius="10px";  
const MyTd = document.querySelectorAll("td");

for(let i = 0; i < MyTd.length; i++){
  MyTd[i].style.fontFamily="'Source Sans Pro', sans-serif";
  MyTd[i].style.paddingLeft='100px';
  
}

