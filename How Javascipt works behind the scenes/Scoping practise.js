
function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1981 && birthYear <=1996) {
            //'Steven' only exists within the block. Because Javascript tries to look for a varriable in the CURRRENT scope
            const firstName = 'Steven';
            const str = `You are millanial, ${firstName}`
            console.log(str); 
        }

    }
    
    printAge();
    return age;
}

const firstName = 'Maroun';
calcAge(1991);


