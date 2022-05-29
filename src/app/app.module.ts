import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from './pages/home/home';
import {HotelsPage} from './pages/hotels/hotels';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ModalFilterComponent} from "./modal-filter/modal-filter.component";
import {HotelDetails} from './pages/hotel-details/hotel-details';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        HotelsPage,
        ModalFilterComponent,
        HotelDetails
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        HotelsPage,
        ModalFilterComponent,
        HotelDetails
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
