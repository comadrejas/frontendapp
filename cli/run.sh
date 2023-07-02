#!/bin/bash

PORT_NUMBER=8000
lsof -i tcp:${PORT_NUMBER} | awk 'NR!=1 {print $2}' | xargs kill
(cd app && gatsby develop &)

echo "WAITING TO HAVE GATSBY RUNNING...."
while ! curl http://localhost:8000/
do
  echo "waiting for GATSBY to be running....."
  sleep 6
done

open http://localhost:8000/