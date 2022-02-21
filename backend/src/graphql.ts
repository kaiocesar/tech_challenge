import fs from 'fs';
import { ApolloServer, gql } from 'apollo-server-lambda';
const schema = fs.readFileSync('./src/schema.graphql', 'utf-8');
import get_songs_list from './Service';

const resolvers = {
    Query: {
        songs: () => {
            const songs = get_songs_list();
            return songs
        },
    },
    Mutation: {
        createSong: () => {}
    }
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

export const handler = server.createHandler();