import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWithServiceComponent } from './client-with-service.component';

describe('ClientWithServiceComponent', () => {
  let component: ClientWithServiceComponent;
  let fixture: ComponentFixture<ClientWithServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWithServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
