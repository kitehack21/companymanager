This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Node.js is required to utilize its node package manager (npm)

## Installation

This project uses the following dependencies:

`
    "axios": "^0.18.0",
    "moment": "^2.22.2",
    "react": "^16.6.0",
    "react-bootstrap": "^0.32.4",
    "react-datepicker": "^1.7.0",
    "react-dom": "^16.6.0",
    "react-phone-input-2": "^2.6.1",
    "react-redux": "^5.1.0",
    "react-router-dom": "^4.3.1",
    "react-scripts": "2.0.5",
    "redux": "^4.0.1",
    "redux-thunk": "^2.3.0"
    `

These dependancies are already listed in the package.json file.
To install, simply run :
### `npm install`
    

## Available Scripts

In the project directory run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

In the api directory `/companymanager/managerapi` you can run :

### `node .`

This will run the api server locally on [http://localhost:1994](http://localhost:1994)

## Supported Browsers

By default, the generated project supports all modern browsers.<br>
Support for Internet Explorer 9, 10, and 11 requires [polyfills](https://github.com/facebook/create-react-app/blob/master/packages/react-app-polyfill/README.md).

## Features

### 1.) Create Company:
![alt text](./readmeimages/createcompany.jpg)


Fields that haven't been filled will display an error label upon pressing create

![alt text](./readmeimages/createcompanyerror.jpg)

Phone code can be selected via dropdown. Revenue and phone number fields can only be inputted with positive floor numbers

![alt text](./readmeimages/phonecodedropdown.jpg)

An alert will be shown upon succesful creation

![alt text](./readmeimages/createcompanysuccess.jpg)

All created Companies will display as cards under the Company section on the main page

![alt text](./readmeimages/companycard.jpg)

### 2.) Create Office:

![alt text](./readmeimages/createoffice.jpg)

Fields that haven't been filled will display an error label upon pressing create

![alt text](./readmeimages/createofficeerror.jpg)

Date selection uses a datepicker widget

![alt text](./readmeimages/datepicker.jpg)

Any created companies will appear in the Company dropdown

![alt text](./readmeimages/companydropdown.jpg)

An alert will be shown upon succesful creation

![alt text](./readmeimages/createofficesuccess.jpg)

### 3.) Information Display:

All created Companies will display as cards under the `Companies` section on the main page

![alt text](./readmeimages/companycard.jpg)

Clicking on the X on the upper right will prompt the deletion of the company card (along with all associated offices) from the database

![alt text](./readmeimages/deletecompany.jpg)

Clicking on a company card will redirect you to it's respective page, detailing it's offices

![alt text](./readmeimages/officepage.jpg)

Clicking on the X on the upper right of the office card will also prompt its deletion

Clicking on `Back to Overview` will return you to the main page

## System Design




