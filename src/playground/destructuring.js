const person = {
    age: 25,
    location: {
        city: 'Philadelphia',
        temp: 30
    }
};

//Value after equals in destructuring state specifies default value
//Value after colon specifies alias

const {name = 'anon', age} = person;
const {city, temp: temperature} = person.location;

console.log(name);