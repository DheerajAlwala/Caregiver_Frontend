import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachidComponent } from './serachid.component';

describe('SerachidComponent', () => {
  let component: SerachidComponent;
  let fixture: ComponentFixture<SerachidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
