const express = require('express');
const router = express.Router();

const contacts = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Emily Johnson', email: 'emily.johnson@example.com' },
    { id: 4, name: 'Aarav Patel', email: 'aarav.patel@example.com' },
    { id: 5, name: 'Liu Wei', email: 'liu.wei@example.com' },
    { id: 6, name: 'Fatima Zahra', email: 'fatima.zahra@example.com' },
    { id: 7, name: 'Carlos Hernández', email: 'carlos.hernandez@example.com' },
    { id: 8, name: 'Olivia Kim', email: 'olivia.kim@example.com' },
    { id: 9, name: 'Kwame Nkrumah', email: 'kwame.nkrumah@example.com' },
    { id: 10, name: 'Chen Yu', email: 'chen.yu@example.com' },
];

router.get('/contacts', (req, res) => {
    res.render('index', { contacts });
});

router.get('/contacts/:id', (req, res) => {
    const { id } = req.params;
    const contact = contacts.find(c => c.id === Number(id));

    if (req.headers['hx-request']) {
        res.send(`
          <h2>${contact.name}</h2>
          <p><strong>Name:</strong> ${contact.name}</p>
          <p><strong>Email:</strong> ${contact.email}</p>
        `);
      } else {
        res.render('index', { contacts });
      }
});

module.exports = router;