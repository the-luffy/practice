-- create table query --
CREATE TABLE emp(
    id INTEGER AUTO_INCREMENT UNIQUE,
    name VARCHAR(255) NOT NULL,
    phone BIGINT,
    salary FLOAT NOT NULL CHECK (salary>25000),
    age INTEGER DEFAULT 25,
    Department VARCHAR(255) NOT NULL,
    gender ENUM("M","F","TG")    
);
/*(in enum)If a value is inserted that is not in the list, a blank value will be inserted.*/

-- Drop table --
DROP TABLE emp;

-- INSERT certain column value --
INSERT INTO emp(name,salary,gender)
VALUES("ABHISHEK",30000,"M");

-- tou need to put all the entries --
INSERT INTO emp VALUES(3,"abhi",1234567890,30000,"tech",22,"M");