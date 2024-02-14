import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { CtrlSideBarComponent } from './ctrl-side-bar/ctrl-side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TablesComponent } from './tables/tables.component';
import { ValidationComponent } from './validation/validation.component';
import { routes } from './app.routes';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SideBarComponent,ContentComponent,CtrlSideBarComponent,FooterComponent,TablesComponent,CtrlSideBarComponent,ValidationComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DashboardMine';
}
