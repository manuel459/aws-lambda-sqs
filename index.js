// Importa el módulo AWS SDK
const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

// Función principal de Lambda
exports.handler = async (event, context) => {
    try {

      console.log(event)

      const sqsMessage = JSON.parse(event.Records[0].body)
      console.log(sqsMessage)

        console.log('bucket ',sqsMessage.Records[0].s3.bucket.name)
        console.log('key ',sqsMessage.Records[0].s3.object.key)
        return {
            statusCode: 200,
            body: JSON.stringify('Mensaje procesado con éxito'),
        };
    } catch (error) {
        console.error('Error al procesar el mensaje:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Error al procesar el mensaje'),
        };
    }
};
