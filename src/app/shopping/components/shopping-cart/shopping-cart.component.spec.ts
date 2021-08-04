import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCardComponent;
  let fixture: ComponentFixture<ShoppingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
