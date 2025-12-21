---
tags:
---
Preferred filename:
```sh
compose.yaml
```

Alternative filename:
```sh
compose.yml
docker-compose.yaml
docker-compose.yml
```


Example:
```yaml
version: '3'
services:
web:
  image: nginx
  ports:
	- "80:80"
  volumes:
	- ./html:/usr/share/nginx/html
db:
  image: mysql
  environment:
	MYSQL_ROOT_PASSWORD: example
```
