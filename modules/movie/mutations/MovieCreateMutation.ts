import { GraphQLObjectType } from "graphql";
import MovieType from "../MovieType";

const createUserMutation = new GraphQLObjectType({
    name: 'Create user',
    description: "Create user mutation",
    fields: () => ({
        movie: {
            type: MovieType
        }
    })
})
