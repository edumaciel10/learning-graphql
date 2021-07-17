import { GraphQLString } from "graphql";
import Movies from "../MovieModel";
import MovieType from "../MovieType";

const deleteMovie = {
    type: MovieType,
    args: {
        _id: {
            type: GraphQLString
        }
    },
    resolve: async (root, args) => {
        let deletedMovie = await Movies.findByIdAndDelete(args._id);
        if (!deletedMovie) {
            throw new Error("Error to delete movie")
        }
        return deletedMovie
    }
}

export default deleteMovie
