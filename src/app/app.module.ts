import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";

const APP_ROUTES: Routes = [
  { path: "", component: HomepageComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id", component: UserComponent }]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES)],
  declarations: [
    AppComponent,
    HomepageComponent,
    UsersComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
