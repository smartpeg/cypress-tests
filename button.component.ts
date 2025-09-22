import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // Input for button label
  @Input() label: string = 'Click Me';

  // Input for button color
  @Input() color: string = 'primary';

  // Output event when button is clicked
  @Output() clicked = new EventEmitter<void>();

  // Trigger click event
  onClick() {
    this.clicked.emit();
  }
}
