import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEighthComponent } from './home-eighth.component';

describe('HomeEighthComponent', () => {
  let component: HomeEighthComponent;
  let fixture: ComponentFixture<HomeEighthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeEighthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeEighthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
