"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
var graphql_tools_1 = require("graphql-tools");
var loadedTypes = (0, graphql_tools_1.loadFilesSync)("".concat(__dirname, "/**/*.typeDefs.ts"));
var loadedResolvers = (0, graphql_tools_1.loadFilesSync)("".concat(__dirname, "/**/*.resolvers.ts"));
exports.typeDefs = (0, graphql_tools_1.mergeTypeDefs)(loadedTypes);
exports.resolvers = (0, graphql_tools_1.mergeResolvers)(loadedResolvers);
