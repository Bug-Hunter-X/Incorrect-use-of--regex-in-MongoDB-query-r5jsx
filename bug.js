```javascript
const query = { name: 'John Doe' };

// Incorrect usage of $regex
const cursor = db.collection('users').find({ name: { $regex: query.name } });
```