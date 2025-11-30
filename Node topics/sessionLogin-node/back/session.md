
# login 

# 🔐 Session + Cookie Flow (Very Simple)
Step	Action
Login	You save user info into session
Server generates session ID	Stored in DB or memory
Cookie sent to client	Browser stores it
Next API request	Browser sends cookie automatically
Server checks cookie → session	User identified ✔

# 🎉 Conclusion in Short
Code Line	Meaning
req.session.user = {…}	_____Save limited user data in session (server remembers user)
myUser.toObject()  ___	Convert DB document to normal object
delete user.password  ___	Remove password for safety
res.json({user})  ___	Send safe user data to frontend