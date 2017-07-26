import {Component,OnInit} from '@angular/core';
import {CarService} from '../service/carservice';
import {EventService} from '../service/eventservice';
import {Car} from '../domain/car';
import {SelectItem} from 'primeng/primeng';


@Component({
    templateUrl: './dashboard.html'
})
export class DashboardDemo implements OnInit {



    ngOnInit() {


    }
}
