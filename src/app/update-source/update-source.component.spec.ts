import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSourceComponent } from './update-source.component';

describe('UpdateSourceComponent', () => {
  let component: UpdateSourceComponent;
  let fixture: ComponentFixture<UpdateSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
