import express from 'express'
import mongoose from 'mongoose'
import cors  from 'cors'
import { ApolloServer } from 'apollo-server-express'
import schema from './schemas/schema'

const url = "mongodb://localhost:27017/moviesdb"; 
const connect = mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true  });


connect.then((db) => {
  console.log('Connected correctly to server!');
}, (err) => {
  console.log(err);
});


const server = new ApolloServer({
  schema
});

const app = express();

app.use(express.json());
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
