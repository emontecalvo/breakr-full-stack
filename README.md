# Breakr

Interval training to increase mindful productivity while working, stressing the importance of taking regular breaks. With Breakr set a timer for each and yield extraordinary results! 

![Alt text](./breakr_img.png?raw=true "Breakr")


## Motivation

* Studies show that taking a break once an hour increases our work productivity. After a while, our brain becomes numb to constant stimulation and it becomes harder to focus. A break can serve as creative fuel so that we are able to come back to the task at hand renewed and reenergized. Breakr can assure that happens.
* Breakr allows users to set an interval for their work time, after which a popup notification and sound will alert the user that it is time to take a break. Set a new timer for your break period and be alerted when it is time to get back to work.
* Users have the option to create an account and login. In doing so, they will gain access to their statistics to track their work and break times.



## Technologies (Quick Overview)

* React
* Redux
* JavaScript
* CSS
* MongoDB
* Express
* Passport
* Chai

## Technical
* This app was built to be responsive across multiple web-browsers and multiple sizes.
* The front-end was built entirely with React and Redux.  CSS animations were used to achieve the visual timer countdown.
* Passport and bcrypt were used for authentication.  The app allows for people to create a user-login, or use the app as a guest if prefered.
* The database was built using Mongodb and Express.
* The JavaScript code dealing with calculating the appropriate time can be found in the Timer.js component.
* Testing was achieved by using Chai.


## API Reference

* GET /api/user    :: returns all users who have been created
* POST /api/user   :: creates a new user with a username, password, and timer object
* POST /api/login  :: authenticates the user and log the user in



## Tests

* To run tests, use command "npm test" in the command line.
* Tests completed and passing for our User Model and Chart Component.



## Setup

* To use this application, simply clone or download the repository.

* Make sure you have Node.js installed (https://nodejs.org/en/).

* Make sure you have Mongodb installed (https://www.mongodb.com).

* cd into the project folder.

* In the command line run: $npm install

* Next, in the command line run: $npm run build

* Third, launch Mongodb (usually by typing $mongod in the terminal).

* Fourth, in the command line run: $npm start

* Go to the localhost 8080 on your web browser and you should see Breakr running!

## Live site
Please visit the live site to use if you don't want to install it locally on your computer:  https://breakr.herokuapp.com/#/timer


### Contributers
* bsoung
* dennellmarie
* emontecalvo



##### Directory layout

```
.
├── client      Client-side code
│   ├── assets  Timer Sound
│   ├── js      JavaScript
│   └── scss    SASS stylesheets
├── server      Server-side code
└── test        Tests
    ├── client  Client tests
    └── server  Server tests
```


