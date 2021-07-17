import { GraphQLFloat, GraphQLString } from "graphql";
import MovieModel from "../MovieModel";
import MovieType from "../MovieType";

const updateMovie = {
    type: MovieType,
    args: {
        _id: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        producer: {
            type: GraphQLString,
        },
        rating: {
            type: GraphQLFloat,
        }
    },
    resolve: async (root, args) => {
        let movie = await MovieModel.findByIdAndUpdate(args._id, args);
        if (!movie) {
            throw new Error("Error to update movie")
        }
        return movie
    }
}

export default updateMovie
