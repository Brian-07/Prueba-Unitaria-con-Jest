 const sum = (a,b) => {
     return a + b
 };

 console.log(sum(14,9));


 module.exports = { sum };



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};


const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
   
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    
    let valueInYenes = valueInDollar * 0.0069;
    
    return valueInYenes;
}
const fromYenToPound= function(valueInYenes){
    
    let valueInLibras = valueInYenes * 0.0062;
   
    return valueInLibras;
}

module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};
