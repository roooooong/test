import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaohsiungComponent } from './kaohsiung.component';

describe('KaohsiungComponent', () => {
  let component: KaohsiungComponent;
  let fixture: ComponentFixture<KaohsiungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KaohsiungComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaohsiungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
