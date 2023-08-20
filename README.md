This project was done for the SG interview and such stored in a private repo.

I have implemented an Angular and a Spring application in this repo, these projects are NOT real life like projects, the logic in multiple cases are NOT as they should happen in production.
There are inconsistencies within the Angular app with Service usage, as I wanted to show that I know multiple ways to solve issues. Same thing can be said about some of the logic, such as @Output was used for the communication between the tickets and the game component which I would most likely implement with a Service but @Output was mentioned in the task description/mail.

The Java Spring app is REALLY just a representation of a Backend server and was only created to prove that the angular application is able to communicate correctly and is not using only hardcoded values. The SPring app has:
	- REST API functionality for Users
		- Get all User
		- Login a User
	- H2 DB for testing purposes
The app uses only 1 table the Users of course this means that passwords are stored next to the account name (!in plain text!). In a prod environment this would never happen, and if I had more time I would have done it differently as well.

H2 DB can be reached on localhost:8080/h2-ui you can add users there with SQL.
	Credentials (Safest ever):
		admin
		admin

I have written unit tests for the randomnumber generator and an e2e for the Home Component's login functionality.