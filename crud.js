const express = require('express');
const mongoose = require('mongoose');
const {MovieSchema, MovieType, queryType } = require('./schema');
const cors = require('cors'); 

const { ApolloServer } = require('apollo-server-express'); 

const url = "mongodb://localhost:27017/moviesdb"; 
const connect = mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true  });

connect.then((db) => {
  console.log('Connected correctly to server!');
}, (err) => {
  console.log(err);
});

const server = new ApolloServer({
  schema: MovieSchema,
  typeDefs: MovieType
});

const app = express();

app.use(express.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
