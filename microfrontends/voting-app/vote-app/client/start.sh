#!/bin/bash

docker build -t voting-app .
docker run -p 80:80 voting-app