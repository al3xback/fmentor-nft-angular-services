import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../shared/project.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
	creator: { name: string; link: string };
	coder: { name: string; gitHubLink: string };

	constructor(private projectService: ProjectService) {}

	ngOnInit() {
		this.creator = this.projectService.project.creator;
		this.coder = this.projectService.project.coder;
	}
}
