import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",        
            loadComponent: () => import('./components/home/home.component'),
        
    },
    {
        path: "quienSoy",
        loadComponent: () => import('./components/quien-soy/quien-soy.component'),
        
    },


];
