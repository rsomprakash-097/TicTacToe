let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#new-game");

let turnO=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("it was clicked!");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    });
});



const checkwinner=()=>{
    for(let pattern of winpatterns){
        //  console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1 != ""  && posval2 != ""  && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("winner",posval1);

                showWinner(posval1);
            }
        }
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
    
    
    
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

 }

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}
resetBtn.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);


