import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoltarTopoComponent } from "./components/voltar-topo/voltar-topo.component";
import { ModalComponent } from "./components/modal/modal.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BannerComponent } from "./secoes/banner/banner.component";
import { SobreComponent } from './secoes/sobre/sobre.component';
import { SkillsComponent } from "./secoes/skills/skills.component";
import { PortfolioComponent } from "./secoes/portfolio/portfolio.component";
import { ContatoComponent } from "./secoes/contato/contato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VoltarTopoComponent,
    ModalComponent,
    NavbarComponent,
    BannerComponent,
    SobreComponent,
    SkillsComponent,
    PortfolioComponent,
    ContatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
