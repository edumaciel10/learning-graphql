import { GraphQLList, GraphQLObjectType } from "graphql";
import Movies from "../modules/movie/MovieModel";
import MovieType from "../modules/movie/MovieType";

export default new GraphQLObjectType({
    name: "Query",
    fields: () => ({
        movies: {
            type: new GraphQLList(MovieType),
            resolve: () => {
                const movies = Movies.find({})
                if (!movies) {
                    throw new Error('Error, not have movies')
                }
                return movies;
            }
        }
    })
})
