#!/bin/bash
cd /volume1/homes/farukguven/DFG/Projeler/Farukguvencom/farukguven || { echo "Failed to cd"; exit 1; }
/usr/local/bin/docker build -t farukguven-site .
/usr/local/bin/docker rm -f farukguven-site || true
/usr/local/bin/docker run -d -p 3000:3000 --name farukguven-site --restart always farukguven-site
