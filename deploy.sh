#!/bin/sh

if [ -z "$1" ]; then
  DEPLOY_TYPE="build"
else
  DEPLOY_TYPE=$1
fi

if [ -z "${ENV_KEY}" ]; then
  echo "Missing ENV_KEY environment variable."
  return
fi

if [ -z "${DEPLOY_TAG}" ]; then
  echo "Missing DEPLOY_TAG environment variable."
  return
fi

docker run -e DEPLOY_TYPE="$DEPLOY_TYPE" -e DEPLOY_TAG=$DEPLOY_TAG -e ENV_KEY=$ENV_KEY -v $PWD:/app -v /var/run/docker.sock:/var/run/docker.sock --env-file .env danreynolds/deploymanager:0.0.1
