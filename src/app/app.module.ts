import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondComponent } from './second-component/second-component.component';
import { Routes, RouterModule } from '@angular/router';
import { MathService } from './services/math.service';

export const appRoutes: Routes = [
  { path: 'second-component', component: SecondComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }
    )
  ],
  providers: [MathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
