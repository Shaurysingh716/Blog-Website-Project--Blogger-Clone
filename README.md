# Project-3-Cloning
This File is proctected under the Doctrine of Fair Dealing In Indian Copyright Law that provides fair use for purposes such as criticism, comment, news reporting, teaching (including multiple copies for classroom use). The file have a code for the clone of a U.S based Google Subsidary (Blogger.com), the use of this file shall and should be limited for the purposes given by Fair Use Policy only.

//----- Server Files:
The Original file is run on a Localhost Server at Port 8000: 
User Downloaded File can be Run both with and without Server: To run this file on the server, you need to run the following codes on your JS terminal window:

npm install express
npm install path
npm install pug

after installling the files in the terminal a Node-Modules Folder, a Package-lock.json File and a Package.json will be created in your main directory, if this happened your Local Device is ready to Host the Server.
To run the Server write the following code on your JS Terminal:

node app.js

if you get the response as "Application Is Running At 127.0.0.1 at Port 8000": this measns that you Server is running.
Now, search localhost:8000 to Access your Website.

NOTE:-- The Server is running on port 8000 which cannot be dynamically changed: because the port number is hardcoded in the file 'app.js'. Changing the port may or may not result in web dysfunctioning, the source will not take any responsibilties of any of these dysfunctions.


To run the file without a local server, change the extension of the file 'index.pug' (in Views Directory) to 'index.html' and then run the file.
The extension can be changed using VS Code or any other code editor.
