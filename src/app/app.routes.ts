import { Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { ApodComponent } from './components/apod/apod/apod.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/error/page-not-found/page-not-found.component';
import { QuizComponent } from './components/trivia/quiz/quiz.component';

export const routes: Routes = [
    { path: "", redirectTo: "apod", pathMatch: "full"},
    { path: "heroes", component: HeroesComponent},
    { path: "apod", component: ApodComponent },
    { path: "beers", component: BeersComponent },
    { path: "reactive", component: ReactiveComponent },
    { path: "not-found", component: PageNotFoundComponent},
    { path: "template", component: TemplateComponent },
    { path: "trivia", component: QuizComponent},
    { path: "**", redirectTo: "not-found" }];
