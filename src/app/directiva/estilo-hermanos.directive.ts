import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]',
  standalone: true
})
export class EstiloHermanosDirective {

  constructor(private element: ElementRef) { 
    //element ref que pueda aplicarles cambios a la directiva
    this.element.nativeElement.style.textTransform = 'capitalize';
  } 

}
