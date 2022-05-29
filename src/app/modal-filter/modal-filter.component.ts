import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";
import {HotelFilters} from "../model/hotel-filters.model";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-modal-filter',
    templateUrl: 'modal-filter.component.html'
})
export class ModalFilterComponent  {

    filters: HotelFilters;

    constructor(
        private viewCtrl: ViewController,
        private params: NavParams,
    ) {
        this.filters = this.params.get('filters');
    }

    dismiss() {
        this.viewCtrl.dismiss(this.filters);
    }

    applyFilter() {
        this.viewCtrl.dismiss(this.filters);
    }
}


