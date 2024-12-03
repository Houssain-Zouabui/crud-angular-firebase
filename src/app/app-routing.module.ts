import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashbord/dashbord.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './shared/varify-email/varify-email.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { FileuploadComponent } from './shared/fileupload/fileupload.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashbord', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'varify-email', component : VarifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
  {path : 'file-upload', component:FileuploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
