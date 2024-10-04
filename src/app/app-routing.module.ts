import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosComponent } from './components/pages/demos/demos.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home-seven/home-seven.component';
import { HomeEighthComponent } from './components/pages/home-eighth/home-eighth.component';
import { HomeNineComponent } from './components/pages/home-nine/home-nine.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { CountersComponent } from './components/pages/counters/counters.component';
import { CountdownsComponent } from './components/pages/countdowns/countdowns.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { PricingsComponent } from './components/pages/pricings/pricings.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ComingSoonComponent } from './components/pages/coming-soon/coming-soon.component';
import { ShowCaseComponent } from './components/pages/show-case/show-case.component';

const routes: Routes = [
  {path: '', component: DemosComponent},
  {path: 'home-one', component: HomeOneComponent},
  {path: 'home-two', component: HomeTwoComponent},
  {path: 'home-three', component: HomeThreeComponent},
  {path: 'home-four', component: HomeFourComponent},
  {path: 'home-five', component: HomeFiveComponent},
  {path: 'home-six', component: HomeSixComponent},
  {path: 'home-seven', component: HomeSevenComponent},
  {path: 'home-eighth', component: HomeEighthComponent},
  {path: 'home-nine', component: HomeNineComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-details', component: BlogDetailsComponent},
  {path: 'counters', component: CountersComponent},
  {path: 'countdowns', component: CountdownsComponent},
  {path: 'testimonials', component: TestimonialsComponent},
  {path: 'pricings', component: PricingsComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'coming-soon', component: ComingSoonComponent},
  {path: 'show-case', component: ShowCaseComponent},
  // Here add new pages component

  {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
