import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SecondComponent } from './second-component.component';
import { MathService } from '../services/math.service';

/*
  xdescribe - if you want to ignore this test
  fdescribe - if you want to run only this test
*/

describe('SecondComponent', () => {
  let component: SecondComponent;
  let fixture: ComponentFixture<SecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondComponent ],
      providers: [MathService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have myNumber not equals to 3', () => {
    component.setMyNumber(4);
    expect(component.getMyNumber()).not.toBe(3);
  });

  //makes more sense in math.service.spec, but it's here for checking purposes
  it('mathService should add two numbers correctly', inject([MathService], (service: MathService) => {
    expect(service.add(1, 2)).toEqual(3);
  }));
});
