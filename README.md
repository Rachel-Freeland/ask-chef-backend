# Ask Chef - Backend

### Site deployed on Netlify [here](https://askchef.netlify.app/)

## Team:

- Antoine Charette
- Alexander Beers
- Patrick Laurion
- Rachel Freeland

## Overview

Ask Chef is a website that help users come up with ideas for meal choices and recipes based off the data input by the user. Users can save results to a customizable profile.

## What are the key strengths of each person on the team?

Patrick: Auth0, Patience, Leadership, JS knowledge

Alex: Experienced programmer, computer science knowledge

Rachel: Backend routing, Leadership, Patience

Antoine: Organization, Work ethic, JS knowledge

## How can you best utilize these strengths in the execution of your project?

We will pool the resources from Rachels backend programming proficiency, Patrick's knowledge and understanding of the course work, Alex’s programming knowledge and Antoine’s ability to organize + plan. With this diversification of strengths we should be able to accomplish the task set before us.

## In which professional competencies do you each want to develop greater strength?

Antoine: Business Acumen

Alex: Technical Proficiency

Patrick: Communication

Rachel: Creativity

## Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?

We plan on describing each facet of our code base front and backend as we progress throughout this assignment.

## What will be your group’s process to resolve conflict, when it arises?

We hash them out amongst ourselves using the democratic process.

## What will your team do if one person is taking over the project and not letting the other members contribute?

Tell the person to be aware of everyone’s situation and explain that we are a team.

## How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?

We will engage in lots of paired programming to ensure people of all skills levels have an understanding of each part of our application.

## How will you raise concerns to members who are not adequately contributing?

Let them know that the team will not accept that kind of behavior.

## How and when will you escalate the conflict if your resolution attempts are unsuccessful?

The three strike rule and then we will reach out to a higher source of authority.

## What hours will you be available to communicate?

9am-9pm, or as the situation dictates.

## What platforms will you use to communicate (ie. Slack, phone …)?

Slack, Remo, Zoom, Text, Email

## How often will you take breaks?

As we like and lunch.

## What is your plan if you start to fall behind?

Code sprint, set priorities and accomplish what we can

## How will you communicate after hours and on the weekend?

Slack

## What is your strategy for ensuring everyone’s voice is heard?

Engage in democratic strategies similar to a Greek symposium.

## How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?

Encourage asking questions during paired programming and review code contributions for each member

## How you will identify tasks, assign tasks, know when they are complete, and manage work in general?

Individual tasks will be given based on strengths primarily. Pair programming will be done to help with peoples’ weaknesses.

## What project management tool will be used?

Trello

## What components of your project will live on GitHub?

Our frontend and backend repos

## How will you share the repository with your teammates?

Make an organization and add them as members with permissions.

## What is your Git flow?

Code (individual/feature Branches)> Push > Staging (Development Branch)> Review > Merge (Main branch once a day with 2+ person verification)

## Will you be using a PR review workflow? If so, consider:

### How many people must review a PR?

Development branch 1, main branch 2

### Who merges PRs?

Any person who didn’t push the code

### How often will you merge?

Once a day (Main), as needed for dev branch

### How will you communicate that it’s time to merge?

Slack message, Remo, Merge party

## User Stories

<https://trello.com/b/ouywgYIp/ask-chef>

## Data Schema

![Data Schema](./img/Data-schema.png)

## Domain Modeling

![Data Modeling](./img/domain-model.jpg)

## Software Requirements

### Vision

- What is the vision of this product?
  - It will be a app that helps users to come up with ideas for meal choices and recipes based off the data input by the user. The user will then be able to save the results of that search to a customizable profile.
- What pain point does this project solve?
  - It helps a user to use the ingredients available in their refrigerator or even the ability to plan ahead. It solves the idea of “What’s for dinner?” (or any meal of the day).
- Why should we care about your product?
  - Everyone has to eat and everyone has, at some point, faced the dilemma of trying to figure out what to make to eat, whether it is breakfast, lunch, dinner, or a snack.

### Scope

#### What will this app do?

- This app will take in an ingredient and return a list of recipes.
- This app will allow a user to save the recipes that appeal to them.
- When a user goes to logs into their profile they will be presented with a list of their saved recipes.
- The user will be able to remove any recipe that doesn’t suit their needs.

#### What will this app will NOT do?

- This app will not generate a meal plan for the week.
- This app will not generate a shopping list.

### Minimum Viable Product

- App will use login by Auth0 to save recipes to their specific profile and to retrieve previously saved recipes or search data
- App will allow the user to see saved recipes
- App will allow users to search according to ingredient
- App will allow user to save a chosen recipe from the returned list of recipes
- App will allow a user to update a recipe to their tastes
- App will allow a user to delete recipes that do not meet their needs/tastes

### Stretch Goals

- Implement a cocktail API to allow a user to serve guests a special cocktail
- Setup a security feature that prevents the user from posting any inappropriate data or meal ideas

### Functional Requirements

- Users will be allowed to use a social media account and/or Google account to login
- The user will then go to their personal landing page that will present them with their saved recipes and a search field
- The user can then view a chosen recipe or enter an ingredient and recieve a list of recipes tailored to that ingredient
- The user can then save a new recipe
- The user will be able to delete or update a recipe according to their need

#### Data Flow

1. User logs in
2. The user will be presented with a list of saved recipes and a search field
3. The user can choose a saved recipe or enter an ingredient into the search field
   and recieve a list of recipes to peruse
4. The server will then present the user with the saved recipe or send a search to the chosen API
5. The API will respond and the server will forward that response to the frontend
6. The frontend will then style the data for the user in a traditional recipe format

### Non-Functional Requirements

- Security using Auth0
  - The login services to store data to a given profile only
- Usability
  - A user friendly UX/UI for the frontend
