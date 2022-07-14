import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
    selector: 'app-root',
    templateUrl: 'component.html',
    styleUrls: ['./component.scss']
    // template:`<canvas #canvasId></canvas>`
})
export class ShareComponent{
    constructor(
    ) {

    }

    async share() {
        await Share.share({
          title: 'Brain game',
          text: 'This reallly funny game',
          url: 'https://play.google.com/store/apps/details?id=game.pondol.nonogram.app',
          dialogTitle: 'Share with buddies',
        });
    }

}