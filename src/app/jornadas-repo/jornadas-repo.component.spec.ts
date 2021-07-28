import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JornadasRepoComponent } from './jornadas-repo.component';

describe('JornadasRepoComponent', () => {
  let component: JornadasRepoComponent;
  let fixture: ComponentFixture<JornadasRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JornadasRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JornadasRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
