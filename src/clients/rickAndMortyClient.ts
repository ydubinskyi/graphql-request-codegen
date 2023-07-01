import { GraphQLClient } from "graphql-request";
import { getSdk } from "../rickAndMortySdk";

const client = new GraphQLClient("https://rickandmortyapi.com/graphql", {
  fetch,
});

export const rockAndMortyClient = getSdk(client);
