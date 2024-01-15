// Importaciones necesarias del módulo Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comentario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent {
  @Output() comentarioEnviado = new EventEmitter<string>(); // Evento para notificar que se ha enviado un comentario
  @Input() mensajeRespuesta: string = ''; // Propiedad para recibir el mensaje de respuesta del servidor

  nuevoComentario: string = ''; // Variable para almacenar el nuevo comentario ingresado por el usuario

  // Método invocado al hacer clic en el botón "Enviar Comentario"
  enviarComentario() {
    // Verificar que el nuevo comentario no esté vacío
    if (this.nuevoComentario.trim() !== '') {
      // Emitir el evento con el nuevo comentario
      this.comentarioEnviado.emit(this.nuevoComentario);
      this.nuevoComentario = ''; // Limpiar el campo después de enviar el comentario
    } else {
      alert('El comentario no puede estar vacío'); // Mostrar una alerta si el comentario está vacío
    }
  }
}
