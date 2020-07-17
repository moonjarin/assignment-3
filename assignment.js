let askFeet=500;
let friendArray=["faiza","shoshe","samantha","charu","nus","dola","ri"];
console.log("After converting into mile: "+feetToMile(askFeet));
console.log(woodCalculator(5,4,0));
console.log(brickCalculator(80));
console.log("tinyname not tiny friend is "+tinyFriend(friendArray));

function feetToMile(feet){
const mile=0.000189394;
return feet*mile;
}

function woodCalculator(chair,table,khat){
    let amountChair=1*chair;
    let amounttable=3*table;
    let amountkhat=5*khat;
    return "you will be able to make "+amountChair+" chair "+amounttable+" table "+amountkhat+" khat";
   }

   function brickCalculator(floor){
    if(floor<=10){
   return floor*15;
    }
    else if(floor<=20){
        return ((floor-10)*12)+(10*15);
    }
    else{
        return ((floor-20)*10)+(10*15)+(10*12);
    }
   }
   
function tinyFriend(catcharray){
    let tinyindex=0;
for(var i=0;i<catcharray.length;i++){
    if(catcharray[i].length<catcharray[tinyindex].length)
    tinyindex=i;
}
 return catcharray[tinyindex];
}
