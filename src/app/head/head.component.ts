import {Component} from '@angular/core'

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.css']
})

export class HeadComponent {
    public title: string = "Learning Portuguese"
    public brazilFlag: string = "/assets/brazilFlag.jpg"
}