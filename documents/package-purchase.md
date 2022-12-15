# 결제 시스템 달기
https://devdactic.com/ionic-in-app-purchase-capacitor

```
npm i @ionic-native/in-app-purchase-2
npm i cordova-plugin-purchase
```
module.ts
```
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';

@NgModule({
    providers: [
            InAppPurchase2,
        ],
})
```

component.ts
```
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';

export class PointPage implements OnInit {
    products: IAPProduct[] = [];
    constructor(
        private store: InAppPurchase2,
        public plt: Platform,
        private ref: ChangeDetectorRef,
    ) {
        super(injector);
        this.getMyInfo();

        this.plt.ready().then(() => {
            this.store.verbosity = this.store.DEBUG;

            this.registerProducts();
            this.setupListeners();

            this.store.ready(() => {
                this.products = this.store.products;
                this.ref.detectChanges();
            });
        });
    }

    // 결제관련 시작
    registerProducts() {
        this.store.register({
            id: [상품아이디],
            type: this.store.CONSUMABLE,
        });
        ....................
        this.store.refresh();
    }

    setupListeners() {
    // General query to all products
    this.store.when('product')
      .approved((p: IAPProduct) => {
        this.ref.detectChanges();
        return p.verify();
      })
      .verified((p: IAPProduct) => p.finish());
    }

    /**
    * user restore click
    */
    restore() {
        this.store.refresh();
    }

    // 결제 버튼을 누를 경우
    public payment(product) {
        if (this.plt.is('capacitor')) {
            this.store.order(product).then(p => {
            // Purchase in progress!
            }, (e: any) => {
                console.log(e);
            });
        }
    }
}

```
capacitor.config.json
이부분은 더이상 필요없다고 하는데..?
```
{
    "plugins": {
        "cordova-plugin-purchase": {
            "BILLING_KEY":"MIIB......AB"
        }
    },
}
```

## android
### AndroidManifest.xml
```
<uses-permission android:name="com.android.vending.BILLING" />
```

