

let textToTranslate;
//console.log(textToTranslate);

function writeIt(){
    textToTranslate = document.getElementById("sourceLang").value;
    console.log("from input: ");
    console.log(textToTranslate);
    var oReq = new XMLHttpRequest;


    oReq.open("POST", 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190526T063700Z.f829db6669afabd2.99c804c5fa4006930bd8c6b0ebc17d5c768ab1e8&lang=ru&text='+textToTranslate, true)
    oReq.send();
    oReq.addEventListener('load', function (event) {
        json = JSON.parse(this.responseText);
        console.log(json);
    });
}




// oReq.addEventListener('load', function (event) {
//     json = JSON.parse(this.responseText);
//     console.log(json);
// });

// var el = document.getElementById('writeBtn');
// el.addEventListener('click', function (event) {
    
//     console.log(this.responseText);
// });


// oReq.open("POST", 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190526T063700Z.f829db6669afabd2.99c804c5fa4006930bd8c6b0ebc17d5c768ab1e8&lang=ru&text='+textToTranslate, true)
// /*
// .then((responseText) =>{
//     console.log(responseText);
// });
// */
// oReq.send('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190526T063700Z.f829db6669afabd2.99c804c5fa4006930bd8c6b0ebc17d5c768ab1e8&lang=ru&text='+textToTranslate);
