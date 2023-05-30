CREATE DATABASE possystem;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(250) NOT NULL,
    role VARCHAR(100) NOT NULL
);

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    barkodi VARCHAR(100) NOT NULL,
    emriProduktit VARCHAR(50) NOT NULL,
    llojiProduktit VARCHAR(100) NOT NULL,
    sasia INT,
    cmimiBlerjes INT,
    cmimiShitjes INT,
    tvsh INT,
    shuma INT
);