const redisClient = require('../utils/redis'); // Assume you have this utility to check Redis status
const dbClient = require('../utils/db'); // Assume you have this utility to check DB status and get collections

class AppController {
  static async getStatus(req, res) {
    const redisAlive = await redisClient.isAlive();
    const dbAlive = await dbClient.isAlive();
    res.status(200).json({ redis: redisAlive, db: dbAlive });
  }

  static async getStats(req, res) {
    const usersCount = await dbClient.nbUsers();
    const filesCount = await dbClient.nbFiles();
    res.status(200).json({ users: usersCount, files: filesCount });
  }
}

module.exports = AppController;

