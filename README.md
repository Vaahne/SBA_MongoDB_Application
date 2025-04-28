## Bank Application
 users
 accounts 
 withdraw
# Routes
 ## API Reference
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /seed | seeding the data into DB |
GET | /bank/users | To get all users|
GET | /bank/users/:id | To get specific user with id |
DELETE | /bank/users/:id | To delete specific user |
POST | /bank/users | Post User to DB |
PUT | /bank/users/:id | update user details with id |
GET | /bank/accounts | To get all accounts|
GET | /bank/accounts/:id | To get specific account with id |
DELETE | /bank/accounts/:id | To delete specific account |
POST | /bank/accounts | Post account into DB |
PUT | /bank/accounts/:id | update account details with id |
GET | /bank/withdraws | To get all Withdrawels|
GET | /bank/withdraws/:id | To get specific withdraw with id |
DELETE | /bank/withdraws/:id | To delete specific withdrawel |
POST | /bank/withdraws | To add new withdrawel into DB |
PUT | /bank/withdraws/:id | update withdrawel details with id |