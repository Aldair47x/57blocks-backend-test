const RANDOM_TRANSLATOR = require("./strings-translator");





const randomOutputValues = (data = {}, config = "") => {

    let dataConverted = {
        ...data
    };
    
    let stringConfigConverted = [];

    // debugger
    if (typeof (data) == "object" && typeof (config) == "string") {
        stringConfigConverted = config.split('/');
    } else {
        return `Bad input entered, please check the correct format randomOutputValues(argument1/argument2/argumentn...)`;
    }

    if (config == "" || Object.keys(data).length == 0) {
        return `There isn't a properties in data or config`;
    }

    if (stringConfigConverted.length > 10) {
        return `The maximum nest level of objects hierarchy is 10`;
    }



    stringConfigConverted.forEach(element => {

        if (typeof (dataConverted[element]) === "undefined") {
            console.log(`There isn't a property ${element} in config to match on the ${JSON.stringify(dataConverted)}`);
            process.exit();
        }


        if (dataConverted[element]) {
            dataConverted = dataConverted[element];
        }

    });

    if (typeof (dataConverted) == 'string') {
        if (RANDOM_TRANSLATOR[dataConverted]) {
            dataConverted = RANDOM_TRANSLATOR[dataConverted];
        } else {
            dataConverted = `random string converted ${Math.random().toString(36).substring(4)} - 57blocks no matched on the translator ${dataConverted}`;
        }
    }

    if (typeof (dataConverted) == 'number') {
        dataConverted *= 3.14159265359;
    }



    return dataConverted;

}

module.exports = randomOutputValues;
