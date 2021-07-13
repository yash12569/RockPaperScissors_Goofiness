function rpsgame(yourchoice)
{
console.log(yourchoice)
var humanchoice,badchoice;
humanchoice=yourchoice.id
badchoice=NumbeToChoice(randomTorpsInt());

console.log('computer choice',badchoice)

results=decide(humanchoice,badchoice)
console.log(results)

message=finalMessage(results);
console.log(message)





rpsFrontEnd(yourchoice.id,badchoice,message)

}

function randomTorpsInt()
{
    return Math.floor(Math.random() *3);
}
function NumbeToChoice(number)
{
    return ['rock','paper','scissors'][number];
}
function decide(yourchoice,computrchoice)
{
    var rpsdatabase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,"paper":0.5,"scissors":1},
         'scissors':{'paper':1,'scissors':0.5,'rock':0}
    };
   var yourscore=rpsdatabase[yourchoice][computrchoice];
   var computrscore=rpsdatabase[computrchoice][yourchoice];
   return [yourscore,computrscore];
}
function finalMessage([yourscore,computrscore])
{
    if(yourscore === 0)
    {
    return{'message':'youlost','color':'red'};
    }
else if(yourscore === 0.5)
{
    return{'message':'draw','color':'yellow'};
}
else{
    return{'message':'you won','color':'green'};
}

}



function rpsFrontEnd(humanimagechoice,badimagechoice,finalmessage)
{

    var imagedatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    };
    //let's remove all the images
   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove(); 



   var humanDiv=document.createElement('div')
   var badDiv=document.createElement('div')
   var messageDiv=document.createElement('div')



   humanDiv.innerHTML="<img src='" +imagedatabase[humanimagechoice] + "'height=150 wiidth=-150 style='box-shadow 0px 10px rgba(37,50,233,1);'>"
   badDiv.innerHTML="<img src='" +imagedatabase[badimagechoice] + "'height=150 width= 150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"
  messageDiv.innerHTML="<h1 style='color: " +finalmessage['color'] + "; font-size:60px; padding:30px; '>" +finalmessage['message'] +"</h1>"

   document.getElementById('flex-box-rps').appendChild(humanDiv)

   document.getElementById('flex-box-rps').appendChild(badDiv)
   document.getElementById('flex-box-rps').appendChild(messageDiv)
        




}