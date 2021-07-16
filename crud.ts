import express from 'express'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './schemas/schema'

const url = "mongodb://localhost:27017/moviesdb"; 
const connect = mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true  });


connect.then((db) => {
  console.log('Connected correctly to server!');
}, (err) => {
  console.log(err);
});

const app = express();
app.on('connect', () => express.json());

const server = new ApolloServer({
  schema
});
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
export default app
