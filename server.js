const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }),
);

app.use('/', (req, res) => res.send('<h1>Apollo Music Share API</h1>'));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
