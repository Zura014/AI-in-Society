import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrl: './modal-template.component.css'
})
export class ModalTemplateComponent {
  
  @Input() isClickedModal: boolean = true;

  @Input() toggleModal(){
    this.isClickedModal =!this.isClickedModal;
  }
}
