function startGame(){ 
    let ct=Number.parseInt(prompt("Enter number of rounds you want to play: "));
    let userScore=0;
    let computerScore=0;
    let his=[]
    let hisu=[]
    let res=[]
    
    for(let i=0;i<ct;i++){
        let user=prompt("ROCK PAPER OR SCISSORS?").toUpperCase();
        hisu.push(user)
        let comp=Math.floor(Math.random()*12);
        if (comp<4){
            comp="ROCK"
            his.push(comp)
            if (comp==user){
                res.push("DRAW")
                continue
            }else if( user=="SCISSORS"){
                computerScore+=1;
                res.push("COMP WINNER")
            }else{
                userScore+=1;
                res.push("YOU WINNER")
            }
        }else if(comp<8){
            comp="PAPER"
            his.push(comp)
            if (comp==user){
                res.push("DRAW")
                continue
            }else if( user=="ROCK"){
                computerScore+=1;
                res.push("COMP WINNER")
            }else{
                userScore+=1;
                res.push("YOU WINNER")
            }
        }else{
            comp="SCISSORS"
            his.push(comp)
            if (comp==user){
                res.push("DRAW")
                continue
            }else if( user=="PAPER"){
                computerScore+=1;
                res.push("COMP WINNER")
            }else{
                userScore+=1;
                res.push("YOU WINNER")
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
    // console.log("COMPUTER")
    // console.log(his)
    // console.log("YOU")
    // console.log(hisu)
    let tableBody=document.getElementById("historyBody")
    let table=document.getElementById("scoreTable")

    tableBody.innerHTML="";

    for(let i=0;i<his.length;i++){
        let row = `<tr>
                    <td>${i + 1}</td>
                    <td>${hisu[i]}</td>
                    <td>${his[i]}</td>
                    <td>${res[i]}</td>
                    </tr>`;
        tableBody.innerHTML+=row;
    }
    table.style.display = "table";
}