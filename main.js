//Below is required.  These 3 lines are feeding the right objects to chrome
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


//Below is creating a new instance of the speech recognition. 
//we use the SpeechRecognition constructor and create a new instance.
let recognition = new SpeechRecognition();

//if you have certain grammer restrictions, you could put them here.
/*******const speechRecognitionList = new SpeechGrammarList();*********/