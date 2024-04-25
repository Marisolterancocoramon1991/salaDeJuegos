import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"saladejuegosapp","appId":"1:612551244869:web:cff3d68284e1576188b72c","storageBucket":"saladejuegosapp.appspot.com","apiKey":"AIzaSyCpmMTHqzh1c-Yq9ClnKYSiel1x_4PRREc","authDomain":"saladejuegosapp.firebaseapp.com","messagingSenderId":"612551244869"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
