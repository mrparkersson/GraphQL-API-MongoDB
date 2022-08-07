import bcrypt from 'bcrypt';
import Post from '../models/Post.model.js';
import User from '../models/User.model.js';
import Memo from '../models/Memo.model.js';

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
    getAllMemo: async () => {
      return await Memo.find({});
    },
    getMemoById: async (_, args, __) => {
      const { id } = args;
      return await Memo.findById(id);
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
      await Post.findByIdAndDelete(id);
      return `Post with id: ${id} delelted successfully`;
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
      await User.findByIdAndDelete(id);
      return `User with id: ${id} deleted successfully`;
    },
    createNewMemo: async (_, args, __) => {
      const { title, description } = args;
      const newMemo = {
        title,
        description,
      };

      return await Memo.create(newMemo);
    },
    deleteMemoById: async (_, args, __) => {
      const { id } = args;
      await Memo.findByIdAndDelete(id);
      return `Memo with id: ${id} deleted successfully`;
    },
  },
};

export default resolvers;
