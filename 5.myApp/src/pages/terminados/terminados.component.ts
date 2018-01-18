import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos-service';
import { NavController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar.component";
import { DetalleComponent } from "../detalle/detalle.component";

@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosComponent implements OnInit {
    constructor(private _listaDeseosService: ListaDeseosService,
        private _navController: NavController) {
        console.log(this._listaDeseosService)
    }

    ngOnInit() { }

    irAgregar() {
        this._navController.push(AgregarComponent)
    }
    verDetalle(lista, index) {
        this._navController.push(DetalleComponent, { lista, dex: index });
    }
}