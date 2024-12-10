import {Component, OnInit, OnDestroy, PLATFORM_ID, Inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { interval } from 'rxjs';
import {isPlatformBrowser} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {NearbyDevice} from './interfaces/indicador-acesso.interfaces';

@Component({
  selector: 'app-indicador-acesso',
  templateUrl: './indicador-acesso.component.html',
  standalone: true,
  imports: [MatButtonModule],
  styleUrls: ['./indicador-acesso.component.css'],
})
export class IndicadorAcessoComponent implements OnInit {
  botaoCor: 'primary' | 'warn' = 'warn';
  statusMensagem: string = 'Acesso Negado';
  isBrowser: boolean = false;
  nearbyDevices: NearbyDevice[] = [];

  private readonly backendUrl = 'http://localhost:3000/nearby-devices';

  constructor(@Inject(PLATFORM_ID) platformId: object, private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    console.log('Componente carregado e inicializado.');
    this.verificarAcesso();
  }


  verificarAcesso() {
    // Simula o status de acesso
    if(this.isBrowser) {

      setInterval(() => {
        this.http.get<NearbyDevice[]>(this.backendUrl).subscribe(
          (devices) => {
            this.nearbyDevices = devices;

            const dispositivoPermitido = this.nearbyDevices.find(
              (device) => {
                return parseInt(device.rssi) > -40 && device.mac == "34:fe:77:f2:09:43"
              }
            )
            console.log(dispositivoPermitido);
            if(dispositivoPermitido) {
              this.botaoCor = 'primary';
              this.statusMensagem = 'Acesso Permitido';
            }else{
              this.botaoCor = 'warn';
              this.statusMensagem = 'Acesso Negado';
            }
          },
          (error) => {
            console.log('Erro backend', error);
            this.botaoCor = 'warn'
            this.statusMensagem = 'Erro conectar servidor';
          });
      }, 2000)
    }
  }

}
