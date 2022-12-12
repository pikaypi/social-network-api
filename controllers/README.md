# Social Network API

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test](#tests)
- [Questions](#questions)

---
## Description
This application is the backend of a social network that allows users to post thoughts and reactions to thoughts. All database manipulation operations are available through Insomnia.

---
## Installation
- To install this application navigate in the terminal into the root of the cloned repository and execute ```npm install```
- To star the server again in the terminal execute ```npm run start```

---
## Usage
[Watch a video walkthrough on the usage of this application](https://drive.google.com/file/d/1IQl1fOy9EJzECZeVXwTzk_nfuaSXbhTs/view)

The following url endpoints will return the following operations

GET routes
- /api/users returns all users including their thoughts
- /api/users/userId returns the user with that id including their thoughts
- /api/thoughts returns all thoughts and their associated reactions
- /api/categories/thoughts returns the thought with the given id and all associated reactions


POST routes
- /api/users creates a new user with the content of the request body
- /api/users/userId/friends/friendId adds the friendId to the user's friendlist
- /api/thoughts create a new thought using the content of the request body
- /api/thoughts/thoughtId/reactions creates a new reaction to the thought with that id using the content of the request body

PUT routes
- /api/users/userId updates the user with that id using the content of the request body
- /api/thoughts/thoughtId updates the thought with that id using the content of the request body 

DELETE routes
- /api/users/userId deletes the user with that id from the database along with all the thoughts they created
- /api/thoughts/thoughtId deletes the thought with that id from the database along with all the reactions attached to it
- /api/users/userId/friends/friendId removes the friendId from the user's friend list
- /api/thoughts/thoughtId/reactions accesses the thought with that id and removes the reaction with the reactionId provided in the request.body

---
## Tests
There are currently no test for this application.

---
## Questions
[https://github.com/pikaypi](https://github.com/pikaypi)

---
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
