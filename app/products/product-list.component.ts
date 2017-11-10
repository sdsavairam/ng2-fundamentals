import{ Component} from '@angular/core';
import{ IProduct} from './iproduct';
import { NgModel } from '@angular/forms';

@Component({
    moduleId:module.id,
    selector:'product-list',
    templateUrl: `./product-list.component.html`
})

export class ProductListComponent{
    showImage : boolean = false;
    showImageBtn : string = "Show Image"
    pageTitle: string = 'Product List';
    toggleImage(){
        this.showImage = !this.showImage;
        this.showImageBtn = this.showImage?"Show Image" : "Hide Image";
    }
    
    _listFilter : string = "Please enter Product Name";
    get listFilter() : string{
        return this._listFilter;
    };
    set listFilter( value : string){
        this._listFilter = value;
        this.filterdProduct = this._listFilter? this.performFiltering(this._listFilter):this.products;
    }

    performFiltering (filterBy : string) : IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product :IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!=-1);
    }
    
    products: IProduct[] =   [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": new Date,
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.gstatic.com/webp/gallery/1.sm.jpg",
            
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": new Date,
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://www.gstatic.com/webp/gallery/4.sm.webp"
        }
    ];
    filterdProduct : IProduct[] = this.products;
};