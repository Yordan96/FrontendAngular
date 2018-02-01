import { Component } from '@angular/core';
import {PreguntasService} from "../services/preguntas.service";

@Component({
    selector: 'app-preguntas',
    templateUrl: './preguntas.component.html'
})
export class PreguntaComponent {
    preguntas= null;
    comentarios = null;

    preg:any = {};
    com:any = {};

    constructor(private preguntasService: PreguntasService){
       // this.preguntas=this.preguntasService.getPreguntas();

       preguntasService.getPreguntas()
            .subscribe(preguntas =>{
                this.preguntas=preguntas;
            }, error => {
                console.log(error);
                alert('No funciono. Error: '+error.statusText);
            })

        preguntasService.getComentarios()
            .subscribe(comentarios =>{
                this.comentarios=comentarios;
            }, error => {
                console.log(error);
                alert('No funciono. Error: '+error.statusText);
            });
    }

    public publicarPregunta(){
        this.preguntasService.postPregunta(this.preg.titulo, this.preg.desc);
        alert('pregunta publicada');
        this.preg={};
    }

    public publicarComentario(titulo){
        this.preguntasService.postComentario(titulo, this.com.comentario);
        alert('Comentario publicado');
        this.com={};
    }
}