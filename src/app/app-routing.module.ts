import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PageRoute } from './enum/routes.enum';
import { GameModule } from './feature/components/game/game.module';
import { SelectModule } from './feature/components/select/select.module';

const routerOptions: ExtraOptions = {
  enableTracing: false,
  useHash: false,
  anchorScrolling: 'disabled',
  scrollPositionRestoration: 'top'
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: PageRoute.start,
        loadChildren: (): Promise<SelectModule> =>
          import('./feature/components/select/select.module').then(
            (m) => m.SelectModule
          ),
      },
      {
        path: PageRoute.game,
        loadChildren: (): Promise<GameModule> =>
          import('./feature/components/game/game.module').then(
            (m) => m.GameModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
