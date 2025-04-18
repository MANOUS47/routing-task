import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './Contacts/Contacts.component';
import { MealsComponent} from './Meals/Meals.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { BreakFastComponent } from './break-fast/break-fast.component';
import { PastaComponent } from './pasta/pasta.component';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
    {path:'home' , component:HomeComponent , title:'home'},
    {path:'about' , component:AboutComponent , title:'about'},
    {path:'contacts' , component:ContactsComponent , title:'contacts'},
    {path:'team' , component:TeamComponent , title:'team'},
    {path:'meals' , component:MealsComponent , title:'meals' , children : [
        { path: '', redirectTo: 'SeaFood', pathMatch: 'full' },
        { path : 'SeaFood' , component:SeafoodComponent },
        { path : 'Pasta' , component:PastaComponent },
        { path : 'BreakFast' , component:BreakFastComponent }
    ]},
    {path:'', redirectTo:'home' , pathMatch:'full', title:'home'}
];
