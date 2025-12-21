---
tags:
draft: false
title: uri - text fragment pattern
---




Text fragment allow for deep linking to specific text within a document.

```URL
#:~:text=
```

Browser support may vary! – The method is very simple, append the text fragment pattern to a url:
```URL
https://example.com#:~:text=INPUT_TEXT
```

Example:
```URL
https://en.wikipedia.org/wiki/Hypertext#:~:text=Jorge%20Luis%20Borges
```

Text fragments support further parameters if needed.
```URL
https://example.com#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```

Further Resources:
[https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments)