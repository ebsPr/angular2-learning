import { Component, OnInit } from '@angular/core';
import { NavController,NavParams,AlertController } from "ionic-angular";
import { Lista } from "../../app/clases/listas";
import { ListaItem } from "../../app/clases/lista-item";
import { ListaDeseosService } from "../../app/services/lista-deseos-service";

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {

    index: number;
    lista: any;

    constructor(
        public navController: NavController,
        public navParams: NavParams,
        public listaDeseosService: ListaDeseosService,
        public alertController: AlertController
    ) { 
        console.log(navParams)
        this.index = this.navParams.get('index');
        this.lista = this.navParams.get('lista');
    }

    ngOnInit() { 

    }

    actualizar(item: ListaItem){
        item.completado = !item.completado;
        console.log('find')
        console.log(this.lista.items.find(x => !x.completado))
        this.lista.terminada = true;
        if (this.lista.items.find(x => !x.completado)){
            this.lista.terminada  = false;
        }
        
        this.listaDeseosService.actualizarData();
    }
    
    borrarItem(){
        let confirm = this.alertController.create({
            title: 'Eliminar Lista?',
            message: 'Si elimina esta lista ya no hay vuelta atrás',
            buttons: [
              {
                text: 'Mejor no!',
                handler: () => {
                  console.log('Disagree clicked');
                }
              },
              {
                text: 'Sí, seguro',
                handler: () => {
                    this.listaDeseosService.eliminarLista(this.index);
                    this.navController.pop();
                  console.log('Agree clicked');
                }
              }
            ]
          });
          confirm.present();
        
    }

}