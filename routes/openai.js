'use strict';

const root = (fastify) => {
  fastify.post('/sendMessage', async (req) => {
    if (!req.openai) {
      throw new Error('OpenAI plugin has not been configured');
    }
    const userMessage = req.body.message;
    // TODO: Need to add mechanism how to manage chats,
    // now chat gets created on every request
    const chat = req.openai.createChat();
    const response = await chat.message(userMessage);

    return { reply: response.message };
  });
};

module.exports = root;
