import mongoose from 'mongoose';
import { server, app, httpServer } from './app.js';
import('dotenv/config');

const PORT = process.env.PORT || 3000;

const runServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect(
    'mongodb://localhost:27017/post_db',
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
      console.log('Mongodb connected successfully');
    }
  );
  httpServer.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

//start server
runServer();
