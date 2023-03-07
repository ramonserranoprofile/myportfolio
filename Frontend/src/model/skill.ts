import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




export class Skill {
  id: number;
  nombre: string;
  porcentaje: number;

  constructor(nombre: string, porcentaje: number) {
    this.nombre = nombre;
    this.porcentaje = porcentaje;
  }
}
