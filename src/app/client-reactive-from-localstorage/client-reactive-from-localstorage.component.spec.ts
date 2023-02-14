import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReactiveFromLocalstorageComponent } from './client-reactive-from-localstorage.component';

describe('ClientReactiveFromLocalstorageComponent', () => {
  let component: ClientReactiveFromLocalstorageComponent;
  let fixture: ComponentFixture<ClientReactiveFromLocalstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientReactiveFromLocalstorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientReactiveFromLocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
