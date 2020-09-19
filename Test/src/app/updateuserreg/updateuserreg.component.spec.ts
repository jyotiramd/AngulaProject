import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserregComponent } from './updateuserreg.component';

describe('UpdateuserregComponent', () => {
  let component: UpdateuserregComponent;
  let fixture: ComponentFixture<UpdateuserregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuserregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuserregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
