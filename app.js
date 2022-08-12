var txtinput= document.querySelector("#input");
var button= document.querySelector("#button");
var output= document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/hodor.json";

function URLgenerator(text){
    return serverURL+"?"+"text="+text;
}

function clickEventHandler()
{
    var inputText= txtinput.value;
    console.log(inputText);
   fetch(URLgenerator(inputText))
   .then((response)=>response.json())
   .then((json)=>
   {
    var traslatedTxt=json.contents.translated;
    output.innerText=traslatedTxt;}
    )
   
}

button.addEventListener("click", clickEventHandler);