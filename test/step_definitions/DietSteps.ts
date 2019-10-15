import {Given, Then, When} from 'cucumber'

Given(/^the age group of (\d+) to (\d+)$/, function (ageStart, ageEnd) {
console.log(ageStart);
console.log(ageEnd);
});

When(/^their weight is less than normal$/, function () {

});
Then(/^the recommended foods are apple, orange, nuts$/, function () {

});
