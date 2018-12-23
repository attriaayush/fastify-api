const mongoose = require('mongoose');
const routes = require('./routes/index');
const swagger = require('./config/swagger');
const fastify = require('fastify')({
    logger: true
});

mongoose.connect(`mongodb://127.0.0.1:27017/mycargarage`, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)
routes.forEach(route => {
    fastify.route(route);
});

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

(async () => {
    try {
        await fastify.listen(4000);
        fastify.swagger();
        fastify.log.info(`server is listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();
