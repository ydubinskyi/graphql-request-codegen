import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  documents: "src/**/*.graphql",
  generates: {
    "./src/rickAndMortySdk.ts": {
      schema: "https://rickandmortyapi.com/graphql",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {},
    },
  },
};

export default config;
