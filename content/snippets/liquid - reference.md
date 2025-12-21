---
tags:
---
for loop conditional

```liquid
{% for item in site.library %}
{% if item.anti == false %}
{% assign include = item %}
{% include card-image-bg.html %}
{% endif %}
{% endfor %}
```


access jekyll site data

```liquid
  <select id="category-filter">
    <option value="">All Categories</option>
    {% for category in site.data.filters.categories %}
    <option value="{{ category | downcase }}">{{ category }}</option>
    {% endfor %}
  </select>
```


```liquid
    {% for type in site.data.filters.types %}
    <option value="{{ type | downcase }}">{{ type }}</option>
    {% endfor %}
```


