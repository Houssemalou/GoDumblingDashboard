import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersStatesStatictsComponent } from './orders-states-staticts.component';

describe('OrdersStatesStatictsComponent', () => {
  let component: OrdersStatesStatictsComponent;
  let fixture: ComponentFixture<OrdersStatesStatictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersStatesStatictsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersStatesStatictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
