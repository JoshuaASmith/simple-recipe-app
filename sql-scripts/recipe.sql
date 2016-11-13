
DROP SCHEMA IF EXISTS recipe;

CREATE DATABASE recipe;

USE recipe;

CREATE TABLE ingredient (
  ID INT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
  name varchar(50) NOT NULL,
  category enum('dairy', 'herb', 'condiment', 'meat', 'produce', 'sauce', 'oil', 'pasta', 'bread') NOT NULL);

INSERT INTO recipe.ingredient (name, category) VALUES ('milk', 'dairy'), ('cheese', 'dairy'), ('thyme', 'herb'), ('taragon', 'herb'), ('ketchup', 'condiment'), ('mustard', 'condiment'), ('chicken', 'meat'), ('beef', 'meat'), ('broccoli', 'produce'), ('kale', 'produce'), ('soy sauce', 'sauce'), ('bbq sauce', 'sauce'), ('vegetable oil', 'oil'), ('olive oil', 'oil'), ('macaroni', 'pasta'), ('spaghetti', 'pasta'), ('french bread', 'bread'), ('cibatta', 'bread');

CREATE TABLE `recipe` (
  `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `category` enum('main dish','side dish','appetizer','dessert','breakfast') DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO recipe.recipe
(name, category)
VALUES
('macaroni and cheese', 'main dish'),
('fajitas', 'main dish'),
('rosemary potatoes', 'side dish'),
('blondies', 'dessert'),
('baked oatmeal', 'breakfast');
