var btn=document.querySelectorAll('.btn');
var turn_play=document.querySelector('.turn_play')
var start=document.querySelector('.start')
var vitri_x=[];
var vitri_o=[];
var x_hit=1;
// funtion Start game
function starGame(){
    turn_play.innerHTML='Start in 3 seconds';
    setTimeout(function(){
        x_hit=Math.random()*2;
        if (x_hit >= 1){
        turn_play.innerHTML='Turn X';
        }else{
        turn_play.innerHTML='Turn O';
        }
    },3000);
    vitri_x=[];
    vitri_o=[];
    reStart();
}
function reStart(){
    btn.forEach((item,index) => reset(index));
}
function reset(index){
    btn[index].innerHTML='';
    btn[index].classList.remove('x_hit');
    btn[index].classList.remove('o_hit');
}
// Button Start game
start.addEventListener('click',starGame);

// button select position
        btn.forEach((item,index) => item.addEventListener('click',function(){
            if (turn_play.innerHTML === 'Start in 3 seconds' || turn_play.innerHTML === 'Welcome !!'
            || turn_play.innerHTML==='X Win' || turn_play.innerHTML==='O Win' || turn_play.innerHTML==='Draw'){
                console.log('!!!!!!!!!!!!!!');
            }else{
                if (x_hit >=1){
                    turnX(index);
                   }else{
                    turnO(index);
                   }
            }
            who_win();
        }))

// turn X
function turnX(index){
            if (vitri_x.find(element => element === index+1) !== undefined || 
            vitri_o.find(element => element === index+1) !== undefined){
                console.log("Please !! Let's hit position in empty");
            }else{
                turn_play.innerHTML='Turn O'
                vitri_x.push(index+1);
                btn[index].innerHTML='x';
                btn[index].classList.add('x_hit');
                x_hit=0;
            }
        }

// turn O
function turnO(index){
            if (vitri_o.find(element => element === index+1) !== undefined || 
            vitri_x.find(element => element === index+1) !== undefined){
                console.log("Please !! Let's hit position in empty");
            }else{
                turn_play.innerHTML='Turn X';
                vitri_o.push(index+1);
                btn[index].innerHTML='o';
                btn[index].classList.add('o_hit');
                x_hit=1;
            }
        }

// check winer
function who_win(){
    if (x_win() === false && o_win() === false && vitri_x.length + vitri_o.length ===9){
        turn_play.innerHTML='Draw';
    }
    if (x_win() === true){
        turn_play.innerHTML='X Win';
    }
    if (o_win() === true){
        turn_play.innerHTML='O Win';
    }
}

var condition_win=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

// Condition X win
function x_win(){
    var check=false;
    for (var i=0;i<condition_win.length;i++){
        var count=0;
        for (var j=0;j<condition_win[i].length;j++){
            for (var k=0;k<vitri_x.length;k++){
                if (condition_win[i][j] === vitri_x[k]){
                    count++;
                }
            }
        }
        if (count === 3){
           check = true;
           break;
        }
    }
    if (check === true){
        return true;
    }else{
        return false
    }
}

// Condition O win
function o_win(){
    var check=false;
    for (var i=0;i<condition_win.length;i++){
        var count=0;
        for (var j=0;j<condition_win[i].length;j++){
            for (var k=0;k<vitri_o.length;k++){
                if (condition_win[i][j] === vitri_o[k]){
                    count++;
                }
            }
        }
        if (count === 3){
           check = true;
           break;
        }
    }
    if (check === true){
        return true;
    }else{
        return false
    }
}