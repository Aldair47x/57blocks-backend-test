const RANDOM_TRANSLATOR = require("./strings-translator");





const randomOutputValues = (data={}, config="") => {

    let dataConverted = {...data};

    

    // debugger
    const stringConfigConverted = config.split('/');

    if(config == ""){
        return `There isn't a properties in config to search on the data`;
    }

    

    stringConfigConverted.forEach(element => {

        // console.log(typeof(dataConverted[element]))

        if(typeof(dataConverted[element]) === "undefined"){
            console.log(`There isn't a property ${element} in config to match on the ${JSON.stringify(dataConverted)}`);
            process.exit();
        }
        
        
        if(dataConverted[element]){
            dataConverted = dataConverted[element];
        }

        if(typeof(dataConverted) == 'string'){
            if(RANDOM_TRANSLATOR[dataConverted]) {
                dataConverted = RANDOM_TRANSLATOR[dataConverted];
            } else {
                dataConverted = "random string converted 57blocks " + Math.random().toString(36).substring(4);
            }
        }

        if(typeof(dataConverted) == 'number'){
            dataConverted *= 3.14159265359;
        }
        // console.log("\n",dataConverted);
        
    });

    // console.log(typeof(dataConverted), "\n", dataConverted);

    return dataConverted;



    


    


    
}

module.exports = randomOutputValues;