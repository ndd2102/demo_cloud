const amqp = require("amqplib");

const queue = "demo";
var connection;

// Kết nối RabbitMQ
async function connectRabbitMQ(message)
{
    try
    {
        connection = await amqp.connect("amqp://admin:admin@54.151.231.207");
        console.info("connect to RabbitMQ success");

        const channel = await connection.createChannel();
        await channel.assertQueue(queue);
        await channel.sendToQueue(queue, new Buffer(message),
        {
            // RabbitMQ - Khi khởi động lại, tiếp tục chạy
            persistent: true
        });

        connection.on("error", function(err)
        {
            console.log(err);
            setTimeout(connectRabbitMQ, 10000);
        });

        connection.on("close", function()
        {
            console.error("connection to RabbitQM closed!");
            setTimeout(connectRabbitMQ, 10000);
        });

    }
    catch (err)
    {
        console.error(err);
        setTimeout(connectRabbitMQ, 10000);
    }
}

connectRabbitMQ(message);