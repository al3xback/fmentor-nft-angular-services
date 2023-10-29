import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../shared/project.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	projectName: string;

	constructor(private projectService: ProjectService) {}

	ngOnInit() {
		this.projectName = this.projectService.project.name;
	}
}
