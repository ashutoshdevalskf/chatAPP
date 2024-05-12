
const ChatRoom = require('../models/chatRoomModel')

exports.createChatRoom = async (req, res) => {
    const { name, userId } = req.body;
    const chatRoom = new ChatRoom({ name, users: [userId] });
    await chatRoom.save();
    res.json({ message: 'Chat room created successfully', chatRoom });
};

exports.joinChatRoom = async (req, res) => {
    const { chatRoomId, userId } = req.body;
    const chatRoom = await ChatRoom.findById(chatRoomId);
    if (!chatRoom.users.includes(userId)) {
        chatRoom.users.push(userId);
        await chatRoom.save();
    }
    res.json({ message: 'Joined chat room successfully', chatRoom });
};
