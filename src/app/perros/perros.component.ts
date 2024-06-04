import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Raza, Razas } from "../common/api-perro";
import { DataService } from "../common/data.service";

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  standalone: true,
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {
  perro!: Raza;
  perros!: Razas;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarPerros();
  }

  private cargarPerros() {
    const nombre = this.activatedRoute.snapshot.params['nombre'];
    if (nombre) {
      this.data.loadPerro(nombre).subscribe({
        next: (datos: Razas) => {
          this.perros = datos;
        },
        error: (err: string) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        }
      });
    }
  }

  cambiarPerro(nombre: string) {
    if (nombre) {
      this.router.navigateByUrl("/perros/" + nombre).then(() => this.cargarPerros());
    }
  }
}
