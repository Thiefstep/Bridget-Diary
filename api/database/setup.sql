DROP TABLE IF EXISTS diary;

CREATE TABLE diary (
    id INT PRIMARY KEY,
    date DATE,
    time TIMESTAMP,
    text VARCHAR(200),
    category VARCHAR(20)
);