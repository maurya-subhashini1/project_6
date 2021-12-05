var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector("#txt-input")
var giveOutput = document.querySelector("#output")
var serverAPI = "https://api.funtranslations.com/translate/chef.json"

var getTranslation = (text) => {
    return serverAPI + "?" + "text=" + text
}


var errorHendler = (error) => {
    console.log("error occured", error)
    alert('something wrong server: try again after some time')

}


var clicktHander = () => {
    // we are taking input
    var takeInputText = txtInput.value

    fetch(getTranslation(takeInputText))

        .then(res => res.json())
        .then(json => {
            var translatedText = json.contents.translated
            giveOutput.innerText = translatedText
        })
        .catch(errorHendler)

}

btnTranslate.addEventListener("click", clicktHander)


// document.querySelector('textarea')
// btn-primary
// #input-btn
// "input[name="translator"]"