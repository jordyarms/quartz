---
tags:
draft: false
title: yq - reference
---

append value

```sh
find . -name "*.md" -exec yq --front-matter="process" --output-format=yaml '
  with(select(.tags != "type/ingredient");
    .tags += ["type/ingredient"]
  )
' -i {} \;
```

combined execution

```sh
find . -name "*.md" -exec yq --front-matter="process" --output-format=yaml '
  with(select(.venue == "[[NO_VENUE_ONLINE]]");
    .tags += ["flag/online-only"] |
    del(.venue)
  ) |
  with(.description; 
    . |= sub("\n\n", "\n", "g")
  ) |
  del(.. | select(. == null or . == ""))
' -i {} \;
```

delete blank fields

```sh
find . -name "*.md" -exec yq --front-matter="process"  --output-format=yaml '
  with(.;
    del(.. | select(. == null or . == ""))
  )
' -i {} \;
```

insert filename as title

```zsh
find . -name "*.md" -exec zsh -c '
  filename=$(basename "$1" .md)
  yq --front-matter="process" --output-format=yaml "
    .title = \"$filename\"
  " -i "$1"
' _ {} \;

```


migrate property value and delete origin

```sh
find . -name "*.md" -exec yq --front-matter="process"  --output-format=yaml '
  with(select(has("url"));
    .link = .url |
    del(.url)
  )
' -i {} \;
```


wrap property with characters




```sh
find . -name "*.md" -exec yq --front-matter="process"  --output-format=yaml '
  with(select(has("organization"));
    .organization |= map("[[" + . + "]]")
  )
' -i {} \;
```