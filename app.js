const textBox=document.getElementById('textBox')
const ToFaranhite=document.getElementById('toFaranhite')
const ToCelcius=document.getElementById('toCelicius')
const result=document.getElementById('result')
const button=document.getElementById('button')


let temp;


button.onclick=function(){

    event.preventDefault();  // Prevent form submission

    if(ToFaranhite.checked){

        temp=Number(textBox.value);

        temp=temp*9 / 5+32;

        result.textContent= temp+'°F'

    } else if(ToCelcius.checked){
        temp=Number(textBox.value);

        temp=(temp-32)*(5/9);

        result.textContent= temp.toFixed(1)+'°C'

    } else{

        result.textContent='Select the Unit'

    }


}





    


