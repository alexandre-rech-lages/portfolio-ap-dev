import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() gifSource: string = ''; // Caminho do GIF
  @Input() modalId: string = ''; // ID do modal
  @Input() modalTitle: string = ''; // Título do modal
}
