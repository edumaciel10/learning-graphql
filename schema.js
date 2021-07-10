const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLNonNull
} = require("graphql")

const  { Movies } = require( "./models/movie");
console.log(Movies.find({}));
const MovieType = new GraphQLObjectType({
  name: 'movie',
  description: "Graphql Movie Type",
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: (movie) => movie._id
    },
    name: {
      type: GraphQLString,
      resolve:(movie) => movie.name
    },
    producer: {
      type: GraphQLString,
      resolve: (movie) => movie.producer
    },
    rating: {
      type: GraphQLFloat,
      resolve: (movie) => movie.rating,
    }
  })
})

const queryType = new GraphQLObjectType({
  name: 'Query',
  description: "get movie",
  fields: () => ({
    movie: {
      type: MovieType,
      args: {
        id: {
          description: 'id of movie',
          type: GraphQLString
        }
      }
    },
  }),
  resolve: () => (Movies.find({})),
})

const MovieSchema = new GraphQLSchema({
  query: queryType,
});

module.exports = {
  queryType,
  MovieType,
  MovieSchema
}



