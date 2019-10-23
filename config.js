// CONFIG to be USED WITH docker-compose

module.exports = {
    serverPort: 3333,
    mongoURL: process.env.MONGO_URI,
    chainUrl: process.env.NODE_URI,
    saveRequestsMetrics: true,
    maxSkip: 500000,
    maxTimeForOperetion: 60000, // 60sec
    clearOperationsTimer: 10000, // 10sec
};
