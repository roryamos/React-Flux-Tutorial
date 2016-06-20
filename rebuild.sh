#!/bin/bash
docker-compose stop
docker-compose rm -af
docker-compose build
docker-compose up -d
