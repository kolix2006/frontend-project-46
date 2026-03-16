install:
	npm ci

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm run test:coverage
