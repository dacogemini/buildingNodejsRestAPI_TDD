// MAIN file for mongodb module. 
// It is a unique object exposed as a javascript module. 
// We can use this file to import any other modules declared 
// within this module. We can start with below code block in this file. 
// It is called Immediately Invoked Function Expression (IIFE).
//  I prefer this pattern to enclose the functional code inside the IFFE code block. 
// It is to restrict the internal variables to be accessible only inside this 
// function and thus it provides privacy to these variables.

(function () {
    'use strict';
    module.exports = {
        //! Declare attributes here to be exposed to other modules
    }
}) ();