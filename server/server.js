const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
// const { authMiddleware } = require('./utils/auth')
// const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./schemas');

// async function startApolloServer(typeDefs, resolvers){
//   const app = express();
  
//   const server = new ApolloServer({
//     //remove playground: true before deployment
//   playground: true,
//   typeDefs,
//   resolvers,
//   // context: authMiddleware
//   });
//   await server.start();

//   server.applyMiddleware({ app });

//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());
  
//   const PORT = process.env.PORT || 3001;

//   try{
//     await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/streamer_db');
//     console.log("connected to MongoDB");
//   } catch (error) {
//     console.log(error);
//   }

//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//   }
  
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
//   });

//   app.listen(PORT, () => {
//   console.log(`API server running on port ${PORT}!`);
//   console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
// });
// }

// startApolloServer(typeDefs, resolvers);

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});