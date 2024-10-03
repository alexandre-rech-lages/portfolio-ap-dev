import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { LinkNavbar } from './models/link-navbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public linksNavbar: LinkNavbar[] = [
    { href: "#", texto: "Home" },
    { href: "#sobre", texto: "Sobre" },
    { href: "#skills", texto: "Skills" },
    { href: "#portfolio", texto: "Portfolio" },
    { href: "#contato", texto: "Contato" },
  ];

}
