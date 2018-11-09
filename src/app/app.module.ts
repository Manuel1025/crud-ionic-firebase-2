import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';



import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { AgregarPage } from '../pages/agregar/agregar';

import { ProductosService }from '../services/productos.services';

export const FIREBASE_CONFIG =  {
  apiKey: "AIzaSyC542lhull4pOsuMxOPdp00bY3670VNqhU",
  authDomain: "prueba-ed1bb.firebaseapp.com",
  databaseURL: "https://prueba-ed1bb.firebaseio.com",
  projectId: "prueba-ed1bb",
  storageBucket: "prueba-ed1bb.appspot.com",
  messagingSenderId: "984893296238"
  };



@NgModule({ 
  declarations: [
    MyApp,
    LoginPage,
    RegistroPage,
    AgregarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
   ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistroPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductosService
  ],
  
})
export class AppModule {}
