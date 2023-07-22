import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './feature/contact/contact.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./feature/articles/articles.module').then(
        (m) => m.ArticlesModule,
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'articles',
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./feature/posts/posts.module').then((m) => m.PostsModule),
  },
  {
    path: '**',
    redirectTo: 'articles',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
