import {Component, OnInit} from '@angular/core';
import {ClienteServicio} from "../../servicios/cliente.service";
import {Cliente} from "../../modelo/cliente.model";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clientesServicio: ClienteServicio) {
  }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    )
  }

}
