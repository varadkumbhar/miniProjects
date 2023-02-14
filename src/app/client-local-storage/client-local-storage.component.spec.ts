import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLocalStorageComponent } from './client-local-storage.component';

describe('ClientLocalStorageComponent', () => {
  let component: ClientLocalStorageComponent;
  let fixture: ComponentFixture<ClientLocalStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLocalStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
