import { Component } from '@angular/core';
import {ItemsService} from "../services/items.service";

@Component({
    selector: 'shopping-list',
    templateUrl: 'shopping-list.component.html',
    styleUrls: ['shopping-list.component.scss']
})

export class ShoppingListComponent {
    constructor(public itemsService: ItemsService) {}

    public addRemoveToBucket(event, item) {
        if (item.inBucket) {
            this.itemsService.addToBucketList(item);
            console.log(this.itemsService.bucketList)
        } else {
            this.itemsService.removeFromBucketList(item);
        }
    }

    public clearItemsWhichAreInBucket() {
        this.itemsService.clearItemsWhichAreInBucket()
    }
}