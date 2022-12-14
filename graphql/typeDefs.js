import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }

  type User {
    id: ID
    username: String
    password: String
  }

  type Memo {
    id: ID
    title: String
    description: String
  }

  type Query {
    hello: String
    getAllPost: [Post!]!
    getPostById(id: ID): Post
    getUser: [User!]!
    getUserById(id: ID): User
    getAllMemo: [Memo!]!
    getMemoById(id: ID): Memo
  }

  type Mutation {
    createPost(title: String, description: String): Post
    deletePost(id: ID): String
    createNewUser(username: String, password: String): User
    deleteUserById(id: ID): String
    createNewMemo(title: String, description: String): Memo
    deleteMemoById(id: ID): String
  }
`;

export default typeDefs;
