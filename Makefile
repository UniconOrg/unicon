build:
	bun run build

deploy: *
	rm -rf deploy/*
	cp -r dist/* deploy