const {ApolloServer, gql } = require('apollo-server')

//used as Fields
const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Query{
    books: [Book]
    authors: [Author]
  }
`
const books = [
  {
    title: 'Solid para ninjas',
  },
  {
    title: 'Clean Architecture',
  },
  {
    title: 'Redis para ninjas',
  },
  {
    title: 'Docker para iniciantes',
  }
]
const author = [
  {name:'Eduardo Maciel'},
  {name:'Eduardo Matos'},
  {name:'Eduardo Zuckerberg'},
  {name:'Eduardo Zuckerberg'},
]

const resolvers = {
  Query: {
    books: () => books,
    authors: () => author
  }
}

const server = new ApolloServer({ typeDefs, resolvers})

server.listen().then(({url}) => {
  console.log(`Olha ta nesse site aqui: ${url}`);
})
