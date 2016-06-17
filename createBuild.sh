echo "Building web application in docker container"

docker build -t rajmohan:$1

docker tag -f rajmohan:$1 twit_webapp:latest

docker stop rajmohan/twit_webapp:latest

docker run --name my-webapp rajmohan/twit_webapp:latest