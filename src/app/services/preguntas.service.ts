import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PreguntasService{
    headers = new Headers();
    preguntas = {};
    constructor(private http:Http) {}

    /*public getPreguntas(){
        return this.http.get('/api/preguntas/')
            .map((resultado)=>{
                const data= resultado.json().preguntas;
                debugger;
                return data;
            });
    }*/

    public getPreguntas(){
        return this.http.get('/api/preguntas/')
            .map((res:Response)=> res.json())
    }

    public getComentarios(){
        return this.http.get('/api/comentario')
            .map((res:Response)=> res.json())
    }

    public postPregunta(title,description){
        const req = this.http.post('/api/preguntas/', {
            titulo: title,
            descripcion: description
        })
            .subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log("Ocurrio un error: "+err);
                }
            );
    }

    public postComentario(pregunta,comentario){
        const req = this.http.post('/api/comentario/', {
            pregunta: pregunta,
            comentario: comentario
        })
            .subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    console.log("Ocurrio un error"+err);
                }
            );
    }

}