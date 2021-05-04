# E-Commerce-Back-End

To-Do: 
- Alter the product-routes.js file with the create product code 
- Routes index.js file 
- Complete README with relevant information

## Description 

[GitHub Repository](https://github.com/cikennedy/E-Commerce-Back-End)


## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [User Story](#userstory)

## Installation

In order for this application to run properly, please have Node.js, MySQL, and Insomnia working on your machine. Please navigate to the Develop folder within the repository and run 'npm i' on the command line to install the packages required for the application to successfully run. 

## Usage 

[Video Walkthrough](Walkthroughlink)

## Mock-Up

The following animation shows the application's GET routes to return all categories, all products, and all tags being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tags,” “GET Categories,” and “GET All Products.”.](./Assets/13-orm-homework-demo-01.gif)

The following animation shows the application's GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:

![In Insomnia Core, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”](./Assets/13-orm-homework-demo-02.gif)

The following animation shows the application's POST, PUT, and DELETE routes for categories being tested in Insomnia Core:

![In Insomnia Core, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”](./Assets/13-orm-homework-demo-03.gif)

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia Core.


Note that the functionality for creating the many-to-many relationship for products has already been completed for you.

> **Hint**: Be sure to look at the mini-project code for syntax help and use your model's column definitions to figure out what `req.body` will be for POST and PUT routes!

### Seed the Database

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

### Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the MySQL database on server start.

### Walkthrough Video: 37%

* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.

* The walkthrough video must show all of the technical acceptance criteria being met.

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.

  * Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.

  * Syncs Sequelize models to a MySQL database on the server start.

  * Includes column definitions for all four models outlined in the homework instructions.

  * Includes model associations outlined in the homework instructions.

* The walkthrough video must demonstrate how to create the schema from the MySQL shell.

mysql -u root -p

DROP DATABASE IF EXISTS ecommerce_db;
CREATE DATABASE ecommerce_db;

* The walkthrough video must demonstrate how to seed the database from the command line.

npm run seed

* The walkthrough video must demonstrate how to start the application’s server.

node server.js

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.

localhost:3001/api/categories

localhost:3001/api/products

localhost:3001/api/tags

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.

localhost:3001/api/categories/1

localhost:3001/api/products/1

localhost:3001/api/tags/1

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

POST
localhost:3001/api/categories
{
  "category_name": "Underwear"
}

PUT 
localhost:3001/api/categories/6
{
  "category_name": "Undergarments"
}

DELETE 
localhost:3001/api/categories/6

_____________________

POST
localhost:3001/api/products
{
 "product_name": "Nike Air Max",
 "price": 119.99,
 "stock": 30,
 "category_id": 1,
 "tagIds": [5]
}

PUT
localhost:3001/api/products/6
{
 "product_name": "Nike Air Max 270",
 "price": 149.99,
 "stock": 50,
 "category_id": 1,
 "tagIds": [5]
}

DELETE
localhost:3001/api/products/6

POST
localhost:3001/api/tags
{
  "tag_name": "Folk Music"
}

PUT
localhost:3001/api/tags/9
{
  "tag_name": "Bluegrass Music"
}

DELETE
localhost:3001/api/tags/9

* Satisfies all of the preceding acceptance criteria plus the following:

  * Connects to a MySQL database using the [MySQL2](https://www.npmjs.com/package/mysql) and [Sequelize](https://www.npmjs.com/package/sequelize) packages.

  * Stores sensitive data, like a user’s MySQL username, password, and database name, using environment variables through the [dotenv](https://www.npmjs.com/package/dotenv) package.

  * Syncs Sequelize models to a MySQL database on the server start.

  * Includes column definitions for all four models outlined in the homework instructions.

  * Includes model associations outlined in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme with description and a link to a walkthrough video.

## Review

You are required to submit BOTH of the following for review:

* A walkthrough video demonstrating the functionality of the application and all of the acceptance criteria being met.

* The URL of the GitHub repository. Give the repository a unique name and include a readme describing the project.