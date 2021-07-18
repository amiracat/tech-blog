DROP DATABASE IF EXISTS blog_db;

CREATE DATABASE blog_db;

CREATE TABLE users(
    id INTEGER AUTO_INCREMENT NOT NULL,
    password VARCHAR(8),
    name VARCHAR(40),
    PRIMARY KEY (id)
);
CREATE TABLE blogposts(
    id INTEGER AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    contents VARCHAR(1000),
    date_created INTEGER,
    PRIMARY KEY (id)
);
CREATE TABLE comments(
    id INTEGER AUTO_INCREMENT NOT NULL,
    content VARCHAR(250),
    user_id INTEGER,
    blogpost_id INTEGER,
    date_created INTEGER,
    PRIMARY KEY (id)
);

SELECT * FROM users;
SELECT * FROM blogposts;
SELECT * FROM comments;


INSERT INTO users (name, password) values ('Amira', 'passwor1');

INSERT INTO blogposts (title, contents) values ('GitHub is hiring', 'Hey everyone. I am sending this note because GitHub is hiring developers, according to an anonymous source with information on sensitive matters. This is just a rumor but get your resume and cover letter ready to apply.');

INSERT INTO comments (content) values ('Thanks for the tip!');



-- -- show ALL books with authors
-- -- INNER JOIN will only return all matching values from both tables
-- SELECT title, firstName, lastName
-- FROM books
-- INNER JOIN authors ON books.authorId = authors.id;

-- -- show ALL books, even if we don't know the author
-- -- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
-- SELECT title, firstName, lastName
-- FROM books
-- LEFT JOIN authors ON books.authorId = authors.id;

-- -- show ALL books, even if we don't know the author
-- -- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
-- SELECT title, firstName, lastName
-- FROM books
-- RIGHT JOIN authors ON books.authorId = authors.id;
