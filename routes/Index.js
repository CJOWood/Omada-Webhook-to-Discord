const router = require('express').Router();

// Controllers
const DiscordIntegrationController = require('../controllers/DiscordIntegration.js');

// Middlewares
const verifyShardSecret = require('../middlewares/verifySecret.js');

// Endpoints
router.post('/discord/webhook', verifyShardSecret, DiscordIntegrationController);

module.exports = router;