DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS diary;

CREATE TABLE user (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE diary (
    diary_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    date DATE NOT NULL,
    time TIMESTAMP NOT NULL,
    entry_text VARCHAR(200) NOT NULL,
    category ENUM('Personal', 'Travel', 'Health', 'Work', 'Other') NOT NULL,
    PRIMARY KEY (diary_id),
    FOREIGN KEY (user_id) REFERENCES user("user_id")
);