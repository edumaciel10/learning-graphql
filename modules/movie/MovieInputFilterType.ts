import { GraphQLFloat, GraphQLID, GraphQLInputObjectType, GraphQLString } from "graphql";

const MovieInputFilterType = new GraphQLInputObjectType({
    name: 'MovieFilter',
    description: 'Used to filter movies',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        producer: { type: GraphQLString },
        rating: {type: GraphQLFloat}
    })
})

export default MovieInputFilterType
