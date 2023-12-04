import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/basic/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Debe de hacer match con el snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  test('increaseBy debe incrementar basado en el argumento (5)', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(15);
  });
  
  test('Hacer click en los botones debe incrementar y decrementar en 1', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11);
    
    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(9);
  });

  test('Cambiar el counter debe de actualizar la etiqueta h1', () => {
    component.increaseBy(10);
    fixture.detectChanges();
    
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20');
  });
});
