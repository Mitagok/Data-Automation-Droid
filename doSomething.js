chrome.browserAction.onClicked.addListener((activeTab) =>
{
    chrome.windows.create({ url: chrome.runtime.getURL("hello.html"), type: 
    "popup" });
});
