const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config');





const server = new ApolloServer({                                    //typedefs and resolvers are passed to the apollo server
    typeDefs,
    resolvers
});
mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDb Connected!!');
        return server.listen({ port:5000 });                           //apollo server opens up at this port
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    });