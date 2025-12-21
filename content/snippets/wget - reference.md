---
tags:
title: wget - reference
draft: false
---


### mirror a site

```zsh
wget -mkEpnp -P Downloads/ https://libraryofbabel.info
```

Equivalent to
```zsh
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent -P Downloads/ https://libraryofbabel.info
```


Notes
- `‘-k’` | `‘--convert-links’`
- `‘-m’` | `‘--mirror’`
- `‘-p’` | `‘--page-requisites’`
- `‘-E’` | `--adjust-extension`
- `‘-l depth’` | `‘--level=depth’`
- `‘-r’` | `‘--recursive’`
- `-e robots=off` — DOES NOT RESPECT ROBOTS :( 
### download list from file


```sh
wget -i url-list.txt
```

Example Input
```url-list.txt
https://website.com/img/image_001.png
http://place.com/css/style.css
https://thing.com/object.html
```

Advanced with placing location to Downloads and show progress of downloads
```sh
wget -i url-list.txt -P Downloads/ -q --show-progress
```