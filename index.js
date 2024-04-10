const textbox=document.getElementById("textbox");
const toFarahent=document.getElementById("toFarahent");
const tocelsius=document.getElementById("tocelsius");
const result=document.getElementById("result");
let temp;
function convert(){
    if(toFarahent.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"^^F";
    }else if(tocelsius.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"^^C";
    }
    else{
        result.textContent="please select the unit";
    }
}