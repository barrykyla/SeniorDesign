var virus = [
    "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg"

]
chrome.browserAction.onClicked.addListener( function(tab){
    //...when it's calicked, run the extension on the current tab
    chrome.tabs.executeScript( null, {file: "populate_bugs.js"});
    
    // chrome.tabs.executeScript( null, {file: "populate_bugs.js"});
    // chrome.tabs.create({url: virus[1]}, callback)

    // function callback(data){
    //     console.log(data);
    // }
});