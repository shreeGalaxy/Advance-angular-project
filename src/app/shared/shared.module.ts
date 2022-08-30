import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './components/auth/auth-layout/auth-layout.component';
import { BlogLayoutComponent } from './components/blog/blog-layout/blog-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/admin/header/header.component';
import { FooterComponent } from './components/admin/footer/footer.component';
import { SidenavComponent } from './components/admin/sidenav/sidenav.component';
import { BreadcrumbComponent } from './components/admin/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { FormatDate } from './pipe/format-date.pipe';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    BlogLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    BreadcrumbComponent,
    FormatDate
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    BreadcrumbComponent,
    AdminLayoutComponent,
    FormatDate,
    TranslateModule
  ]
})
export class SharedModule { }
