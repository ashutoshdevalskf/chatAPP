// messageController.js
const Message = require('../models/message');

exports.sendMessage = async (req, res) => {
    const { sender, receiver, content, chatRoom } = req.body;
    try {
        const newMessage = new Message({ sender, receiver, content, chatRoom });
        await newMessage.save();
        res.status(201).send('Message sent successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
