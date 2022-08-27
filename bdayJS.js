var dateInput= document.querySelector("#date-picker");
var luckyNoInput= document.querySelector("#lucky-no");
var checkBtn= document.querySelector(".check-btn");
var errorPara= document.querySelector("#error-para");
var outputArea= document.querySelector(".output-area");

checkBtn.addEventListener("click", function validateLuckyNo(){
    var luckyNoInputValue= luckyNoInput.value;
    var dateInputValue= dateInput.value;
    //console.log(dateInputValue);
    if(luckyNoInputValue=="" || dateInputValue=="")
    {
        alert("Please fill up all fields");
    }
    if(luckyNoInputValue>0){
        if(!(isNaN(luckyNoInputValue)))
        {
            errorPara.style.display= "none";
            determineLuck(dateInputValue,luckyNoInputValue);
        }
        else{
        showError("Not a number. Enter a nice positive number!");
    }
    }
    else{
        showError("Not a number. Enter a nice positive number!");
    }
    var sumOfDate;

}
);

function determineLuck(dt,luckyNo){
    var sum=0;
    dt=dt.replaceAll("-","");
    console.log(typeof(dt));
    for(let i=0;i<=(dt.length-1); i++){
        //console.log(dt.charAt(i));
        sum= sum+ parseInt((dt.charAt(i))); 
    }
    console.log(sum);
    if(sum%luckyNo===0){
        //console.log("Lucky");
        errorPara.style.display= "none";
        outputArea.style.display="block";
        outputArea.style.color=" rgb(9, 243, 67)";
        outputArea.innerHTML= "Congratulations 🥳!  You are Lucky!"
    }
    else{
        //console.log("Unlucky");
        errorPara.style.display= "none";
        outputArea.style.display="block";
        outputArea.style.color="rgb(230, 73, 73)";
        outputArea.innerHTML="Sorry. But what is luck- Luck is believing you're lucky"
    }
}
function showError(e){
    errorPara.style.display= "block";
    
    errorPara.style.color= "rgb(230, 73, 73)";
    errorPara.innerHTML=e;
}
