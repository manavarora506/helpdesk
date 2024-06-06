const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Create a new ticket
router.post('/', async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    console.log(`Would normally send email here with body: New ticket created by ${ticket.name}`);
    res.status(201).send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.send(tickets);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single ticket by ID
router.get('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).send();
    }
    res.send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a ticket
router.patch('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!ticket) {
      return res.status(404).send();
    }
    res.send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
