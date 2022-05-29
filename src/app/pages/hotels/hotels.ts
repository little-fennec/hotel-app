import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {Hotel} from "../../model/hotel.modal";
import {ModalFilterComponent} from "../../modal-filter/modal-filter.component";
import {HotelFilters} from "../../model/hotel-filters.model";
import {HotelDetails} from "../hotel-details/hotel-details";

@Component({
    selector: 'page-hotels',
    templateUrl: 'hotels.html'
})
export class HotelsPage {
    hotels: Hotel[];
    visibleHotels: Hotel[];
    filters: HotelFilters = {};

    constructor(
        public navCtrl: NavController,
        public modalCtrl: ModalController
    ) {
        this.hotels = [
            {
                imageUrl: 'https://img.gazeta.ru/files3/837/4860837/hotel-pic668-668x444-62402.jpg',
                title: 'Будапешт',
                description: 'Московский отель "Будапешт"',
                roomCost: 5000,
                hasParking: true,
                address: 'Москва, ул. Петровские Линии, 2',
                phone: '8 (495) 729-35-01',
            },
            {
                imageUrl: 'https://avatars.mds.yandex.net/get-altay/879259/2a0000016156f0d392e7d8da7592698bd77d/XXXL',
                title: 'Бета Измайлово',
                description: 'Гостиница "Бета Измайлово"',
                roomCost: 2520,
                hasParking: true,
                address: 'Москва, Измайловское шоссе, 71, корп. 2Б',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
                title: 'Космос',
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: false,
                address: 'Москва, пр-т Мира, 150',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://avatars.mds.yandex.net/get-altay/4537001/2a00000177f84d1dabdd2ff43cccc8517828/XXXL',
                title: 'Хилтон Москва Ленинградская',
                description: 'Гостиница "Хилтон Москва Ленинградская"',
                roomCost: 8400,
                hasParking: false,
                address: 'Москва, Центральный административный округ, Красносельский район, Каланчёвская улица, 21/40',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
                title: 'Космос',
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: false,
                address: 'Москва, пр-т Мира, 150',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://avatars.mds.yandex.net/get-altay/2408669/2a000001705a31f496a231321a4c8c387f36/XXXL',
                title: 'Ester House',
                description: 'Гостиница "Ester House"',
                roomCost: 850,
                hasParking: false,
                address: 'Москва, Ботанический переулок, 16',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
                title: 'Космос',
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: false,
                address: 'Москва, пр-т Мира, 150',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
                title: 'Космос',
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: false,
                address: 'Москва, пр-т Мира, 150',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
                title: 'Космос',
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: false,
                address: 'Москва, пр-т Мира, 150',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
                title: 'Космос',
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: false,
                address: 'Москва, пр-т Мира, 150',
                phone: '8 (495) 234-12-06'
            },
            {
                imageUrl: 'https://cdn.ostrovok.ru/t/640x400/extranet/50/1c/501c6211826d67319ab8503185fa4032ef4eafb2.jpeg',
                title: 'Космос',
                description: 'Гостиница "Космос"',
                roomCost: 3000,
                hasParking: false,
                address: 'Москва, пр-т Мира, 150',
                phone: '8 (495) 234-12-06'
            },


        ];
        this.visibleHotels = [...this.hotels];
    }

    openModalFilter() {
        let modal = this.modalCtrl.create(ModalFilterComponent, {filters: {...this.filters}});
        modal.onDidDismiss((filters) => {
            this.filters = {...filters};
            this.filterHotels();
        });
        modal.present();
    }


    filterHotels() {
        this.visibleHotels = this.hotels.filter(item => !this.filters.parking || item.hasParking);
        this.visibleHotels = this.visibleHotels.filter(item => !this.filters.priceMin || item.roomCost >= this.filters.priceMin);
        this.visibleHotels = this.visibleHotels.filter(item => !this.filters.priceMax || item.roomCost <= this.filters.priceMax);
    }

    openDetailPage(hotel:Hotel) {
        this.navCtrl.push(HotelDetails, {hotel: hotel});
    }

}
