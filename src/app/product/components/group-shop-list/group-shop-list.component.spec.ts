import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupShopListComponent } from './group-shop-list.component';

describe('GroupShopListComponent', () => {
  let component: GroupShopListComponent;
  let fixture: ComponentFixture<GroupShopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupShopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
