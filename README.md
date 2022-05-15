# @drstrain/database

<img src="docs/logo.png">

A fast, scalable in-memory for key-value database that support multiple features:

- Zero dependency
- Typescript supported
- 100% test coverage
- Security guaranteed
- Easily embeddable inside
- Has simple synchronous API

# Install

```bash
# using npm
npm install --save @drstrain/database

# using yarn
yarn add @drstrain/database
```

# Example usage

Create a new Database instance.

```javascript
const Database = require('@drstrain/database');
const db = new Database();
```

Storing data to key.

```javascript
const data = {
  username: 'drstrain',
  secret: {
    notes: [],
    key: 'somesecret',
  }
}
db.set('key', data);
```

Querying data from key string.

```javascript
const val = db.get('key');
console.log(val);
```

# License

Licensed under <a href="/LICENSE">MIT</a>