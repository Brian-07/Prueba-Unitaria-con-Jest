 const { sum } = require('./app.js');

 test('Suma de 14 + 9 es igual a 23', () => {
    
     let total = sum(14, 9);


 expect(total).toBe(23);

 });

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})
test("One dollar should be  0.0069 Yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(0.024149999999999998); 
})
test("One Yenes should be 0.0062 libras", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.0217); 
})