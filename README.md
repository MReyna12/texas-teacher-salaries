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

- [See salary information for teachers in Austin, Dallas, Houston, and San Antonio!](https://texas-teacher-salaries-api.herokuapp.com/)

## My Process

### Built With

- NodeJS
- ExpressJS

***DISCLAIMER***

Each school district may not provide the same information across the board, so please keep this in mind when reading the data. I continue to add school districts and revise information as it is updated publicly. If there are any school districts that I missed that are part of the metro areas for Austin, Dallas, Houston, or San Antonio, please let me know and I will consider adding them to the database. 

### What It Is
This is an API that provides information regarding school districts in the four major cities in Texas (Austin, Dallas, Houston, and San Antonio).

If publicly available, users can find the following information for each respective school district:
- city name
- district name
- superintendent name
- superintendent telephone
- superintendent email
- superintendent twitter
- board of education telephone
- board of education email
- board of education trustees (a url to the applicable school board)
- teacher salaries for school years 2021-2022 and 2022-2023


#### Houston Metro (houston_metro)
| City          | School District|
| ------------- |:-------------:|
| aldine        | aldine independent school district      |
| alief         | alief independent school district       | 
| clear creek   | clear creek independent school district |
| crosby        | crosby independent school district      | 
| cypress       | cypress independent school district     | 
| fort bend     | fort bend independent school district   |
| galena park   | galena park independent school district | 
| houston       | houston independent school district     | 
| huffman       | huffman independent school district     |
| humble        | humble independent school district      | 
| katy          | katy independent school district        | 
| klein         | klein independent school district       | 
| lamar         | lamar independent school district       | 
| new caney     | new caney independent school district   | 
| pasadena      | pasadena independent school district    |
| shledon       | sheldon independent school district     | 
| spring        | spring independent school district      | 
| spring branch | spring branch independent school district   | 
| tomball       | tomball independent school district     | 

#### San Antonio Metro (san_antonio_metro)
| City          | School District|
| ------------- |:-------------:|
| boerne        | boerne independent school district      | 
| castroville   | medina valley independent school district   |
| la vernia     | la vernia independent school district   |  
| live oak      | judson independent school district      |
| marion        | marion independent school istrict      |
| new braunfels | comal idependent school district       |
| new braunfels | new braunfels independent school district   | 
| san antonio   | alamo heights independent school district   |
| san antonio   | east central independent school district    |
| san antonio   | edgewood independent school district    |
| san antonio   | fort sam houston independent school district|
| san antonio   | harlandale independent school district  |
| san antonio   | lackland independent school district    |
| san antonio   | north east independent school district  | 
| san antonio   | northside independent school district   | 
| san antonio   | san antonio independent school district |
| san antonio   | south san independent school district   |
| san antonio   | southside independent school district   |
| san antonio   | southwest independent school district   |
| schertz       | schertz cibolo universal city independent school district  |
| seguin        | seguin independent school district      |
| somerset      | somerset independent school district    |
| universl city | randolph field independent school district  |

#### Austin Metro (austin_metro)
| City          | School District|
| ------------- |:-------------:|
| austin        | austin independent school district      |
| austin        | eanes independent school district       |
| austin        | lake travis independent school district |
| bastrop       | bastrop independent school district     |
| del valle     | del valle independent school district   |  
| dripping springs   | dripping springs independent school district |
| elgin         | elgin independent school district       |
| georgetown    | georgetown independent school district  | 
| hutto         | hutto independent school district       |
| kyle          | hays consolidated independent school district|
| lago vista    | lago vista independent school district  |
| leander       | leander independent school district     |
| liberty hill  | liberty hill independent school district|
| manor         | manor independent school district       | 
| marble falls  | marble falls independent school district|
| pflugerville  | pflugerville independent school district|
| round rock    | round rock independent school district  |
| taylor        | taylor independent school district      |
| wimberley     | wimberley independent school district   |

#### Dallas Metro (dallas_metro)
| City          | School District|
| ------------- |:-------------:|
| allen         | allen independent school district       |
| arlington     | arlington independent school district   |
| bedford       | hurst-euless-bedford independent school district      |
| burleson      | burleson independent school district    |
| carrollton    | carrollton-farmers branch independent school district |
| cedar hill    | cedar hill independent school district  |
| cleburne      | cleburne independent school district    |
| coppell       | coppell independent school district     |
| coriscana     | coriscana independent school district   |
| dallas        | dallas independent school district      |
| dallas        | highland park independent school district   |
| denison       | denison independent school district     |
| denton        | denton independent school district      |
| duncanville   | duncanville independent school district |
| flower mound  | lewisville independent school district  |
| fort worth    | castleberry independent school district |
| fort worth    | eagle mountain saginaw independent school district    |
| fort worth    | fort worth independent school district  |
| frisco        | frisco independent school district      |  
| garland       | garland independent school district     |
| grand prairie | grand prairie independent school district   |
| grapevine     | grapevine-colleyville independent school district     |
| halton city   | birdville independent school district   |
| irving        | irving independent school district      |
| justin        | northwest independent school district   |
| kaufman       | kaufman independent school district     |
| keller        | keller independent school district      |
| lake dallas   | lake dallas independent school district |
| lake worth    | lake worth independent school district  |
| lancaster     | lancaster independent school district   |
| mansfield     | mansfield independent school district   |
| mckinney      | mckinney independent school district    |
| mesquite      | mesquite independent school district    |
| plano         | plano independent school district       |
| richardson    | richardson independent school district  |
| rockwall      | rockwall independent school district    |
| southlake     | carroll independent school district     |


#### Search Parameters
Users can use the following url and search parameters to obtain data:
- (1) https://texas-teacher-salaries-api.herokuapp.com/ will provide the above mentioned data for ALL of the school districts in the Austin, Dallas, Houston, and San Antonio metro areas.
- (2) search parameters:
  - metro (example metro=houston_metro) - provides data for all school districts in the applicable metro area
  - metro + district_name (example metro=houston_metro&district_name=Houston Independent School District) - provides data for the school district in the       applicable metro area
  - metro + city (example metro=houston_metro&city=aldine) - provides data for the school districts within the city and applicable metro area

The search paramters are currently case sensitive, so please refer to the charts above to determine appropriate case sensitivity. 

### What I Learned

I learned how to apply controllers, routers, and services to my API, as opposed to having everything in the server.js file.

Instead of putting all of the data into an object in a .js file, I learned how to place said data in a .json file and use it as my database.

In addition, I learned how to push my code to Heroku (which included learning how to troubleshoot Heroku error codes).

### Optimizations

I would like to provide the following future features/optimizations:
- (1) ~~Add school districts for Austin, Dallas, and San Antonio~~;
- (2) ~~Add additional search parameters~~;
- (3) As it becomes publicly available, add salary information for 2022-2023 school years;
- (4) Create documentation;
- (5) Create the frontend; and 
- (6) Move the data to MongoDB as opposed to using a .json file.

## Author

- Twitter - [@michaelpreyna](https://twitter.com/michaelpreyna)
- LinkedIn - [@michaelpreyna](https://www.linkedin.com/in/michaelpreyna/)
