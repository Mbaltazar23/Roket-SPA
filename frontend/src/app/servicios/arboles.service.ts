// Servicio ArbolesService para la gestión de operaciones relacionadas con los árboles
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArbolesService {

  private apiUrl = 'http://localhost:3000/api'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Obtener todos los árboles
  getArboles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/arboles`);
  }

  // Obtener información de un árbol por su ID
  getArbolById(arbolId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/arboles/${arbolId}`);
  }

  // Agregar un comentario a un árbol
  agregarComentario(arbolId: number, comentario: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/comentarios`, { arbolId, comentario });
  }

  // Obtener fotos de un árbol por su ID
  getFotosArbol(arbolId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/fotos/${arbolId}`);
  }

  // Obtener la ubicación de un árbol por el ID de su ubicación
  getUbicacionArbol(ubicacion_id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/arboles/ubicacion/${ubicacion_id}`);
  }
}
