import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-evaluacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './evaluacion.html',
  styleUrls: ['./evaluacion.css']
})
export class EvaluacionComponent {
  resultadoDado: number | null = null;
  esPar: boolean | null = null;

  nombre: string = '';
  nota1: number | null = null;
  nota2: number | null = null;
  comentarios: string = 'Información general sobre la evaluación en la Universidad de las Fuerzas Armadas ESPE.';

  // Función que retorna un número aleatorio entre 1 y 6
  dado(): number {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Función auxiliar para las pruebas que solo retorna si es par o no
  esNumeroPar(numero: number): boolean {
    return numero % 2 === 0;
  }

  // Función que se ejecuta desde el botón
  lanzarDado(): void {
    const numero = this.dado();
    this.esPar = numero % 2 === 0;
  }
}