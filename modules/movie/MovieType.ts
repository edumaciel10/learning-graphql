import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLFloat } from "graphql";

const MovieType = new GraphQLObjectType({
    name: 'movie',
    description: "Graphql Movie Type",
    fields: () => ({
        id: {
            type: GraphQLID,
            resolve: (movie) => movie.id
        },
        name: {
            type: GraphQLString,
            resolve: (movie) => movie.name
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

export default MovieType
