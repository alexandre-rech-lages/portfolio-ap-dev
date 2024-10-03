import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voltar-topo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './voltar-topo.component.html',
  styleUrl: './voltar-topo.component.scss'
})
export class VoltarTopoComponent implements OnInit {

  esconderBotao = true;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.esconderBotao = window.pageYOffset === 0;
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
