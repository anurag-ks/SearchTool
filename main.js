searchUrbanDict = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "http://www.urbandictionary.com/define.php?term=" + query});
};

chrome.contextMenus.create({
  title: "Search in UrbanDictionary",
  contexts:["selection"],
  onclick: searchUrbanDict
});