import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import{AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environnements/environnement';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashbord/dashbord.component';
import{FormsModule} from '@angular/forms'
import { ForgotPasswordComponent} from './shared/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './shared/varify-email/varify-email.component';
import { FileuploadComponent } from './shared/fileupload/fileupload.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    VarifyEmailComponent,
    ForgotPasswordComponent,
    FileuploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
    
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"student-managment-systeme","appId":"1:416098620181:web:805bbc57b366c74eb70f1c","storageBucket":"student-managment-systeme.firebasestorage.app","apiKey":"AIzaSyCRocmdoV6iQ3kOWAeA2kAl_At8GYyVIB4","authDomain":"student-managment-systeme.firebaseapp.com","messagingSenderId":"416098620181"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
