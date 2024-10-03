import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from './models/skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  public skills: Skill[] = [
      { imageSource: "https://skillicons.dev/icons?i=html&theme=light", texto: "Home" },
      { imageSource: "https://skillicons.dev/icons?i=css&theme=light", texto: "CSS3" },
      { imageSource: "https://skillicons.dev/icons?i=bootstrap&theme=light", texto: "Bootstrap" },
      { imageSource: "https://skillicons.dev/icons?i=js&theme=light", texto: "JavaScript" },
      { imageSource: "https://skillicons.dev/icons?i=ts&theme=light", texto: "TypeScript" },
      { imageSource: "https://skillicons.dev/icons?i=angular&theme=light", texto: "Angular" },
      { imageSource: "https://skillicons.dev/icons?i=cypress&theme=light", texto: "Cypress" },
      { imageSource: "https://skillicons.dev/icons?i=git&theme=light", texto: "Git" },
      { imageSource: "https://skillicons.dev/icons?i=github&theme=light", texto: "Github" },
      { imageSource: "https://skillicons.dev/icons?i=vscode&theme=light", texto: "VS Code" },
      { imageSource: "https://skillicons.dev/icons?i=cs&theme=light", texto: "C#" },
      { imageSource: "https://skillicons.dev/icons?i=net&theme=light", texto: ".net Core" },
      { imageSource: "assets/sql-server-icon.png", texto: "Sql Server" },
      { imageSource: "https://skillicons.dev/icons?i=postman&theme=light", texto: "Postman" },
      { imageSource: "https://skillicons.dev/icons?i=selenium&theme=light", texto: "Selenium" },
      { imageSource: "https://skillicons.dev/icons?i=docker&theme=light", texto: "Docker" },
      { imageSource: "https://skillicons.dev/icons?i=azure&theme=light", texto: "Azure" },
      { imageSource: "https://skillicons.dev/icons?i=visualstudio&theme=light", texto: "Visual Studio" }
  ];
}
