import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorAcessoComponent } from './indicador-acesso.component';

describe('IndicadorAcessoComponent', () => {
  let component: IndicadorAcessoComponent;
  let fixture: ComponentFixture<IndicadorAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicadorAcessoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicadorAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
