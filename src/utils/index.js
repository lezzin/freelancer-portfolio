import { KIT_TYPES } from "../constants";

export function sortKitsByFeatured(kitsArray) {
    return [...kitsArray].sort((k1, k2) => {
        const firstElementIsFeatured = k1.type === KIT_TYPES.featured && k2.type !== KIT_TYPES.featured;
        const secondElementIsFeatured = k1.type !== KIT_TYPES.featured && k2.type === KIT_TYPES.featured;

        if (firstElementIsFeatured) {
            return -1;
        }

        if (secondElementIsFeatured) {
            return 1;
        }

        return 0;
    });
}

export function getUsers(team, userId) {
    return team.reduce(
        ([selectedUser, otherUsers], user) => {
            if (user.id === userId) {
                return [user, otherUsers];
            }
            return [selectedUser, [...otherUsers, user]];
        },
        [null, []]
    );
}
