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

  type Query {
    hello: String
    getAllPost: [Post!]!
    getPostById(id: ID): Post
    getUser: [User!]!
    getUserById(id: ID): User
  }

  type Mutation {
    createPost(title: String, description: String): Post
    deletePost(id: ID): Post
    createNewUser(username: String, password: String): User
    deleteUserById(id: ID): User
  }
`;

export default typeDefs;
