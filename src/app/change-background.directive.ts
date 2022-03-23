import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBackground]',
})
export class ChangeBackgroundDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('click') onMouseEnter() {
    this.highlight('yellow');
  }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
