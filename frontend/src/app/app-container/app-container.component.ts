// Importaciones de módulos y componentes necesarios
import { Component, OnInit } from '@angular/core';
import { ArbolesService } from '../servicios/arboles.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComentarioComponent } from '../comentario/comentario.component';
import { ArbolesListaComponent } from '../arboles-lista/arboles-lista.component';
import { DetalleArbolComponent } from '../detalle-arbol/detalle-arbol.component';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'app-app-container',
  standalone: true,
  // Importación de módulos y componentes utilizados en el template
  imports: [CommonModule, FormsModule, ArbolesListaComponent, DetalleArbolComponent, MapaComponent, ComentarioComponent],
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.css']
})

// Definición de la clase del componente
export class AppContainerComponent implements OnInit {
  arboles: any[] = []; // Lista de árboles
  selectedArbolId: number | undefined; // ID del árbol seleccionado
  fotos: any[] = []; // Lista de fotos del árbol seleccionado
  nuevoComentario: string = ''; // Nuevo comentario a agregar
  mensajeRespuesta: string = ''; // Mensaje de respuesta de la API al agregar comentario

  // Constructor del componente, inyecta el servicio de árboles
  constructor(private arbolesService: ArbolesService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.obtenerArboles(); // Llama al método para obtener la lista de árboles
  }

  // Método para obtener la lista de árboles desde el servicio
  obtenerArboles() {
    this.arbolesService.getArboles().subscribe(
      // Éxito: asigna los datos recibidos a la lista de árboles
      data => {
        this.arboles = data;

        // Seleccionar el primer árbol por defecto si hay árboles disponibles
        if (this.arboles.length > 0) {
          this.selectedArbolId = this.arboles[0].arbol_id;
          this.obtenerFotosArbol(this.selectedArbolId);
        }
      },
      // Error: muestra un mensaje de error en la consola
      error => {
        console.error('Error al obtener árboles:', error);
      }
    );
  }

  // Método para manejar la selección de un árbol
  onArbolSelect(arbolId: number) {
    this.selectedArbolId = arbolId;
    this.obtenerFotosArbol(arbolId);
  }

  // Método privado para obtener las fotos de un árbol desde el servicio
  private obtenerFotosArbol(arbolId: number | undefined) {
    if (arbolId !== undefined) {
      this.arbolesService.getFotosArbol(arbolId).subscribe(
        // Éxito: asigna las fotos recibidas a la lista de fotos
        fotos => {
          this.fotos = fotos;
        },
        // Error: muestra un mensaje de error en la consola
        error => {
          console.error('Error al obtener las fotos del árbol:', error);
        }
      );
    }
  }

  // Método para manejar el comentario enviado desde el componente Comentario
  manejarComentarioEnviado(nuevoComentario: string) {
    // Verifica que se haya seleccionado un árbol y que el comentario no esté vacío
    if (this.selectedArbolId !== undefined && nuevoComentario.trim() !== '') {
      const arbolId = this.selectedArbolId;
      const comentario = nuevoComentario;

      // Llama al servicio para agregar el comentario al árbol seleccionado
      this.arbolesService.agregarComentario(arbolId, comentario).subscribe(
        // Éxito: muestra un mensaje en la consola y actualiza el mensaje de respuesta
        (respuesta) => {
          console.log('Comentario agregado correctamente.');
          this.mensajeRespuesta = respuesta.message;
          // Realizar otras acciones si es necesario
        },
        // Error: muestra un mensaje de error en la consola
        (error) => {
          console.error('Error al agregar comentario:', error);
        }
      );
    } else {
      // Muestra una alerta si no se selecciona un árbol o el comentario está vacío
      alert('Por favor, selecciona un árbol y escribe un comentario antes de enviar.');
    }
  }
}
