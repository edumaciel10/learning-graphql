import { GraphQLObjectType } from "graphql";
import MovieType from "../MovieType";
import MovieInputFilterType from "../MovieInputFilterType";
import MovieModel from "../MovieModel"
const createUserMutation = new GraphQLObjectType({
    name: 'Create user',
    description: "Create user mutation",
    fields:{
        addMovie: {
            type: MovieType,
            args: {
                input: {
                    type: MovieInputFilterType
                }
            },
            resolve: (source, args) => {
                let movie = new MovieModel({
                    name: args.name,
                    producer: args.producer,
                    rating: args.rating
                })
                return movie.save()
            }
            
        }
    }
})

export default createUserMutation
