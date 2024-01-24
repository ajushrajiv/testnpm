const { faker } = require('@faker-js/faker');

const user = {
    name: faker.person.firstName(),
    familyname: faker.person.lastName(),
    address: faker.location.streetAddress(),
    country: faker.location.country()
};

console.log('name:',user.name);
console.log('familyname:',user.familyname);
console.log('address:',user.address);
console.log('country:',user.country);

