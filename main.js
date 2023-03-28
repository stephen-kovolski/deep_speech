const texts = document.querySelector(".texts");


// //Below is required.  This is feeding the right objects to chrome
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;



// //Below is creating a new instance of the speech recognition. 
// //we use the SpeechRecognition constructor and create a new instance.
const recognition = new SpeechRecognition();

// //THe below line allows the program to print speech as the user says it.  
// //If it was set to false, the program would wait until we finished talking to print everything we said.
recognition.interimResults = true;


// //if you have certain grammer restrictions, you could put them here.
// /*******const speechRecognitionList = new SpeechGrammarList();*********/


let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  p.innerText = text;
  texts.appendChild(p)

  if(e.results[0].isFinal){
    p=document.createElement('p');
  }
  
    p = document.createElement("p");
  
});

recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();

