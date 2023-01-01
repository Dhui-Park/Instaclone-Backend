"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_utils_1 = require("../users.utils");
var resolvers = {
    Query: {
        seeProfile: (0, users_utils_1.protectedResolver)(function (_, _a, _b) {
            var username = _a.username;
            var client = _b.client;
            return client.user.findUnique({
                where: {
                    username: username,
                },
            });
        }),
    },
};
exports.default = resolvers;
