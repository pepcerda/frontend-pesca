import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JornadasRepoComponent } from './jornadas-repo/jornadas-repo.component';
import { JornadaService } from './jornadas-repo/jornada.service';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './jornadas-repo/form.component';
import { FormsModule } from '@angular/forms';
import { ModalidadComponent } from './jornadas-repo/models/modalidad/modalidad.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { DirvientoComponent } from './jornadas-repo/models/dirviento/dirviento.component';
import { FechasalidaComponent } from './jornadas-repo/models/fechasalida/fechasalida.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'jornadas', component: JornadasRepoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'jornadas/form', component: FormComponent},
  {path: 'jornadas/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JornadasRepoComponent,
    InicioComponent,
    FormComponent,
    ModalidadComponent,
    DirvientoComponent,
    FechasalidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [JornadaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
