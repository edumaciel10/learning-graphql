import { GraphQLObjectType } from "graphql";

import UserMutations from "../modules/movie/mutations"

const MutationType = new GraphQLObjectType({
    name: 'Mutations',
    fields: UserMutations
    
})

export default MutationType
