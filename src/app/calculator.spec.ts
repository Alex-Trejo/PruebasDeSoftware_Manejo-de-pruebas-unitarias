import { Calculator } from "./calculator";

describe('Calculator', () => {

    let calculator: Calculator;

    //Arrange -> se crea una instancia de la clase Calculator
    // se ejecuta antes de cada prueba ('it')
    beforeEach(() => {
        //se crea un nuevo objeto de la clase Calculator antes de cada prueba, vacio
        calculator = new Calculator();

        // Aquí puedes realizar configuraciones previas a cada prueba si es necesario
    });


    describe('Test for multiply', () => {
        it('should return a twelve when multiplying 3 by 4', () => {
            // Act -> se llama a la funcion o metodo que se quiere probar
            const result = calculator.multiply(3, 4);
            // Assert -> se comprueba que el resultado es el esperado
            expect(result).toEqual(12);
        });

        it('should return ten', () => {
            // Act & Assert
            expect(calculator.multiply(2,5)).toEqual(10);
        });
    } );

    describe('Test for divide', () => {
        it('should return five when dividing 35 by 7', () => {
            // Act & Assert -> se llama a la funcion o metodo que se quiere probar y se comprueba que el resultado es el esperado
            expect(calculator.divide(35, 7)).toEqual(5);
            expect(calculator.divide(7, 2)).toEqual(3.5);
        });

        it('should return null when dividing by zero', () => {
            // Act & Assert -> se llama a la funcion o metodo que se quiere probar y se comprueba que el resultado es el esperado
            expect(calculator.divide(10, 0)).toBeNull();
            expect(calculator.divide(7, 0)).toBeNull();
        });
    });

    describe('Jasmine Matchers', () => {
        it('test of Matchers', () => {
            const result = calculator.multiply(2, 3);
            expect(result).toBe(6); // toBe is used for primitive values
            expect(result).toEqual(6); // toEqual is used for object comparison
            expect(result).not.toBeNull(); // toBeNull checks if the value is null
            expect(result).toBeDefined(); // toBeDefined checks if the value is defined
            expect(result).toBeGreaterThan(5); // toBeGreaterThan checks if the value is greater than a number
            expect(result).toBeLessThan(10); // toBeLessThan checks if the value is less than a number
        });

        it('should demonstrate various matchers', () => {
            expect('Luis').toBeDefined();
            expect(1 + 1 === 3).toBeFalsy();
            expect(8).toBeLessThan(10);
            expect('abcdefg').toMatch(/cde/);
            expect(['tables', 'chairs', 'sofa']).toContain('chairs');
        });
    });

});