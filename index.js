const randomOutputValues = require("./random-library");


let datas = {
    "hierarchy": {
        "hierarchy1": {
            "hierarchy2": {
                "hierarchy3": {
                    "hierarchy4": {
                        "hierarchy5": {
                            "hierarchy6": {
                                "hierarchy7": {
                                    "hierarchy8": {
                                        "hierarchy9": {
                                            "hierarchy10": {
                                                "hierarchy11": {
                                                    "hierarchy12": {
                                                        "hierarchy13": {
                                                            "hierarchy14": {
                                                                "dolar": "USD"
                                                            },
                                                        }
                                                    },
                                                },

                                            }
                                        },
                                    },

                                }
                            },
                        },

                    }
                },
            },
        }
    },
    "dolar": "USD",
    "numero": 5.1,
    "euro": "EUR"
}


//hierarchy of 10
// console.log(randomOutputValues(datas, "hierarchy/hierarchy1/hierarchy2/hierarchy3/hierarchy4/hierarchy5/hierarchy6/hierarchy7/hierarchy8/hierarchy9"));

//hierarchy of 11
// console.log(randomOutputValues(datas, "hierarchy/hierarchy1/hierarchy2/hierarchy3/hierarchy4/hierarchy5/hierarchy6/hierarchy7/hierarchy8/hierarchy9/hierarchy10"));


//translated string
// console.log(randomOutputValues(datas, "dolar"));

//not translated string
// console.log(randomOutputValues(datas, "euro"));

//number
console.log(randomOutputValues(datas, "numero"));

//empty
// console.log(randomOutputValues());

//wrong input
// console.log(randomOutputValues(["hello"], {"hello": "hello"}));