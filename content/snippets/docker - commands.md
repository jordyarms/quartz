---
tags:
draft: false
title: docker - containers
enableToc: true
---
### Container Commands
#### Inspect Containers

List running containers
```sh
docker ps
```

List all containers
```sh
docker ps -a
```

Inspect container logs
```sh
docker logs CONTAINER_ID
```
#### Container Execution

Start a container:
```sh
docker start CONTAINER_ID
```

Stop a container
```sh
docker stop CONTAINER_ID
```

Run a container
```sh
docker run IMAGE_NAME
```

With interactive shell
```sh
docker run -it IMAGE_NAME /bin/bash
```

Detached mode
```sh
docker run -d IMAGE_NAME
```

Port remapping
```sh
docker run -p HOST_PORT:CONTAINER_PORT IMAGE_NAME
```
#### Manage Containers

Name a container
```sh
docker run --name CONTAINER_NAME IMAGE_NAME
```

Remove a container
```sh
docker rm CONTAINER_ID
```

Remove all stopped containers
```sh
docker container prune
```

### Image Commands
#### Image Inspection

List images
```sh
docker images
```
#### Images Creation

Build an image from a Dockerfile
```sh
docker build -t IMAGE_NAME PATH_TO_DOCKERFILE
```

Pull an image
```sh
docker pull IMAGE_NAME
```

#### Image Management
Remove an image
```
docker rmi IMAGE_NAME
```

Remove all unused images
```sh
docker image prune
```


### Network Commands
#### Network Inspection

List networks
```sh
docker network ls
```

Inspect a network
```sh
docker network inspect NETWORK_NAME
```
#### Network Creation

Create a network
```sh
docker network create NETWORK_NAME
```
#### Network Execution

Connect a container to a network
```sh
docker network connect NETWORK_NAME CONTAINER_NAME
```

Disconnect a container from a network
```sh
docker network disconnect NETWORK_NAME CONTAINER_NAME
```
#### Network Management

Remove all unused networks
```sh
docker network prune
```


### Volume Commands
#### Volume Inspection

List volumes
```sh
docker volume ls
```

Inspect a volume
```sh
docker volume inspect VOLUME_NAME
```
#### Volume Creation

Create a volume
```sh
docker volume create VOLUME_NAME
```
#### Volume Execution

Volume mapping
```sh
docker run -v HOST_PATH:CONTAINER_PATH IMAGE_NAME
```
#### Volume Management

Remove a volume
```sh
docker volume rm VOLUME_NAME
```

Remove all unused volumes
```sh
docker volume prune
```



### Docker System Commands

#### Docker System Management

Remove all unused data
```sh
docker system prune
```


