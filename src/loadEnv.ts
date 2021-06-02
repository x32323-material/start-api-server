import dotenv from 'dotenv';
dotenv.config();

const {
    SERVER_PORT
} = process.env;

export default {
    SERVER_PORT: <number>(SERVER_PORT || 3000),
}