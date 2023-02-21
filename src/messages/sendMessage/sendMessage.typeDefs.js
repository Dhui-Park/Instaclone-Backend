import { gql } from "apollo-server";

export default gql`
  type Mutation {
    senMessage(payload: String!, roomId: Int, userId: Int): MutationResponse!
  }
`;
