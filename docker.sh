#!/bin/bash

# Variables
IMAGE_NAME="pg-image"
CONTAINER_NAME="pg-container"
DOCKERFILE="Dockerfile"

# Check if the Dockerfile exists
if [[ ! -f $DOCKERFILE ]]; then
    echo "Creating Dockerfile..."
    cat <<EOF > $DOCKERFILE
FROM postgres

ENV POSTGRES_USER=sabbir
ENV POSTGRES_PASSWORD=sabbir2020hack
ENV POSTGRES_DB=hono_db

EXPOSE 5432
EOF
else
    echo "Dockerfile already exists. Skipping creation."
fi

# Check if the Docker image already exists
if [[ "$(docker images -q $IMAGE_NAME 2> /dev/null)" == "" ]]; then
    echo "Building Docker image: $IMAGE_NAME"
    docker build -t $IMAGE_NAME .
else
    echo "Docker image $IMAGE_NAME already exists. Skipping build."
fi

# Check if the Docker container is already running
if [[ "$(docker ps -q -f name=$CONTAINER_NAME)" != "" ]]; then
    echo "Docker container $CONTAINER_NAME is already running. Skipping run."
else
    # Check if the container exists but is not running
    if [[ "$(docker ps -aq -f name=$CONTAINER_NAME)" != "" ]]; then
        echo "Starting existing container $CONTAINER_NAME."
        docker start $CONTAINER_NAME
    else
        echo "Running new container: $CONTAINER_NAME"
        docker run --name $CONTAINER_NAME -p 5432:5432 -d $IMAGE_NAME
    fi
fi
