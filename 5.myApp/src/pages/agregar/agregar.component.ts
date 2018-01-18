import { Component, OnInit } from '@angular/core';
import { ListaItem } from "../../app/clases/lista-item";
import { Lista } from "../../app/clases/listas";
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from "../../app/services/lista-deseos-service";

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {
    
    nombreLista: string= '';
    nombreItem: string= '';

    items:ListaItem[] = [];

    constructor(
        public alertController: AlertController,
        public navController: NavController,
        public listaDeseosService: ListaDeseosService
    ) { }

    ngOnInit() { }

    agregar(){
        if(this.nombreItem.length == 0){
            return;
        }
        let item = new ListaItem();
        item.nombre = this.nombreItem;

        this.items.push(item);
        this.nombreItem = '';
    }

    borrarItem( index: number){
        this.items.splice(index,1);
    }

    guardarLista(){
        if(this.nombreLista.length == 0){
            let alert = this.alertController.create({
                title: 'Nombre de la lista',
                subTitle: 'El nombre de la Lista es necesario!',
                buttons: ['OK']
              });
              alert.present();
            return
        }

        let newLista = new Lista(this.nombreLista);
        newLista.items = this.items;
        //this.listaDeseosService.listas.push(newLista);
        this.listaDeseosService.agregarLista(newLista);

        this.navController.pop();
    }
}