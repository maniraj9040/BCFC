'use strict';

module.exports = {
  metadata: () => ({
    name: 'getWebhookChannelName',
    properties: {
      outputChannelName: {
        required: true,
        type: 'string'
      },
    },
    supportedActions: []
  }),
  invoke: (conversation, done) => {
    // perform conversation tasks.
    let output = 'others';
    const channelType = conversation.channelType();
    const {
      outputChannelName
    } = conversation.properties();

    if (channelType == 'webhook') {
      const {
        metadata
      } = conversation.rawPayload();

      if (metadata) {
        const {
          webhookChannel
        } = metadata;
        if (webhookChannel) {
          output = webhookChannel;
        }
      }
    }



    conversation.variable(outputChannelName, output);
    conversation.transition();
    done();

  }
};