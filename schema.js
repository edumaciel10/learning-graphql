const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLID,
  GraphQLNonNull
} = require("graphql")

const  { Movies } = require( "./models/movie");

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



