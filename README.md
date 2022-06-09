# Texas-Teacher-Salaries


## Table of Contents

- [Overview](#Overview)
  - [Links](#Links)
- [My Process](#My-Process)
  - [Built With](#Built-With)
  - [What It Is](#What-It-Is)
  - [What I Learned](#What-I-Learned)
  - [Optimizations](#Optimizations)
- [Author](#Author)

## Overview

### Links

- [See salary information for teachers in Houston!](https://texas-teacher-salaries-api.herokuapp.com/)

## My Process

### Built With

- NodeJS
- ExpressJS

***DISCLAIMER***

Each school district may not provide the same information across the board, so please keep this in mind when reading the data.

### What It Is
This is an API that provides information regarding school districts in the four major cities in Texas (Austin, Dallas, Houston, and San Antonio).
As of June 9, 2022, information is only available for Houston School Districts.

Users can find the following information for each respective school district:
- city name
- district name
- superintendent name
- superintendent telephone
- superintendent email
- superintendent twitter
- board of education telephone
- board of education email
- board of education trustees (a url to the applicable school board)
- teacher salaries for school years 2021-2022 and 2022-2023 (if available)


#### Houston School Districts
| City          | School District|
| ------------- |:-------------:|
| aldine        | Aldine Independent School District |
| alief         | Alief Independent School District | 
| clear creek   | Clear Creek Independent School District |
| crosby        | Crosby Independent School District | 
| cypress       | Cypress Independent School District| 
| fort bend     | Fort Bend Independent School District  |
| galena park   | Galena Park Independent School District | 
| houston       | Houston Independent School District| 
| huffman       | Huffman Independent School District|
| humble        | Humble Independent School District | 
| katy          | Katy Independent School District  | 
| klein         | Klein Independent School District | 
| lamar         | Lamar Independent School District | 
| new caney     | New Caney Independent School District  | 
| pasadena      | Pasadena Independent School District   |
| shledon       | Sheldon Independent School District| 
| spring        | Spring Independent School District | 
| spring branch | Spring Branch Independent School District   | 
| tomball       | Tomball Independent School District| 


#### Endpoints/Parameters
Users can use one of two endpoints to obtain data:
- (1) https://texas-teacher-salaries-api.herokuapp.com/ will provide the above mentioned data for ALL of the Houston School Districts.
- (2) adding /(CITY NAME LISTED ABOVE GOES HERE) returns data only for the school district associated with the city. For example https://texas-teacher-salaries-api.herokuapp.com/houston will produce data for Houston Independent School District.
- (3) alternatively to number two above, users can also search by city via the following search format https://texas-teacher-salaries-api.herokuapp.com/?city=(CITY NAME LISTED ABOVE GOES HERE)

### What I Learned

I learned how to apply controllers, routers, and services to my API, as opposed to having everything in the server.js file.

Instead of putting all of the data into an object in a .js file, I learned how to place said data in a .json file and use it as my database.

In addition, I learned how to push my code to Heroku (which included learning how to troubleshoot Heroku error codes).

### Optimizations

I would like to provide the following future features/optimizations:
- (1) Add school districts for Austin, Dallas, and San Antonio;
- (2) Add additional search parameters;
- (3) Create documentation;
- (4) Create the frontend; and 
- (5) Move the data to MongoDB as opposed to using a .json file.

## Author

- Twitter - [@Fraktionn](https://twitter.com/Fraktionn)
- LinkedIn - [@michaelpreyna](https://www.linkedin.com/in/michaelpreyna/)
