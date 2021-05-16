import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() rating: number = 0;
    cropWidth: number = 75;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75 / 5;
    }

    OnClick(): void {

        this.ratingClicked.emit(`${this.rating}`);
    }
}