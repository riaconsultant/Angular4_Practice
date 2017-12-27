import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicLayoutHeaderComponent } from './public-layout-header.component';

describe('PublicLayoutHeaderComponent', () => {
  let component: PublicLayoutHeaderComponent;
  let fixture: ComponentFixture<PublicLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
