import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TainanComponent } from './tainan.component';

describe('TainanComponent', () => {
  let component: TainanComponent;
  let fixture: ComponentFixture<TainanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TainanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TainanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
