//java script for lab 1 - special topics
// Andrew MacLennan, w0200022

"use strict";

document.getElementById("front").addEventListener("dblclick", changeZ);
document.getElementById("back").addEventListener("dblclick", changeZ);
document.getElementById("h1").addEventListener("click", t1);
document.getElementById("h2").addEventListener("click", t2);
document.getElementById("h3").addEventListener("click", t3);
document.getElementById("h4").addEventListener("click", t4);


function changeZ()
{
    if(document.getElementById("front").style.zIndex<=document.getElementById("back").style.zIndex)
    {
        document.getElementById("front").style.zIndex = 1;
        document.getElementById("front").style.opacity = 100;
        document.getElementById("back").style.zIndex = 0;
        document.getElementById("back").style.opacity = 50;
    }
    else
    {
        document.getElementById("back").style.zIndex = 1;
        document.getElementById("front").style.zIndex = 0;
        document.getElementById("back").style.opacity = 100;
        document.getElementById("front").style.opacity = 50;
    }

    if (document.getElementById("back").style.zIndex == 1)
    {
        document.getElementById("back").style.opacity = "1";
        document.getElementById("front").style.opacity = "0.5";
    }
    else
    {
        document.getElementById("front").style.opacity = "1";
        document.getElementById("back").style.opacity = "0.5";
    }
}

var isOpenTopic1 = false;
var isOpenTopic2 = false;
var isOpenTopic3 = false;
var isOpenTopic4 = false;

function t1() {
    if (isOpenTopic1) {
        document.getElementById("h1").style.backgroundColor = "powderblue";
        document.getElementById("p1").style.display = "none";
        isOpenTopic1 = false;
    } else if (!isOpenTopic1) {
        document.getElementById("h1").style.backgroundColor = "grey";
        document.getElementById("p1").style.display = "block";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("h2").style.backgroundColor = "powderblue";
        document.getElementById("h3").style.backgroundColor = "powderblue";
        document.getElementById("h4").style.backgroundColor = "powderblue";
        isOpenTopic1 = true;
    }
}

function t2(){
    if(isOpenTopic2){
        document.getElementById("h2").style.backgroundColor = "powderblue";
        document.getElementById("p2").style.display = "none";
        isOpenTopic2 = false;
    }else if(!isOpenTopic2){
        document.getElementById("h2").style.backgroundColor = "grey";
        document.getElementById("p2").style.display = "block";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("h1").style.backgroundColor = "powderblue";
        document.getElementById("h3").style.backgroundColor = "powderblue";
        document.getElementById("h4").style.backgroundColor = "powderblue";
        isOpenTopic2 = true;
    }
}

function t3() {
    if (isOpenTopic3) {
        document.getElementById("h3").style.backgroundColor = "powderblue";
        document.getElementById("p3").style.display = "none";
        isOpenTopic3 = false;
    } else if (!isOpenTopic3) {
        document.getElementById("h3").style.backgroundColor = "grey";
        document.getElementById("p3").style.display = "block";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p1").style.display = "none";
        document.getElementById("p4").style.display = "none";
        document.getElementById("h2").style.backgroundColor = "powderblue";
        document.getElementById("h1").style.backgroundColor = "powderblue";
        document.getElementById("h4").style.backgroundColor = "powderblue";
        isOpenTopic3 = true;
    }
}

function t4() {
    if (isOpenTopic4) {
        document.getElementById("h4").style.backgroundColor = "powderblue";
        document.getElementById("p4").style.display = "none";
        isOpenTopic4 = false;
    } else if (!isOpenTopic4) {
        document.getElementById("h4").style.backgroundColor = "grey";
        document.getElementById("p4").style.display = "block";
        document.getElementById("p2").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p1").style.display = "none";
        document.getElementById("h2").style.backgroundColor = "powderblue";
        document.getElementById("h3").style.backgroundColor = "powderblue";
        document.getElementById("h1").style.backgroundColor = "powderblue";
        isOpenTopic4 = true;
    }
}

var i = 0;
var imageArray = ["batrob.jpg","GothCard.jpg","batrob2.jpg"];
var textArray = ["Bad","Good","Worse"];


function slideShow()
{

    document.picture.src = imageArray[i];
    if(i < imageArray.length - 1){ i++;
    } else {
        i = 0;
    }

    document.getElementById("textLine").innerHTML = textArray[i];
    if(i < textArray.length - 1){i++;
    }else{
        i = 0;
    }

    setTimeout("slideShow()",3000);
}

window.onload=slideShow;







