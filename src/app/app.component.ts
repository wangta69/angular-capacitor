import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { KeepAwake } from '@capacitor-community/keep-awake';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        this.iconResister();
        this.initializeApp();
    }
    private iconResister() {
        this.iconRegistry
            .addSvgIcon('share', this.sanitizer.bypassSecurityTrustResourceUrl('./assets/svg/share.svg'))
        ;
    }
    private async initializeApp() {
        if (Capacitor.isNativePlatform()) {
            await KeepAwake.keepAwake();
        }
    }
}
