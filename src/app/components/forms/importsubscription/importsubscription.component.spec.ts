import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportsubscriptionComponent } from './importsubscription.component';

describe('ImportsubscriptionComponent', () => {
  let component: ImportsubscriptionComponent;
  let fixture: ComponentFixture<ImportsubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportsubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
