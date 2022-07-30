import bcrypt from 'bcrypt';
import Post from '../models/Post.model.js';
import User from '../models/User.model.js';

const resolvers = {
  Query: {
    hello: () => {
      return 'Hello World';
    },
    getAllPost: async () => {
      return await Post.find({});
    },
    getPostById: async (_, args, __) => {
      const { id } = args;
      return await Post.findById(id);
    },
    getUser: async () => {
      return await User.find({});
    },
    getUserById: async (_, args, __) => {
      const { id } = args;
      return await User.findById(id);
    },
  },

  Mutation: {
    createPost: async (_, args, __) => {
      const { title, description } = args;
      const newPost = {
        title,
        description,
      };
      return await Post.create(newPost);
    },
    deletePost: async (_, args, __) => {
      const { id } = args;
      return await Post.findByIdAndDelete(id);
    },
    createNewUser: async (_, args, __) => {
      const { username, password } = args;
      const foundUser = await User.findOne({ username });

      if (foundUser) {
        throw new Error('User already exists');
      }

      const hashedPassword = bcrypt.hashSync(password, 16);
      const newUser = {
        username,
        password: hashedPassword,
      };

      return await User.create(newUser);
    },
    deleteUserById: async (_, args, __) => {
      const { id } = args;
      return await User.findByIdAndDelete(id);
    },
  },
};

export default resolvers;
