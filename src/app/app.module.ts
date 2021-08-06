import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'jornadas', component: JornadasRepoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'jornadas/form', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JornadasRepoComponent,
    InicioComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JornadaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
