import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appIncreaseSadow]'
})
export class IncreaseSadowDirective {

  constructor( private ele:ElementRef) { }

  @HostListener ('mouseover') increaseShadow(){
    this.ele.nativeElement.style.border = '2px solid black'
  }
  @HostListener ('mouseout') decreaseShadow(){
    this.ele.nativeElement.style.border = 'none'
  }

//   @HostListener ('')

 }
