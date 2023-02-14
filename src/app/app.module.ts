import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { SignupLoginComponent } from './signup-login_interceptor/signup-login.component';

import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { StudentAppComponent } from './student-app/student-app.component';
import { HomePageComponent } from './Machine-Test/home-page/home-page.component';
import { ProfilePageComponent } from './Machine-Test/profile-page/profile-page.component';
import { GalleryPageComponent } from './Machine-Test/gallery-page/gallery-page.component';
import { SettingPageComponent } from './Machine-Test/setting-page/setting-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MorelessComponent } from './Widgets/moreless/moreless.component';
import { AlertComponent } from './Widgets/alert/alert.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { LoginComponent } from './login/login.component';
import { MovieTicketComponent } from './movie-ticket/movie-ticket.component';
import { ProductBillComponent } from './product-bill/product-bill.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';
import { ClientWithoutServicesComponent } from './client-without-services/client-without-services.component';
import { ClientWithServiceComponent } from './client-with-service/client-with-service.component';
import { ClientLocalStorageComponent } from './client-local-storage/client-local-storage.component';
import { AuthGuard } from './services/guards/auth.guard';
import { NaPipe } from './Pipe/na.pipe';
import { VoidButtonComponent } from './Widgets/void-button/void-button.component';
import { ClientReactiveFromLocalstorageComponent } from './client-reactive-from-localstorage/client-reactive-from-localstorage.component';
import { CompanyDataComponent } from './company-data/company-data.component';






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    SignupLoginComponent,

    EmployeeProjectComponent,
    StudentAppComponent,
    HomePageComponent,
    ProfilePageComponent,
    GalleryPageComponent,
    SettingPageComponent,
    AddUserComponent,
    MorelessComponent,
    AlertComponent,
    TodoAppComponent,
    MyPortfolioComponent,
    LoginComponent,
    MovieTicketComponent,
    ProductBillComponent,
    CandidatureComponent,
    VideoPlaylistComponent,
    ClientWithoutServicesComponent,

    ClientWithServiceComponent,
     ClientLocalStorageComponent,
     NaPipe,
     VoidButtonComponent,
     ClientReactiveFromLocalstorageComponent,
     CompanyDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
