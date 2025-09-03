backend:
	docker exec -it microblog-api-microblog-api-1 \
  gunicorn -b :5000 --access-logfile - --error-logfile - microblog:app

docker:

	docker build -t react-microblog .

debugfrontend:
	docker run -p 8080:80 --name microblog -d react-microblog
debug_api:
	docker run -it --rm microblog-api ls -l	
checklogs:

	docker compose logs frontend	

rebuild_api:
	docker compose build --no-cache api
	docker compose up -d
	docker compose logs -f api
