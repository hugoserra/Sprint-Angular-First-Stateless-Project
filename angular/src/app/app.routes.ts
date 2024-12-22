import { TestesComponent } from './screens/testes/testes.component';
import { HomeComponent } from './screens/home/home.component';
import { PedidosComponent } from './screens/pedidos/pedidos.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pedidos', component: PedidosComponent},
    {path: 'testes', component: TestesComponent},
];
