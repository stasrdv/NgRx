import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import { LoginComponent } from "./login.component";

const userRoutes: Routes = [{ path: "login", component: LoginComponent }];

import { StoreModule } from "@ngrx/store";
import { loginReducer } from "./state/login-reducer";
import { StoreDevtoolsModule  } from "@ngrx/store-devtools";

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature("maskUserName", loginReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  declarations: [LoginComponent]
})
export class UserModule {}
