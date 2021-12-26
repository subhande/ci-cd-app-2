docker rm --force app-2
docker build -t app-2 .
docker run -d --net app --name app-2 -p 6000:6000 -t app-2
# docker-compose up -d --build
