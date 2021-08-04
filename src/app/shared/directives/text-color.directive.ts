import { Directive, ElementRef, Renderer2, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
  @Input('appTextColor') defaultColor=' ';

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setTextColor(this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setTextColor('black')
  }

  setTextColor(color: string) {
    this.render.setStyle(
      this.el.nativeElement,
      'color',
      color
    )
  }
}
