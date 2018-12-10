import { Component } from '@angular/core';
import { ItemsService } from '../services/items.service';


@Component({
    selector: 'add-items',
    templateUrl: 'add-items.component.html',
    styleUrls:['add-items.component.scss']
})

export class AddItemsComponent {
    public item: string = '';
    public quantity: number;

    constructor(private itemsService: ItemsService) {}

    public addItem(): void {
        if (this.item && this.quantity) {
            this.itemsService.addToList(this.item, this.quantity);
        }
        this.item = '';
        this.quantity = null;
    }
}