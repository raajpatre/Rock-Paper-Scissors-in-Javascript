let ct=Number.parseInt(prompt("Enter number of rounds you want to play: "));
let userScore=0;
let computerScore=0;
let his=[]
let hisu=[]
for(let i=0;i<ct;i++){
    let user=prompt("ROCK PAPER OR SCISSORS?").toUpperCase();
    hisu.push(user)
    let comp=Math.floor(Math.random()*12);
    if (comp<4){
        comp="ROCK"
        his.push(comp)
        if (comp==user){
            continue
        }else if( user=="SCISSORS"){
            computerScore+=1;
        }else{
            userScore+=1;
        }
    }else if(comp<8){
        comp="PAPER"
        his.push(comp)
        if (comp==user){
            continue
        }else if( user=="ROCK"){
            computerScore+=1;
        }else{
            userScore+=1;
        }
    }else{
        comp="SCISSORS"
        his.push(comp)
        if (comp==user){
            continue
        }else if( user=="PAPER"){
            computerScore+=1;
        }else{
            userScore+=1;
        }
    }
}
if(userScore>computerScore){
    alert("Congratulations you won!")
}else if(computerScore>userScore){
    alert("Lmao Loser")
}else{
    alert("Lucky you, it's a DRAW")
}
console.log("COMPUTER")
console.log(his)
console.log("YOU")
console.log(hisu)