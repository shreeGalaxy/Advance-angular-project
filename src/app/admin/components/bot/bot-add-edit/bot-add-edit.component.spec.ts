import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAddEditComponent } from './bot-add-edit.component';

describe('BotAddEditComponent', () => {
  let component: BotAddEditComponent;
  let fixture: ComponentFixture<BotAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
