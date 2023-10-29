import { Component, OnInit } from '@angular/core';

import { Card } from '../../shared/card';
import { ProjectService } from '../../shared/project.service';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
	card: Card;

	constructor(private projectService: ProjectService) {}

	ngOnInit() {
		this.card = this.projectService.project.card;
	}
}
