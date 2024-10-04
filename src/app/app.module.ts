import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgCircleProgressModule } from 'ng-circle-progress';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DemosComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    HomeSixComponent,
    HomeSevenComponent,
    HomeEighthComponent,
    HomeNineComponent,
    BlogComponent,
    BlogDetailsComponent,
    CountersComponent,
    CountdownsComponent,
    TestimonialsComponent,
    PricingsComponent,
    ErrorComponent,
    ComingSoonComponent,
    ShowCaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    NgxParallaxModule,
    BrowserAnimationsModule,
    NgxScrollTopModule,
    NgCircleProgressModule.forRoot({})
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
