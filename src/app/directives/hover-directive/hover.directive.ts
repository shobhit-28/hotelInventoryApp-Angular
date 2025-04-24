import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]',
  standalone: true
})
export class HoverDirective implements OnInit {

  @Input() hinvHover: string = 'red'

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement)
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.hinvHover
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'aliceblue'
    )
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'steelBlue'
    )
  }
}
