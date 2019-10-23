# Alpha-Gal Pal

This application was created to help people with Alpha-Gal allergy (red meat allergy) keep track of their symptoms, so that they may communicate more fully with medical professionals. It is also geared to collect user data (with permission) so that more information about the allergy and the people suffering from it can be utilized by researchers.

## Motivation

 Alpha-Gal allergy is a little-known tick-borne illness that is affecting more and more people every year. Like Lymes Disease, Alpha-Gal is often misdiagnosed, and it can be fatal. Since so little information about Alpha-Gal allergy exists, this project is an attempt to spread awareness about the disease, while also offering support to the people suffering from it.

## Screenshots

## Tech/Framework Used

React Javascript

## Features

- **Symptom Tracker** allows users to input allergic reactions into the database so that they can track how often they are having reactions, what types of products are causing reactions, the dates of each reaction, and the symptoms they experienced.
- **Real-Time User Data** is generated each time a user inputs a new allergic reaction. Researchers can use the database to track what percentage of users had to take medication for allergic reactions, the percentage of users who had to go to the ER for allergic reactions, the percentage of users who are formally diagnosed, etc. The data shown on the *Data Results* page are just a scratch on the surface of how the data collected through this project can be used.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Installing the Project

Clone the source locally:
```
git clone https://github.com/jessicaayerst/Alpha-Gal-Pal.git
```

Then:
```
cd alpha-gal/
```

In the project directory, you can run:

```
npm install
```

### Running the Project
Then:

```
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You will also need to run the mock API JSON server. From the project directory, you can:

```
cd api
```

Then run:

```
json-server -p 5002 -w alpha.json
```

### Installing/Using Auth0
 Since the app uses Auth0 as the login framework, you will need to create an Auth0 account by clicking [here](https://auth0.com/signup) and then do this:

1. On the left side of the page, select "Applications" from the menu bar
2. Click on "Create a new Application"
3. Click on "Single Page Application"
4. Select "React"
5. Now your App is created. Click on the "Settings" tab to see your App's info.
6. In the settings tab of your app, under "Allowed callback URLs", paste this URL: http://localhost:3000/callback
7. Under "Allowed Web Origins", paste this URL: http://localhost:3000
8. Under "Allowed Logout URL's", paste this URL: http://localhost:3000
9. Click "Save Changes"

Now Install Auth0 in your directory:

```
npm install auth0-js
```

Now GitIgnore your domain and Client ID:

1. In your auth directory, create a new file called AuthConfig.js.
Add AuthConfig.js to your .gitignore. (Once you've done that, run git status to make sure it worked. You should not see AuthConfig.js in the list.)
2. Here's an example of what your AuthConfig.js file should look like. You'll need to copy and paste your own domain and clientID here, whicn you'll find under the settings tab of your application.

```
export default {
 domain: 'YOUR DOMAIN',
 clientId: 'YOUR CLIENT ID'
}
```

3. Now you should see the Auth0 framework pop up when you run the application. You can login using a username and password of your choice. In order to see the data results page in full, you can make several accounts, and have each account have several "allergens". Then, you will be able to see how the data results percentages change as the data changes.

### Installing the Google Maps API

The "User Map" page of this application uses Google Maps to show where all the users reside. This data is gathered using the zip codes the users enter on the "User Profile" page. In order for this page to load and work correctly, you must install Google Maps API and also obtain a key(password). Remember, to always put code using your key in a .gitIgnore file.

1. Request a Google Maps API key [here](https://developers.google.com/maps/documentation/javascript/tutorial?source=post_page-----9694a475f00a----------------------).
2. Install google-map-react into the project directory.

```
npm install --save google-map-react
```

3. In the directory named "data", open up the file named "publicZipCodeMap.js"
4. There are 2 places where your Google Maps API Key needs to be placed in this file. Remember, to add this file to your .gitIgnore file so that your API Key remains secure.
5. After putting your API key in and adding the file to gitIgnore, then you can un-comment the code.
6. Add:
```
import SimpleMap from './data/publicZipCodeMap.js'
```
 to the ApplicationViews.js file. Also delete this line: import SimpleMap from './data/ZipCodeMap2'

7. The component "SimpleMap" should work correctly now, and you should see a map with the location of all users pinpointed. This map will not work with zip codes that are outside of the United States, and the page will not load if there are any users in the database with non-US zip codes.






## How to Use?

1. Once you are logged in with Auth0, create a User Profile, by clicking "Edit User Profile".
![first](firstGif.gif)
2. Then go to the "Symptom Tracker" page and click "Input New Allergen". Here, you can add the details of the allergic reactions you have had. These will be listed in chronological order, by the most recent reaction.
3. The "Data Results" page will show you real-time data, which is gathered from all users who have given permission for their data to be used in the research project.
4. Clicking on the "User Map" page will show you the locations of all current registered users.

## How to Contribute?

1. Clone repo and create a new branch: $ git checkout https://github.com/jessicaayerst/Alpha-Gal-Pal.git -b name_for_new_branch.
2. Make changes and test
3. Submit Pull Request with comprehensive description of changes

## Donations

This is free, open-source software. If you'd like to support the development of future projects, or say thanks for this one, you can donate BCH at
