//* Test scripts for the expected behavior of the functional script
//* Tests the MongoDB module file
var chai = require('chai');
var expect = chai.expect;

var MongoDBModule = require('../../../modules/mongodb/mongodb.module');
//! Test Suite
//* describe('name', function that encapsulates the test);
describe('MongoDBModule', function() {
    //* Nested block runs a bunch of tests together
    describe('mongodb.module file', function(){
        it('Should read the mongodb.module file', function() {
            expect(MongoDBModule).to.be.a('object');
        });

        it('should confirm MongoDBUtil exist', function () {
            expect(MongoDBModule.MongoDBUtil).to.be.a('object');
        });
    });
});
