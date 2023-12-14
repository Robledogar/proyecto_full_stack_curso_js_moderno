import moongoose from 'mongoose'

const conectarBD = async() => {
    try {
        const db = await moongoose.connect(
        "mongodb+srv://root:root@cluster0.m0v52al.mongodb.net/?retryWrites=true&w=majority", 
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