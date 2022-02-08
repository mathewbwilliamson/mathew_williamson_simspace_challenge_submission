# Simspace Challenge Submission by Matt Williamson

## Description

This project takes in data from a superhero database and it gives in a nice UI. It shows the superheros as a list, but also as a responsive grid including their images.

Hosted on Netlify at https://superhero-database-matt.netlify.app/

## Installation

1. Clone the repo: git clone git@github.com:mathewbwilliamson/FIX.git
2. Change directory to `mathew_williamson_simspace_challenge_submission`.
3. Install the packages with `yarn install`.
4. Start the app in your local environment: `yarn start`.
5. The app should open automatically, but if it's doesn't, open `http://localhost:3000` in your browser.

## Checklist of Requirements

Create a single-page application that allows a user to:

- [ ] Search for a specific breed of dog.
  - [ ] If the search field is empty, display a list of the first 12 breeds available, sorted alphabetically.
  - [ ] If the search field does not match any breeds, display a message that no breeds were found.
  - [ ] While the list of breeds is loading, display a message that the breeds are loading.
- [ ] Select one of the matching results and view pictures of that breed.
  - [ ] When a result is selected, mark the selection visually as being active.
  - [ ] While the images of the selected breed are loading, display a message that the images are loading.
- [ ] See the attached screenshots for the UI design to follow.
- [ ] Use the Dog API as your data source.

## Basic Overview

## Items of Note

- The data is not hardcoded, I load it using a custom hook to fetch the data.
- There is one custom hook in order to fetch the data. It is reusable and it includes support for tracking loading and errors, along with the data itself.
- The architecture/folder structure is one that I've used for a while. It has the following structure:

  - assets: Where any assets go. None for this project.
  - components: Any components that are not page components go here. This includes reusable components and more bespoke components.
  - customHooks: Any and all custom hooks will go here. Not every project I build will have these.
  - pages: For the pages themselves, usually in apps that have React Router or NextJS, but I still include it here for organization's sake.
  - services: Generally I keep my apiClient here, but also anything that might need 3rd party configuration would go here. I discuss the apiClient below. Also, every imported environment variable will be in the `index.ts` file. I do this so that all of these imports are in one place.
  - styles: In this app, I have chosen to do a light version of an Inverted CSS Triangle system.
  - types: Where app-level types and enums go.

- My apiClient in the apiService.ts file is where all my Axios requests go through. Many people do not create an apiClient as the documentation suggests, which eventually can lead to many apiClients being created. Instantiating an apiClient as in the documentation solves that problem as there will only be one.
- Lighthouse score

## Future Improvements

-

## Parting Words

Thank you to my code reviewers for taking valuable time out of their day to review my project.

All the best,

Matt Williamson
