import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule, } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { HumanRessourcesComponent } from './human-ressources/human-ressources.component';
import { HumanRessourcesAddComponent } from './human-ressources-add/human-ressources-add.component';
import { HumanRessourcesDetailsComponent } from './human-ressources-details/human-ressources-details.component';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
  StorageBucket
} from "@angular/fire/storage";
import { WelcomeComponent } from './welcome/welcome.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { VehiculesAddComponent } from './vehicules-add/vehicules-add.component';
import { VehiculesEditComponent } from './vehicules-edit/vehicules-edit.component';
import { TripsComponent } from './trips/trips.component';
import { TripsAddComponent } from './trips-add/trips-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    HumanRessourcesComponent,
    HumanRessourcesAddComponent,
    HumanRessourcesDetailsComponent,
    WelcomeComponent,
    VehiculesComponent,
    VehiculesAddComponent,
    VehiculesEditComponent,
    TripsComponent,
    TripsAddComponent
  ],
  imports: [
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFirestoreModule,
    AngularFireStorageModule,
    
    
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAThfDIrXEvQ6NBmEVJXrmiAZ6Q1kQWQWA",
      authDomain: "ticket-18624.firebaseapp.com",
      projectId: "ticket-18624",
      storageBucket: "ticket-18624.appspot.com",
      messagingSenderId: "300326302481",
      appId: "1:300326302481:web:b00a47aa2bdf588ccf52b0",
      measurementId: "G-6NM6SYHKZR"

    }),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
