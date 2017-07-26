import {Component,OnInit,OnDestroy} from '@angular/core';
import {CarService} from '../service/carservice';
import {NodeService} from '../service/nodeservice';
import {EventService} from '../service/eventservice';
import {Car} from '../domain/car';
import {TreeNode} from 'primeng/primeng';

@Component({
    templateUrl: './miscdemo.html'
})
export class MiscDemo implements OnInit,OnDestroy {

    images: any[];

    value: number = 0;

    interval: any;

    response: string;

    ngOnInit() {
        this.interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if(this.value >= 100) {
                this.value = 100;
                clearInterval(this.interval);
                this.interval = null;
            }
        }, 2000);

        this.images = [];
         this.images.push({source:'assets/demo/images/nature/nature1.jpg'});
         this.images.push({source:'assets/demo/images/car/BMW.gif'});
         this.images.push({source:'assets/demo/images/nature/nature2.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature3.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature4.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature5.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature6.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature7.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature8.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature9.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature10.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature11.jpg'});
         this.images.push({source:'assets/demo/images/nature/nature12.jpg'});


    }

    onCommand(event) {
        if(event.command === 'date')
            this.response = new Date().toDateString();
        else
            this.response = 'Unknown command: ' + event.command;
    }

    ngOnDestroy() {
        if(this.interval) {
            clearInterval(this.interval);
        }
    }
}
