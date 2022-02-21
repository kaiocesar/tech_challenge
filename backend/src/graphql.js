const fs = require('fs');
const { ApolloServer, gql } = require('apollo-server-lambda');
const schema = fs.readFileSync('./src/schema.graphql', 'utf-8');
const { get_songs_list } = require('./service');

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

exports.handler = server.createHandler();