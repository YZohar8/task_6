const express = require('express');
const app = express();

// חובה כדי לקרוא את ה-body בבקשות POST
app.use(express.urlencoded({ extended: true }));

// הגשת קבצים סטטיים (כמו index.html)
app.use(express.static('public'));

const correctUsername = 'admin';
const correctPassword = '1234';

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === correctUsername && password === correctPassword) {
    res.send('<h2>✓ התחברת בהצלחה (POST)</h2>');
  } else {
    res.send('<h2>✗ שם משתמש או סיסמה שגויים (POST)</h2>');
  }
});

app.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});