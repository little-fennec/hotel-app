import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Hotel} from "../../model/hotel.modal";

@Component({
    selector: 'hotel-details-page',
    templateUrl: 'hotel-details.html'
})
export class HotelDetails {

    hotel:Hotel;

    constructor(
        public navCtrl: NavController,
        private params: NavParams
    ) {
        this.hotel = this.params.get('hotel');
    }


}


