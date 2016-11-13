use recipes;

-- CREATE TABLE `recipe` (
--   `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(45) NOT NULL,
--   `category` enum('main dish','side dish','appetizer','dessert','breakfast') DEFAULT NULL,
--   PRIMARY KEY (`ID`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO recipes.recipe
(name, category)
VALUES
('macaroni and cheese', 'main dish'),
('fajitas', 'main dish'),
('rosemary potatoes', 'side dish'),
('blondies', 'dessert'),
('baked oatmeal', 'breakfast');
