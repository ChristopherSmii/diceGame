let sNum=1001;
let helpingValue=true;
let tempNum=0;
function roll(n){
return Math.floor(Math.random()*n);
}
function player1(){
    while(helpingValue){
        let playerNumber1=tempNum;
        if(!playerNumber1){
            playerNumber1=sNum;
        }
        tempNum=roll(playerNumber1);
        document.getElementsByClassName("playerDie")[0].innerHTML=tempNum;
        helpingValue=false;
        if(!tempNum){
            document.getElementsByClassName("playerDie")[1].innerHTML="Winner";
        }
    }
}
function player2(){
    while(!helpingValue){
        let playerNumber2=tempNum;
        if(!playerNumber2){
            playerNumber2=sNum;
        }
        tempNum=roll(playerNumber2);
        document.getElementsByClassName("playerDie")[1].innerHTML=tempNum;
        helpingValue=true;
        if(!tempNum){
            document.getElementsByClassName("playerDie")[0].innerHTML="Winner";
        }
    }
}

