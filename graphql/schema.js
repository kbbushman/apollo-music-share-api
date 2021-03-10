const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Song {
    _id: ID!
    title: String!
    artist: String!
    thumbnail: String!
    url: String!
    duration: Float!
    createdAt: String!
    updaetdAt: String!
  }

  input SongInputData {
    title: String!
    artist: String!
    thumbnail: String!
    url: String!
    duration: Float!
  }

  type RootQuery {
    getSongs: [Song]
  }

  type RootMutation {
    addSong(songInput: SongInputData): Song!
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
