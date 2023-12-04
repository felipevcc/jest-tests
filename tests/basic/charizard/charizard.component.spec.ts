import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharizardComponent } from '../../../src/app/basic/charizard/charizard.component';
import { PokemonService } from '../../../src/app/basic/services/pokemon.service';

describe('CharizardComponent', () => {
  let component: CharizardComponent;
  let fixture: ComponentFixture<CharizardComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharizardComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonService
      ]
    });
    fixture = TestBed.createComponent(CharizardComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Debe de hacer match con el snapshot', () => {
    console.log(compiled.innerHTML);
  });
});
