import { ComponentFixture, TestBed , fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EvaluacionComponent } from './evaluacion';

describe('Evaluacion', () => {
  let component: EvaluacionComponent;
  let fixture: ComponentFixture<EvaluacionComponent>;
    let compiled: HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluacionComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


    it('Prueba con .toEqual: debe verificar que el valor del campo nombre es igual a "Su Nombre"', () => {
    const nombreInput: HTMLInputElement = compiled.querySelector('#nombre')!;
    nombreInput.value = 'Alex';
    nombreInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(nombreInput.value).toEqual('Alex');
    });

  it('Prueba con .toBeLessThan: debe verificar que nota1 es menor que nota2', () => {
  const nota1Input: HTMLInputElement = compiled.querySelector('#nota1')!;
  const nota2Input: HTMLInputElement = compiled.querySelector('#nota2')!;
  nota1Input.value = '15';
  nota2Input.value = '18';
  expect(parseInt(nota1Input.value)).toBeLessThan(parseInt(nota2Input.value));
});

it('Prueba con .toMatch: debe comprobar que el textarea incluye una frase específica', () => {
  const comentariosTextarea: HTMLTextAreaElement = compiled.querySelector('#comentarios')!;
  const fraseEsperada = "Universidad de las Fuerzas Armadas ESPE";
  expect(comentariosTextarea.value).toMatch(fraseEsperada);
});



it('Prueba con .toBeTruthy: debe evaluar que la función retorna true si el número es par', () => {
  // Probamos la lógica directamente para evitar el azar
  const resultadoPar = component.esNumeroPar(2);
  const resultadoImpar = component.esNumeroPar(3);
  expect(resultadoPar).toBeTruthy();
  expect(resultadoImpar).toBeFalsy();
});

//v2
it('Prueba con .toBeTruthy: debe evaluar el resultado de la función dado() y comprobar que retorna true si el número aleatorio fue par', () => {
    
    // CASO 1: Forzar a que el dado devuelva un número PAR (ej. 4)
    // Arrange: Creamos un "espía" en el método dado() y le decimos que devuelva 4.
    spyOn(component, 'dado').and.returnValue(4);

    // Act: Ejecutamos la función que internamente llama a dado().
    component.lanzarDado();
    fixture.detectChanges();

    // Assert: Verificamos que la propiedad 'esPar' sea true.
    expect(component.esPar).toBeTruthy();


    // CASO 2: Forzar a que el dado devuelva un número IMPAR (ej. 5)
    // Arrange: Reconfiguramos el espía para que ahora devuelva 5.
    (component.dado as jasmine.Spy).and.returnValue(5); // Re-espiamos el método

    // Act: Volvemos a ejecutar la función.
    component.lanzarDado();
    fixture.detectChanges();

    // Assert: Verificamos que la propiedad 'esPar' ahora sea false.
    expect(component.esPar).toBeFalsy();
});



it('Prueba con .toContain: debe comprobar que el h1 contenga el texto de la evaluación', () => {
  const h1: HTMLElement = compiled.querySelector('h1')!;
  expect(h1.textContent).toContain('Evaluación Segundo Parcial');
});


});
