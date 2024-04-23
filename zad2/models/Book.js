class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        return books;
    }
}

const books = [
    new Book(1, 'The Gift of the Magi', 'O. Henry', 1905),
    new Book(2, 'The Last Leaf', 'O. Henry', 1907),
    new Book(3, 'War and Peace', 'Leo Tolstoy', 1869),
    new Book(4, 'Pride and Prejudice', 'Jane Austen', 1813),
    new Book(5, 'To Kill a Mockingbird', 'Harper Lee', 1960),
];

module.exports = Book;
