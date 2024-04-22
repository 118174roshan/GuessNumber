
let x=Math.trunc(Math.random()*20+1);

let score=20;
//document.querySelector('#score').te
let higsc=0;

document.querySelector('.chk').addEventListener('click' , function(){
    let guess_no=Number(document.querySelector('.guessNo').value);
    console.log(guess_no);
    if(!guess_no){
        document.querySelector('#msg').textContent=" No Number!";
        //document.querySelector('#score').textContent=score;
        //document.querySelector('#hscr').value=higsc;
    }
    //when guess is correct
    else if(guess_no===x){
        
        document.querySelector('.secretNo').textContent=x;
        document.querySelector('#msg').textContent="Correct Number";
        document.querySelector('#score').textContent=score;

        if(score>higsc){
            higsc=score;
            document.querySelector('#higscr').textContent=score;
        }
        document.querySelector('body').style.backgroundClip='#00bfff';
    }

    //when guess is wrong
    else if(guess_no !==x){
        if(score>1){
            document.querySelector('#msg').textContent= guess_no > x ? "Too large" :" Too Low";
            score--;
            document.querySelector('#score').textContent=score;

        }
        else{
            document.querySelector('#msg').textContent="You Lost the Game!";
            document.querySelector('#score').textContent="0";
        }

    }
});

/*
    //when guess is too high
    else if(guess_no>x){
        if(score>1){
            document.querySelector('#msg').textContent="Too large";
            score--;
            document.querySelector('#score').textContent=score;

        }
        else{
            document.querySelector('#msg').textContent="You Lost the Game!";
            document.querySelector('#score').textContent="0";

        }
        
        //document.querySelector('#hscr').value=score;

    }
    //when guesss is too low
    else if(guess_no<x){
        if(score>1){
            document.querySelector('#msg').textContent="Too Low";
            score--;
            document.querySelector('#score').textContent=score;
            //document.querySelector('#hscr').value=score;

        }
        else{
            document.querySelector('#msg').textContent="You Lost The Game";
       
            document.querySelector('#score').textContent="0";
        //document.querySelector('#hscr').value=score;

        }
        

    }

});
*/

document.querySelector('.again').addEventListener('click' , function(){
    x=Math.trunc(Math.random()*20+1);
    score=20;
    
    document.querySelector('.secretNo').textContent="?";
   document.querySelector('#msg').textContent="Start Guessing...";
   document.querySelector('#score').textContent=score;
   //document.querySelector('#higscr').textContent="0";
   guess_no=Number(document.querySelector('.guessNo').value='');
   console.log(guess_no);



 
});



