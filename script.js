const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890"
const symbolsSet="!@#$%^&*()_+?/"

const getUpper = document.getElementById("upper-case");
const getlower = document.getElementById("lower-case");
const getnumber = document.getElementById("numbers");
const gettotal = document.getElementById("total-char");
const getsymbols = document.getElementById("symbols");

const generateRandomData=(dataset)=>{
return dataset[Math.floor(Math.random()* dataset.length)];
}

const passBox=document.getElementById("pass-box");
const generatepassword=(password="")=>{
    if(getUpper.checked){
        password+=generateRandomData(upperSet)
    }
    if(getlower.checked){
        password+=generateRandomData(lowerSet)
    }
    if(getsymbols.checked){
        password+=generateRandomData(symbolsSet)
    }
    if(gettotal.checked){
        password+=generateRandomData(totalSet)
    }
    if(getnumber.checked){
        password+=generateRandomData(numberSet)
    }
    if(password.length< gettotal.value){
        return generatepassword(password);
    }
    passBox.innerText=truncateString(password,gettotal.value);

}
document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatepassword();
    }
)
function truncateString(str,num){
    if(str.length> num){
        let subsStr= str.substring(0,num);
        return subsStr;
    }
    else{
        return str;
    }
}