import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { TablesComponent } from './tables/tables.component';
import { ValidationComponent } from './validation/validation.component';



export const routes: Routes = [
    //      { path: '', component: UserEntityComponent },
    //  { path: 'roles', component: RoleEntityComponent },
    //  { path: 'parent', component: ParentEntityComponent },
    //  { path: 'waza', component: WazaAchievementEntityComponent },
    //  { path: '**', component: UserEntityComponent }

       { path: '', component: ContentComponent },
       { path: 'form', component: FormComponent },
       { path: 'table', component:  TablesComponent},
        { path: 'validation', component:  ValidationComponent},
        { path: '**', component:  ContentComponent}

       

];
