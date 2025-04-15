const findTheOldest = function(arr) {
 return arr.reduce((oldest, offPerson)=>{
    const oldestPer = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const age = getAge(offPerson.yearOfBirth, offPerson.yearOfDeath);
    return oldestPer < age ? offPerson : oldest;
});
};

const getAge = function(birth,death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
