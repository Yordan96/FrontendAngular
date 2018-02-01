import { Component } from '@angular/core';
import {PreguntasService} from "../services/preguntas.service";

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent {
    preguntas= null;
    constructor(private preguntasService: PreguntasService){
       // this.preguntas=this.preguntasService.getPreguntas();

       preguntasService.getPreguntas()
            .subscribe(preguntas =>{
                this.preguntas=preguntas;
            }, error => {
                console.log(error);
                alert('No funciono. Error: '+error.statusText);
            });
    }
}