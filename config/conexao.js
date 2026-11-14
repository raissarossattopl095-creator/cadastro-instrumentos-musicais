
import dns from "node:dns";
import mongoose from "mongoose";
import "dotenv/config";

// Configurar DNS do Google
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Endereço protegido no arquivo .env
const url = process.env.MONGO_URI;

// Conectar ao MongoDB
const conexao = await mongoose.connect(url);

console.log("MongoDB conectado com sucesso!");

export default conexao;
