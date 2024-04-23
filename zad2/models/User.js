class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        return users;
    }
}

const users = [
    new User(1, 'User1'),
    new User(2, 'User2'),
    new User(3, 'User3'),
    new User(4, 'User4'),
    new User(5, 'User5'),
];

module.exports = User;
