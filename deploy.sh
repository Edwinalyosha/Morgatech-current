#!/bin/bash
set -e

# Run: docker inspect caddy --format '{{range $k, $v := .NetworkSettings.Networks}}{{$k}}{{end}}'
# then paste the result below
NETWORK="shared-network"

IMAGE="morgatech-app"
CONTAINER="morgatech-app"

git pull

docker build -t $IMAGE .

docker stop $CONTAINER 2>/dev/null || true
docker rm $CONTAINER 2>/dev/null || true

docker run -d \
  --name $CONTAINER \
  --network $NETWORK \
  --restart unless-stopped \
  --env-file /root/docker/morgatech/.env \
  $IMAGE

echo "Deployed — https://test.morgatechauto.com"
