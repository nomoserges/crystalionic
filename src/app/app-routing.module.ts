import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'listdocs', loadChildren: './docs/listdocs/listdocs.module#ListdocsPageModule' },
  { path: 'infos', loadChildren: './infos/infos.module#InfosPageModule' },
  { path: 'menuemploye', loadChildren: './menuemploye/menuemploye.module#MenuemployePageModule' },
  { path: 'menuemployeur', loadChildren: './menuemployeur/menuemployeur.module#MenuemployeurPageModule' },
  { path: 'menuvolontaire', loadChildren: './menuvolontaire/menuvolontaire.module#MenuvolontairePageModule' },
  { path: 'declaration', loadChildren: './declaration/declaration.module#DeclarationPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
