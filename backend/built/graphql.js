"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const fs_1 = __importDefault(require("fs"));
const apollo_server_lambda_1 = require("apollo-server-lambda");
const schema = fs_1.default.readFileSync('./src/schema.graphql', 'utf-8');
const Service_1 = __importDefault(require("./Service"));
const resolvers = {
    Query: {
        songs: () => {
            const songs = (0, Service_1.default)();
            return songs;
        },
    },
    Mutation: {
        createSong: () => { }
    }
};
const server = new apollo_server_lambda_1.ApolloServer({ typeDefs: schema, resolvers });
exports.handler = server.createHandler();
