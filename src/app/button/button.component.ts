import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  /**
   * What color to use for text
   */
  @Input()
  color?: string;
  /**
   * What background color to use
   */
  @Input()
  backGroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Icon class
   *
   *
   */
  @Input()
  icon = 'user';
  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    return ['storybook-button', `storybook-button--${this.size}`];
  }

  open: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
