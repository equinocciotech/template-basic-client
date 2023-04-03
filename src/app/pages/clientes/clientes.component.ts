import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  constructor(
    private alertService: AlertService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.ubicacionActual = "Dashboard - Clientes";
    this.alertService.loading();
    this.alertService.close();
  }

}
