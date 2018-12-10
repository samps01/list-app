import { Injectable } from '@angular/core';

interface Item {
        itemName: string;
        itemQuantity: number;
        inBucket: boolean;
}

@Injectable({
    providedIn: 'root',
})

export class ItemsService {
    public itemList: Item[] = [];
    public  bucketList: Item[] = [];
    constructor() {
        this.itemList.push({itemName: "Milk", itemQuantity: 1, inBucket: true})
    }

    public addToList(itemName: string, itemQuantity: number): void {
        const obj: Item  = {
                itemName,
                itemQuantity,
                inBucket: false
        };
        this.itemList.push(obj);
        console.log(this.itemList);
    }

    public addToBucketList(item: Item): void {
        this.bucketList.push(item);
    }

    public removeFromBucketList(item) {
        let index;
        this.bucketList.forEach((itemObj, i) => {
           if (itemObj.itemName == item.itemName) {
               index = i;
           }
        });

        if (index >= 0) {
            this.bucketList.splice(index,1);
        }
        console.log(this.bucketList);
    }

    public clearItemsWhichAreInBucket() {
        const newItemList = this.itemList.filter(item => {
            if (!item.inBucket) {
                return item;
            }
        });

        this.itemList = newItemList;
    }
}