Testing install if needed:
    npm i -D @testing-library/react react-test-renderer jest-dom


Auth:
<a href="https://git-user-breakdown.herokuapp.com/auth" />

Root:
https://git-user-breakdown.herokuapp.com/

Exposed Endpoints:
======Finished but subject to change======
/auth - Start GitHub OAuth (Redirect)

/auth/callback- Finish GitHub OAuth (Redirect) (Internal use only with /auth)

/logout - Close Session and Logout (Redirect)

GET /auth/active - Weather a session is active or not

GET /user/profile - Basic info about the current user

GET /user/:id/profile - Basic info about a specific user

GET /user/calendar - Contribution Calendar for the current user

GET /user/:id/calendar - Contribution Calendar for a specific user

GET /user/following - The basic info of the users the current user is following.

GET /user/:id/following - The basic info about the users a specific user is following

GET /user/tendencies - The most used primary language, most often day of the week of commits and most often hour of commits of the current user

GET /user/:id/tendencies - The most used primary language, most often day of the week of commits and most often hour of commits of a specific user

POST /follow/:id - Follow a specific user from the current user.

POST /unfollow/:id - Unfollow a specific user from the current user.

======Unfinished but planned======
GET /user/commits - The list of the most recent commits of the user across all repositories of the current user

GET /user/:id/commits - The list of the most recent commits of the user across all repositories of a specific user

GET /user/repos - The list of the most recent repos of the current user

GET /user/:id/repos - The list of the most recent repos of a specific user

GET /notes/:id - Personal Notes for a specific user

PUT /notes/:id - Add personal note for a specific user

POST /notes/:note - Modify a specific note
