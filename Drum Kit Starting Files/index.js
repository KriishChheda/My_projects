// we could have written a function separately and did the functioncall inside the event listener 
// we could have written an anonymous function which is nameless inside the event listener 
// every time our java script link gets read in the html file . Thats the time when the entire js file gets read

for(i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",
        function(){ 
           if(this.innerHTML=="w"){
            var audio=new Audio("./sounds/tom-1.mp3")
            audio.play();
            document.querySelector(".w").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".w").classList.remove("pressed");
            },300);
           }
           else if(this.innerHTML=="a"){
            var audio=new Audio("./sounds/tom-2.mp3")
            audio.play();
            document.querySelector(".a").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".a").classList.remove("pressed");
            },300);
           }
           else if(this.innerHTML=="s"){
            var audio=new Audio("./sounds/tom-3.mp3")
            audio.play();
            document.querySelector(".s").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".s").classList.remove("pressed");
            },300);
           }
           else if(this.innerHTML=="d"){
            var audio=new Audio("./sounds/tom-4.mp3")
            audio.play();
            document.querySelector(".d").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".d").classList.remove("pressed");
            },300);
           }
           else if(this.innerHTML=="j"){
            var audio=new Audio("./sounds/snare.mp3")
            audio.play();
            document.querySelector(".j").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".j").classList.remove("pressed");
            },300);
           }
           else if(this.innerHTML=="k"){
            var audio=new Audio("./sounds/crash.mp3")
            audio.play();
            document.querySelector(".k").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".k").classList.remove("pressed");
            },300);
           }
           else if(this.innerHTML=="l") {
            var audio=new Audio("./sounds/kick-bass.mp3")
            audio.play();
            document.querySelector(".l").classList.add("pressed");
            setTimeout(function(){
                document.querySelector(".l").classList.remove("pressed");
            },300);
           }
             } ) ;
                 
}

// whenever i click any element containing button class,i want the anonymous function to be executed

// we could also have used the switch statement here 

document.addEventListener("keypress",function(event){
    switch(event.key){
     case "w":
         var audio=new Audio("./sounds/tom-1.mp3")
         audio.play();
         document.querySelector(".w").classList.add("pressed");
         setTimeout(function(){
            document.querySelector(".w").classList.remove("pressed");
        },300);
         break;
     case "a":
         var audio=new Audio("./sounds/tom-2.mp3")
         audio.play();
         document.querySelector(".a").classList.add("pressed");
         setTimeout(function(){
            document.querySelector(".a").classList.remove("pressed");
        },300);
         break;
     case "s":
         var audio=new Audio("./sounds/tom-3.mp3")
         audio.play();
         document.querySelector(".s").classList.add("pressed");
         setTimeout(function(){
            document.querySelector(".s").classList.remove("pressed");
        },300);
         break;
     case "d":
         var audio=new Audio("./sounds/tom-4.mp3")
         audio.play();
         document.querySelector(".d").classList.add("pressed");
         setTimeout(function(){
            document.querySelector(".d").classList.remove("pressed");
        },300);
         break;
     case "j":
         var audio=new Audio("./sounds/snare.mp3")
         audio.play();
         document.querySelector(".j").classList.add("pressed");
         setTimeout(function(){
            document.querySelector(".j").classList.remove("pressed");
        },300);
         break;
     case "k":
         var audio=new Audio("./sounds/crash.mp3")
         audio.play();
         document.querySelector(".k").classList.add("pressed");
         setTimeout(function(){
            document.querySelector(".k").classList.remove("pressed");
        },300);
         break;
     case "l":
         var audio=new Audio("./sounds/kick-bass.mp3")
         audio.play();
         document.querySelector(".l").classList.add("pressed");
         setTimeout(function(){
            document.querySelector(".l").classList.remove("pressed");
        },300);
         break;
         default:
             console.log("invalid key pressed!");
    }
 } )
