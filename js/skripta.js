var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;


document.querySelector(".img1").attributes;

for(var i=0;i<randomNumber1+1;i++)
    document.querySelector(".img1").setAttribute("src","images/dice"+i+".png");

 for(var j=0;j<randomNumber2+1;j++)
    document.querySelector(".img2").setAttribute("src","images/dice"+j+".png");


if(randomNumber1>randomNumber2)
{document.querySelector("h1").textContent="Player 1 wins!";}
else if(randomNumber1<randomNumber2){
document.querySelector("h1").textContent="Player 2 wins!";}
else{
document.querySelector("h1").textContent="Draw!";
}
