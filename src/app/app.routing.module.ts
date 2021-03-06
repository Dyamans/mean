import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { AuthGurd } from './auth/auth.guard';


const routes: Routes = [
  {path: '', component: PostListComponent },
  {path: 'create', component: PostCreateComponent, canActivate: [AuthGurd] },
  {path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGurd] },
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: [AuthGurd]
})

export class AppRoutingModule {

}
