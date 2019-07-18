// ODA Details
module.exports.ODA_WEBHOOK_URL = process.env.BOT_WEBHOOK_URL || 'ODA_WEBHOOK_URL';
module.exports.ODA_WEBHOOK_SECRET = process.env.BOT_WEBHOOK_SECRET || 'ODA_WEBHOOK_SECRET';

// Smooch Details
exports.SMOOCH_APP_ID = process.env.SMOOCH_APP_ID || '5d1ddc11330b880010a727a0';
exports.SMOOCH_KEY_ID = process.env.SMOOCH_KEY_ID || 'app_5d300404171aa50010ee2d35';
exports.SMOOCH_SECRET = process.env.SMOOCH_SECRET || 'MIRwM8HvCfVU1YUgny1kxpI37T1Rvhz1eEtX2HjmMGQzVImGqACqiU2V5rogQ-4TNd12qwUpYaQQ32_0vqbHVw';
exports.SMOOCH_WEBHOOK_SECRET = process.env.SMOOCH_WEBHOOK_SECRET || 'qo4QkEUFuOdC0WA8HIJDfNRBQO4WSkDM5N9aZpmhyKc17m7uLjoedBN2-XkorZ1idlSOQBxurpk7ARBdf8s9Ng';

// General Details
exports.PROXY = process.env.PROXY || process.env.http_proxy;
exports.PORT = process.env.PORT || 8004;

// WhatsApp Sender event IDs
exports.EVENT_QUEUE_MESSAGE_TO_SMOOCH = "100";
exports.EVENT_QUEUE_MESSAGE_TO_BOT = "200";
exports.EVENT_SMOOCH_MESSAGE_DELIVERED = "1000";
exports.EVENT_PROCESS_NEXT_SMOOCH_MESSAGE = "2000";