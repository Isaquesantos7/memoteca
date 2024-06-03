import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThoughtsComponent } from './new-thoughts.component';

describe('NewThoughtsComponent', () => {
  let component: NewThoughtsComponent;
  let fixture: ComponentFixture<NewThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewThoughtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
