import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopaisComponent } from './demopais.component';

describe('DemopaisComponent', () => {
  let component: DemopaisComponent;
  let fixture: ComponentFixture<DemopaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemopaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemopaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
