#!/bin/bash

docker build -t container .
docker run -p 81:81 container