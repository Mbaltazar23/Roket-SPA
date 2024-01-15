// Importaciones necesarias del módulo Angular
import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  // Selector del componente en la plantilla HTML del padre
  selector: 'app-detalle-arbol',
  // Indicador de que es un componente independiente que no utiliza módulos adicionales
  standalone: true,
  // Importaciones necesarias del módulo Angular
  imports: [CommonModule],
  // Ruta del archivo HTML que define la vista del componente
  templateUrl: './detalle-arbol.component.html',
  // Estilos específicos del componente
  styleUrls: ['./detalle-arbol.component.css']
})
export class DetalleArbolComponent implements OnChanges {
  // Propiedad de entrada para recibir el ID del árbol seleccionado desde el componente padre
  @Input() arbolIdSeleccionado: number | undefined;
  // Propiedad de entrada para recibir las fotos del árbol desde el componente padre
  @Input() fotos: any[] = [];
  // Evento para notificar al componente padre cuando se cambia la foto
  @Output() cambiarFoto = new EventEmitter<string>();

  // Método del ciclo de vida llamado cuando hay cambios en las propiedades de entrada
  ngOnChanges(changes: SimpleChanges): void {
    // Verificar si ha cambiado la propiedad arbolIdSeleccionado y si tiene un valor
    if (changes['arbolIdSeleccionado'] && this.arbolIdSeleccionado !== undefined) {
      // Lógica para actualizar las fotos, puedes agregar lógica adicional según tus necesidades
    }
  }
}
