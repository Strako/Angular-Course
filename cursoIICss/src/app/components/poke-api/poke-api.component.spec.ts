import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAPIComponent } from './poke-api.component';

describe('PokeAPIComponent', () => {
  let component: PokeAPIComponent;
  let fixture: ComponentFixture<PokeAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
