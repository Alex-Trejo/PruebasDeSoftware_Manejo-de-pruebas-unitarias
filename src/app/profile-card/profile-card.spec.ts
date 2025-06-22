import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCard } from './profile-card';

describe('ProfileCard', () => {
  let component: ProfileCard;
  let fixture: ComponentFixture<ProfileCard>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileCard]
    })
    .compileComponents();
 
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCard);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  //Prueba que el componente se crea correctamente
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

    // --- INICIO DE 5 PRUEBAS PERSONALIZADAS ---

  //Prueba 1 : verificar el contenido de los titulos h1 y h2
  it('should render the main title and student name correctly', () => {
    const h1 = compiled.querySelector('#main-title'); 
    const h2 = compiled.querySelector('.student-name');

    expect(h1?.textContent).toContain('Laboratorio de Pruebas de Software');
    expect(h2?.textContent).toContain('Estudiante: Alex Trejo');

  });

  //Prueba 2: Verificar el color del boton
   it('should have a red background color for the action button', () => {
    const button = compiled.querySelector('.action-button') as HTMLButtonElement;
    const buttonStyle = window.getComputedStyle(button);
    
    // Comparamos el color. Nota: los navegadores lo devuelven en formato rgb.
    expect(buttonStyle.backgroundColor).toBe('rgb(255, 0, 0)');
  });

  // PRUEBA 3: Verificar que el párrafo de información es visible inicialmente
  it('should display the framework info paragraph initially', () => {
    const p = compiled.querySelector('.framework-info');
    expect(p).not.toBeNull();
    const pStyle = window.getComputedStyle(p as HTMLElement);
    expect(pStyle.display).not.toBe('none');
  });


   // PRUEBA 4: Simular clic en el botón y verificar que el párrafo se oculta
  it('should hide the framework info paragraph after a button click', () => {
    const button = compiled.querySelector('.action-button') as HTMLButtonElement;
    const p = compiled.querySelector('.framework-info') as HTMLElement;

    // Act: Simular clic
    button.click();
    fixture.detectChanges(); // Volver a renderizar tras el cambio

    // Assert: Verificar que el párrafo está oculto y la etiqueta del botón cambió
    const pStyle = window.getComputedStyle(p);

    expect(pStyle.display).toBe('none');
    
    // Extra Assert: Verificar que la etiqueta del botón cambió
    expect(button.textContent).toContain('Mostrar Información');
  });

   // PRUEBA 5: Verificar que el párrafo reaparece después de un segundo clic
  it('should show the framework info paragraph again after a second click', () => {
    const button = compiled.querySelector('.action-button') as HTMLButtonElement;
    const p = compiled.querySelector('.framework-info') as HTMLElement;

    // Act 1: Primer clic para ocultar
    button.click();
    fixture.detectChanges();

    // Act 2: Segundo clic para mostrar de nuevo
    button.click();
    fixture.detectChanges();

    // Assert: Verificar que el párrafo es visible de nuevo y la etiqueta del botón se restauró
    const pStyle = window.getComputedStyle(p);
    expect(pStyle.display).not.toBe('none');
    expect(button.textContent).toContain('Ocultar Información');
  });


});
