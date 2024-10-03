import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoltarTopoComponent } from "./components/voltar-topo/voltar-topo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VoltarTopoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-ap-dev';


}
