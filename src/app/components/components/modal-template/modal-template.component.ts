import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrl: './modal-template.component.css'
})
export class ModalTemplateComponent {

  // Inputting variable from home component
  @Input() title: any;
  @Input() information: any;
  @Input() isHiddenCApplied = false || true;

  // Emitting events for modals

  @Output() hideEl = new EventEmitter<void>();

  btnHideEl(): void{
      this.hideEl.emit();
  }

}