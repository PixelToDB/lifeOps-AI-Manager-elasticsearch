import { Client } from "@elastic/elasticsearch";
import dotenv from "dotenv";
dotenv.config();

export const esClient = new Client({
  node: process.env.ELASTIC_URL,
  auth: {
    username: process.env.ELASTIC_USERNAME,
    password: process.env.ELASTIC_PASSWORD
  }
});