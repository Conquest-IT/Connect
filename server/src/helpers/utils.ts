// Exclude keys from user
function exclude(user: object, keys: string[]) {
    for (let key of keys) {
        delete user[key as keyof typeof user];
    }

    return user;
}

export { exclude };
