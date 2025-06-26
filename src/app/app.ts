import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';
import { ProfileCard } from "./profile-card/profile-card";
import { EvaluacionComponent} from "./evaluacion/evaluacion";

@Component({
  selector: 'app-root',
  imports: [ ProfileCard,EvaluacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'lab-pruebas-unitarias';

  ngOnInit(): void {
    // console.log('--- INICIO DE PRUEBAS MANUALES ---');

    // let calculator = new Calculator();
    
    // // Prueba 1: Multiplicación correcta
    // const resultMultiply1 = calculator.multiply(3, 7);
    // console.log('Prueba multiply(3, 7) === 21:', resultMultiply1 === 21); // Debería ser true

    // // Prueba 2: Multiplicación incorrecta
    // const resultMultiply2 = calculator.multiply(3, 7);
    // console.log('Prueba multiply(3, 7) !== 34:', resultMultiply2 !== 34); // Debería ser true

    // // Prueba 3: División por cero
    // const resultDivide1 = calculator.divide(10, 0);
    // console.log('Prueba divide(10, 0) === null:', resultDivide1 === null); // Debería ser true

    // // Prueba 4: División normal
    // const resultDivide2 = calculator.divide(20, 4);
    // console.log('Prueba divide(20, 4) === 5:', resultDivide2 === 5); // Debería ser true

    // console.log('--- FIN DE PRUEBAS MANUALES ---');
  }
 }

