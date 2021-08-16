
//Fires when select omnibox for extension
chrome.omnibox.onInputStarted.addListener(function(){
  //Set a default ...
  console.log('event started...');
});

//fires when select option and press enter
chrome.omnibox.onInputEntered.addListener(function(text){
  //Open selection into a new tab
  chrome.tabs.create({url: text})
});

//fires when input changes e.g keyUp
chrome.omnibox.onInputChanged.addListener(function(text, suggest){

  //could send a request to my server to autofill resuts to add here....
  //{}

  // Add suggestions to an array
  var suggestions = [];
  //search reddit
  suggestions.push({ deletable: true, content: "https://www.reddit.com/search/?q=" + text, description: '(Search Reddit) '+text });
  //search twitter
  suggestions.push({ deletable: true, content: "https://twitter.com/search?q=" + text, description: '(Search Twitter) '+text });

  // Return  suggestions
  suggest(suggestions);
});
