import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { ClientLocalStorageComponent } from './client-local-storage/client-local-storage.component';
import { ClientReactiveFromLocalstorageComponent } from './client-reactive-from-localstorage/client-reactive-from-localstorage.component';
import { ClientWithServiceComponent } from './client-with-service/client-with-service.component';
import { ClientWithoutServicesComponent } from './client-without-services/client-without-services.component';
import { CompanyDataComponent } from './company-data/company-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeProjectComponent } from './employee-project/employee-project.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { GalleryPageComponent } from './Machine-Test/gallery-page/gallery-page.component';
import { HomePageComponent } from './Machine-Test/home-page/home-page.component';
import { ProfilePageComponent } from './Machine-Test/profile-page/profile-page.component';
import { SettingPageComponent } from './Machine-Test/setting-page/setting-page.component';
import { MovieTicketComponent } from './movie-ticket/movie-ticket.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { ProductBillComponent } from './product-bill/product-bill.component';
import { AuthGuard } from './services/guards/auth.guard';


import { SignupLoginComponent } from './signup-login_interceptor/signup-login.component';

import { StudentAppComponent } from './student-app/student-app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { VideoPlaylistComponent } from './video-playlist/video-playlist.component';

const routes: Routes = [
  {
    path: '',
    component: SignupLoginComponent,

  },
  {
    path: 'loginSignup',
    component: SignupLoginComponent,

  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent,

      },
      {
        path: 'Portfolio',
        component: MyPortfolioComponent
      },
      {
        path: 'Employee_Project',
        component:EmployeeProjectComponent
      },
      {
        path: 'Machine_Test',
        component:HomePageComponent
      },
      {
        path: 'Profile-Page',
        component: ProfilePageComponent
      },
      {
        path: 'Gallery-Page',
        component: GalleryPageComponent
      },
      {
        path: 'Setting-Page',
        component: SettingPageComponent
      },
      {
        path:'StudentApp',
        component:StudentAppComponent
      },

      {
        path: 'Signup_login',
        component: SignupLoginComponent
      },
      {
        path: 'addUser',
        component: AddUserComponent
      },
      {
        path: 'todoApp',
        component: TodoAppComponent
      },
      {
        path: 'logIn',
        component: LoginComponent
      },
      {
        path: 'movieTicket',
        component: MovieTicketComponent
      },
      {
        path: 'productBill',
        component: ProductBillComponent
      },
      {
        path: 'candidature',
        component: CandidatureComponent
      },
      {
        path: 'VideoPlaylist',
        component: VideoPlaylistComponent,
      },
      {
        path: 'ClientWithoutService',
        component: ClientWithoutServicesComponent,
      },
      {
        path: 'ClientWithService',
        component: ClientWithServiceComponent,
      },
      {
        path: 'ClientLocalStorage',
        component: ClientLocalStorageComponent,
      },
      {
        path: 'ClientReactiveFormLocalStorage',
        component: ClientReactiveFromLocalstorageComponent,
      },

      {
        path: 'cpmnyData',
        component: CompanyDataComponent,
      },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
