import {NgModule, Optional, SkipSelf} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AppBreakpointService} from "./services/app-breakpoint.service"
import {WindowRefService} from "./services/window-ref.service"
import {SettingsService} from "./services/settings.service"
import {AppSidenavService} from "./services/app-sidenav.service"
import {AppMenuService} from "./services/app-menu.service"

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`)
  }
}

@NgModule({
  providers: [
    AppBreakpointService,
    WindowRefService,
    SettingsService,
    AppSidenavService,
    AppMenuService,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }
}
