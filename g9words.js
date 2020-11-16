    
var score;
var timeleft;
var timer;
var playing = false;


    function show(id){
        document.getElementById(id).style.display = "block";
    }

    function hide(id){
        document.getElementById(id).style.display = "none";
    }

        
function startTimer(){
            
    timer = setInterval(function(){
        --timeleft;
        show("timer");
        document.getElementById("timeset").innerHTML = timeleft;
                
       if(timeleft == 0){
        stopTimer();
        show("gameOver");
        playing = false;
        clearText();
        hide("timer");
                    
        document.getElementById("gameOver").innerHTML = "<p>Game Over:</p><p>Your score is " + score + "</p>"
    }

                
                
    },1000);   
}
        
        
function stopTimer(){
    clearInterval(timer);
}
        
        
 document.getElementById("buttonReset").onclick  = function(){
     if(playing == false){
        playing = true;
         randomWords();
         hide("gameOver");
         hide("ready");
         timeleft = 60;
         score = 0;
         document.getElementById("scorevalue").innerText = score;
                
         startTimer();
         this.innerText = "Reset Game";  
                
     }else{
         location.reload();
     }  
 }
        
        
        
        
 var word =["Amat", "Rhoda", "Omobowale", "Lillian", "Gambia", "Nigeria", "Accept", "Action", "Address", "Administration", "Agency", "Agreement", "Attorney", "Audience", "Author", "Beautiful", "Behavior", "Believe", "Billion", "Dashboard", "Business", "Campaign", "Career", "Century", "Challenge", "Choice", "College", "Congress", "Decade", "Defense", "Design", "Determine", "Direction", "Discover", "Environment", "Evidence", "Expert", "Finally", "Finish", "Foreign", "Forward", "Future", "Game", "Generation", "History", "Identify", "Imagination", "Institution", "Memory", "Million", "Mother", "Nature", "Newspaper", "Official", "Policy", "Private", "Professional", "Quality", "Reality", "Recognize", "Research", "Resource", "Responsibility", "Scientist", "Significant", "Skill", "Source", "Standard", "Strategy", "Student", "Successful", "Technology", "Theory", "Together", "Tough", "Western", "Year", "Yes", "Zambia", ];

 function randomWords(){
             var x = Math.floor(Math.random()*word.length);
                        
             document.getElementById("screen").innerHTML = word[x];
            
             document.getElementById("tarea").onkeyup = function(){
                        
             document.getElementById("tarea").value;
                        
             if(this.value === word[x]){
                 show("right");
                 hide("wrong");
                 
                 document.getElementById("tarea").value = "";
                 
                 setTimeout(function(){
                     hide("right");
                 }, 1000);

                 ++score;
                 document.getElementById("scorevalue").innerHTML = score;
                 randomWords();
                    
             }else{
                 show("wrong");
                hide("right");
                 
                setTimeout(function(){
                    hide("wrong");
                }, 1000);
             }
     }
 }
   
        
function clearText(){
            document.getElementById("screen").innerText = "";
        }
