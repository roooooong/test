import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichungComponent } from './taichung.component';

describe('TaichungComponent', () => {
  let component: TaichungComponent;
  let fixture: ComponentFixture<TaichungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaichungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaichungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
