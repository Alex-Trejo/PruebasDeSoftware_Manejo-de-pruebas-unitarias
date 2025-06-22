import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard   {
  
  buttonLabel: string = 'Ocultaar información';
  constructor() { }
  ngOnInit(): void {
      
  }

  //logica de boton
  toggleFrameworkInfo(): void {
    const infoElement = document.querySelector('.framework-info');
    if (infoElement) {
      const isVisible = (infoElement as HTMLElement).style.display !== 'none';
      (infoElement as HTMLElement).style.display = isVisible ? 'none' : 'block';
      this.buttonLabel = isVisible ? 'Mostrar Información' : 'Ocultar Información';
    }
  }

}
