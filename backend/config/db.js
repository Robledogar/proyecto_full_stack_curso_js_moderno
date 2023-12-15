import moongoose from 'mongoose'

const conectarBD = async() => {
    try {
        const db = await moongoose.connect(
            process.env.MONGO_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB conectado en: ${url}`);
        
    } catch (error) {
        console.log(`error: ${error.message}`);
        procces.exit(1);
    }
}

export default conectarBD;