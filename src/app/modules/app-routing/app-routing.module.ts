import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from '@app/components/apod/apod/apod.component';
import { BeersComponent } from '@app/components/beers/beers/beers.component';
import { TemplateComponent } from '@app/components/forms/template/template.component';
import { HeroesComponent } from '@app/components/heroes/heroes/heroes.component';

const routes: Routes = [
  { path: "heroes", component: HeroesComponent},
  { path: "apod", component: ApodComponent },
  { path: "beers", loadComponent: () =>  import("@app/components/beers/beers/beers.component").then(m => m.BeersComponent)},
  { path: "reactive", loadComponent: () => import("@app/components/forms/reactive/reactive.component").then(m => m.ReactiveComponent) }, // Lazy loading
  { path: "template", component: TemplateComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
