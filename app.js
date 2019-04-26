/** This app.js file will fire up the server and this file
 * contains specific code to run the application.
 */

const express = require('express');

const app = express();
 

app.listen(3000, ()=>{
    console.log('Sucessfully working!!!');
});
