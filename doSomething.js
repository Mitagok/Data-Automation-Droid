/*chrome.browserAction.onClicked.addListener((activeTab) =>
{
    chrome.windows.create({ url: chrome.runtime.getURL("hello.html"), type: 
    "popup" });
});*/

chrome.browserAction.onClicked.addListener((activeTab) =>
{
    chrome.windows.create({ url: "https://www.google.com", type: 
    "popup" });
});
