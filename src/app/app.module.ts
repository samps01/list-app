import { AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddItemsComponent } from './add-items/add-items.component';
import { FormsModule } from '@angular/forms'
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        AddItemsComponent,
        ShoppingListComponent
    ],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        AddItemsComponent,
        ShoppingListComponent
    ]
})

export class AppModule {
    
}