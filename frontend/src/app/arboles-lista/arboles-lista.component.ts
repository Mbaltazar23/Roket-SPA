// Importaciones necesarias del módulo Angular
import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arboles-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './arboles-lista.component.html',
  styleUrls: ['./arboles-lista.component.css']
})

// Definición del componente
export class ArbolesListaComponent implements AfterViewInit {
  @Input() arboles: any[] = []; // Lista de árboles proporcionada desde el componente padre
  @Output() arbolSeleccionado = new EventEmitter<number>(); // Evento para notificar la selección de un árbol al componente padre

  // Método del ciclo de vida llamado después de que la vista del componente ha sido inicializada
  ngAfterViewInit() {
    // Verificar que haya al menos un árbol antes de seleccionar
    if (this.arboles && this.arboles.length > 0) {
      const selectedArbolId = this.arboles[0].arbol_id;
      this.onArbolSelect(selectedArbolId);
    }
  }

  // Método invocado cuando se selecciona un árbol desde el desplegable
  onArbolSelect(event: any) {
    const arbolId = event.target.value; // Obtener el ID del árbol seleccionado desde el evento
    this.arbolSeleccionado.emit(Number(arbolId)); // Emitir el evento con el ID del árbol seleccionado convertido a número
  }
}
