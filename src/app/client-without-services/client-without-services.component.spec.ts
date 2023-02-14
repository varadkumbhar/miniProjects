import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWithoutServicesComponent } from './client-without-services.component';

describe('ClientWithoutServicesComponent', () => {
  let component: ClientWithoutServicesComponent;
  let fixture: ComponentFixture<ClientWithoutServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWithoutServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientWithoutServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
