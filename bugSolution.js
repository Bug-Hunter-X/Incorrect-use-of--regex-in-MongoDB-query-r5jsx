```javascript
const query = { name: 'John Doe' };

// Correct usage of $regex
const regex = new RegExp(query.name);
const cursor = db.collection('users').find({ name: { $regex: regex } });
```