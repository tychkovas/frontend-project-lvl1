# Makefile brain-games

install:
	npm install

start:
	npx node bin/brain-games.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .

	