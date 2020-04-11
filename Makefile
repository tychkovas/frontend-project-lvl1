# Makefile brain-games

install:
	npm install

start:
	@echo "Launch all available brain games"
	node bin/brain-even.js 
	node bin/brain-calc.js
	node bin/brain-prime.js
	node bin/brain-gcd.js
	node bin/brain-progression.js

publish:
	npm publish --dry-run

make lint:
	npx eslint .

even: 
	node bin/brain-even.js

calc: 
	node bin/brain-calc.js

prime: 
	node bin/brain-prime.js

gcd: 
	node bin/brain-gcd.js

progression: 
	node bin/brain-progression.js

	