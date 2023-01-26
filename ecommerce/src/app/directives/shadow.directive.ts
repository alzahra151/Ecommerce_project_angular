import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private ele:ElementRef) { }

  
}
