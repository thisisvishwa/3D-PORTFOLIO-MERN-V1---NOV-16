```javascript
const express = require('express');

const ERROR_MESSAGE = 'An error occurred. Please try again later.';

function handleError(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({ message: ERROR_MESSAGE });
}

module.exports = handleError;
```