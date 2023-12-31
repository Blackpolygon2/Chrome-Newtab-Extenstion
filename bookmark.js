document.addEventListener("DOMContentLoaded", () => {
    // Query bookmarks and display them
    chrome.bookmarks.getTree((bookmarks) => {
      const bookmarkList = document.getElementById("bookmark-list");
      displayBookmarks(bookmarks[0].children, bookmarkList);
    });
  });
  
  function displayBookmarks(bookmarks, parentElement) {
    bookmarks.forEach((bookmark) => {
      const listItem = document.createElement("li");
      if (bookmark.children) {
        listItem.textContent = bookmark.title;
        const sublist = document.createElement("ul");
        displayBookmarks(bookmark.children, sublist);
        listItem.appendChild(sublist);
      } else {
        const link = document.createElement("a");
        link.textContent = bookmark.title;
        link.href = bookmark.url;
        listItem.appendChild(link);
      }
      parentElement.appendChild(listItem);
    });
  }
  