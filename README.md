# 🌌 Omada Webhook to Discord for Docker
Fork of [Sefinek's original repository](https://github.com/sefinek/Omada-Webhook-to-Discord) modified to work in a Docker container.
An easy script for integrating Discord Webhooks with the Omada Controller. It allows sending logs from the controller to a selected Discord channel.

## Worth Knowing
✅ Discord @mentions for critical alerts (detected attack, errors, etc.)  
✅ [Middleware](middlewares/verifySecret.js) responsible for verifying the `shardSecret`.  
✅ Ability to enable censorship of sensitive data.  
✅ Built in [Node.js](https://nodejs.org) using the [Express.js](https://www.npmjs.com/package/express) framework.

## Omada Controller Endpoint
After running this script, webhooks from your controller should be directed to this endpoint:
```
POST /discord/webhook

http://omada-discord:8080/discord/webhook #if on the same docker network as controller
http://192.168.0.145:8080/discord/webhook #expose port 8080 and use host's ip address
```

## Docker Compose
Run this container alongside your Omada Controller and reference it by container name in the Controller settings (`http://omada-discord:8080/discord/webhook`).

```yaml
services:
  omada-discord:
    container_name: omada-discord
    # ports:
    #   - "8080:8080" #only need to expose if this container is not on the same docker network as your omada controller
    environment:
      NODE_ENV: production
      PORT: 8080
      SHARD_SECRET: your_secret #generated automatically by Omada, optional
      ENABLE_DATA_CENSORING: true
      DISCORD_WEBHOOK_URL: https://discord.com/api/webhooks/...
      DISCORD_ID: "1234567890" #optional, will tag this user in Discord
```


## MIT License
Original Node.js app: Copyright 2024-2025 © by [Sefinek](https://sefinek.net). All Rights Reserved.
