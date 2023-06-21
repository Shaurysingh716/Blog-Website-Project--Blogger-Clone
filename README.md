# Project-3-Cloning
This File is proctected under the Doctrine of Fair Dealing In Indian Copyright Law that provides fair use for purposes such as criticism, comment, news reporting, teaching (including multiple copies for classroom use). The file have a code for the clone of a U.S based Google Subsidary (Blogger.com), the use of this file shall and should be limited for the purposes given by Fair Use Policy only.

//----- Server Files:
The Original file is run on a Localhost Server at Port 8000: 
User Downloaded File can be Run both with and without Server: 
------>>> To run this file on the server, you need to run the following codes on your JS terminal window:
{NOTE: To Run This File On Server You Need To Have Node.js and MongoDB{along with MongoDB Compass(for better use)} in you system linked to main path already, if not, the website will not run on the server and the entered data will not be stored anywhere}


npm install express

npm install path

npm install pug

npm install body-parser

npm install mongoose

npm install nodemailer

npm install nodemon

{The terminal Window Can Be Opened In VS Code with the Default Command:- Ctrl + Shift + `
also it is not necessary to write 'install', even if you write npm i express - express will be installed}

after installling the files in the terminal a Node-Modules Folder, a Package-lock.json File and a Package.json will be created in your main directory, if this happened your Local Device is ready to Host the Server.
To run the Server write the following code on your JS Terminal:

node app.js

if you get the response as "Application Is Running At 127.0.0.1 at Port 8000": this measns that you Server is running.
Now, search localhost:8000 to Access your Website.

When you enter the data in the log-in page, check wether the following message is coming to your terminal or not:
Item Added To Database

NOTE:-- The Server is running on port 8000 which cannot be dynamically changed: because the port number is hardcoded in the file 'app.js'. Changing the port may or may not result in web dysfunctioning, the source will not take any responsibilties of any of these dysfunctions.


To run the file without a local server, change the extension of the pug files to '.html' for example:- 'index.pug' (in Views Directory) to 'index.html' and then run the file. 
The extension can be changed using VS Code or any other code editor.
{NOTE: If the location of the CSS and JS files is changed, the website may not run properly}
{NOTE: The Data Can Only be Saved In The Database if the website is running on server and is having MongoDB}



This Website can also be Remotely Aceessed using the IP Address or host server and the port 8000 in the manner {ip-address:8000} :--> Only for server side use
