import { GraphQLFloat, GraphQLObjectType, GraphQLResolveInfo, GraphQLString } from "graphql";
import MovieType from "../MovieType";
import MovieModel from "../MovieModel"


const addMovie =  {
    type: MovieType,
    args: {
        name: {
            type: GraphQLString,
        },
        producer: {
            type: GraphQLString,
        },
        rating: {
            type: GraphQLFloat,
        }
    },
    resolve: async(root, args) => {
        let movie = new MovieModel({
            name: args.name,
            producer: args.producer,
            rating: args.rating
        })
        let newMovie = await movie.save();
        if (!newMovie) {
            throw new Error("Error to save new movie");
        }
        return newMovie;
    }
    
}



export default addMovie
