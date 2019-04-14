import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoveredComment]'
})
export class HoveredCommentDirective {

  constructor(private el: ElementRef) { }

  @Input('appHoveredComment') color: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.selectComment(this.color || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.boxShadow = '';
  }
  private selectComment(color) {
    this.el.nativeElement.style.boxShadow = color + ' 3px 3px';
  }
}
