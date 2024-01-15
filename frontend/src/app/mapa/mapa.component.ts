// Importaciones necesarias del módulo Angular
import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ArbolesService } from '../servicios/arboles.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Declaración de la variable global de Google Maps
declare var google: any;

@Component({
  // Selector del componente
  selector: 'app-mapa',
  // Propiedades del componente
  standalone: true,
  imports: [CommonModule, FormsModule],
  // Rutas de los archivos de plantilla y estilos
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})

// Definición de la clase del componente
export class MapaComponent implements OnChanges, AfterViewInit {
  // Propiedad de entrada para recibir el ID del árbol desde el componente padre
  @Input() arbolId?: number;
  // Objeto para almacenar la ubicación del árbol
  ubicacion: any;
  // Referencia al contenedor del mapa en el HTML
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  // Constructor del componente, inyecta el servicio ArbolesService
  constructor(private arbolesService: ArbolesService) {}

  // Método del ciclo de vida llamado cuando hay cambios en las propiedades de entrada
  ngOnChanges(changes: SimpleChanges): void {
    // Verificar si hay cambios en la propiedad 'arbolId' y si hay un valor actual
    if (changes['arbolId'] && changes['arbolId'].currentValue) {
      // Llamar al método para obtener la ubicación del árbol
      this.obtenerUbicacionArbol(changes['arbolId'].currentValue);
    }
  }

  // Método del ciclo de vida llamado después de que la vista del componente se ha inicializado
  ngAfterViewInit(): void {
    // Verificar si hay una ubicación válida y llamar a la inicialización del mapa
    if (this.ubicacion) {
      this.inicializarMapa();
    }
  }

  // Método privado para obtener la ubicación del árbol a partir de su ID
  private obtenerUbicacionArbol(arbolId: number) {
    // Verificar que el ID del árbol sea válido
    if (arbolId) {
      // Llamar al servicio para obtener la información del árbol por su ID
      this.arbolesService.getArbolById(arbolId).subscribe(
        (arbol) => {
          // Obtener el ID de la ubicación asociada al árbol
          const ubicacionId = arbol.ubicacion_id;
          // Verificar si hay un ID de ubicación
          if (ubicacionId) {
            // Llamar al servicio para obtener la información de la ubicación por su ID
            this.arbolesService.getUbicacionArbol(ubicacionId).subscribe(
              (ubicacion) => {
                // Verificar si se obtuvo una ubicación válida
                if (ubicacion && ubicacion.length > 0) {
                  // Almacenar la ubicación y llamar a la inicialización del mapa después de que la vista se haya inicializado
                  this.ubicacion = ubicacion[0];
                  setTimeout(() => {
                    this.inicializarMapa();
                  });
                } else {
                  console.error('La ubicación del árbol no está definida.');
                }
              },
              (error) => {
                console.error('Error al obtener ubicación del árbol:', error);
              }
            );
          } else {
            console.error('El árbol no tiene una ubicación asociada.');
          }
        },
        (error) => {
          console.error('Error al obtener árbol por ID:', error);
        }
      );
    } else {
      console.error('ID del árbol no válido.');
    }
  }

  // Método privado para inicializar el mapa con la ubicación del árbol
  private inicializarMapa() {
    // Verificar que el contenedor del mapa esté disponible
    if (!this.mapContainer) {
      console.error('El contenedor del mapa no está disponible.');
      return;
    }

    // Verificar que la ubicación sea válida
    if (this.ubicacion && this.ubicacion.latitud && this.ubicacion.longitud) {
      // Convertir las coordenadas de la ubicación a números
      const latitud = parseFloat(this.ubicacion.latitud);
      const longitud = parseFloat(this.ubicacion.longitud);

      // Opciones del mapa
      const mapOptions: google.maps.MapOptions = {
        center: { lat: latitud, lng: longitud },
        zoom: 15,
      };

      // Crear un nuevo objeto de mapa de Google Maps en el contenedor proporcionado
      const map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

      // Crear un marcador en la ubicación del árbol
      new google.maps.Marker({
        position: { lat: latitud, lng: longitud },
        map: map,
        title: 'Ubicación del árbol',
      });
    } else {
      console.error('Los valores de latitud y longitud no son válidos.');
    }
  }
}
