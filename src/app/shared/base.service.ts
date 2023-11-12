import { Card } from './card';

export class BaseService {
	card: Card = {
		title: 'Equilibrium #3429',
		description: 'Our Equilibrium collection promotes balance and calm.',
		imageUrl: '/assets/images/equilibrium.jpg',
		ethereumAmount: 0.041,
		remainingTime: 3,
		author: {
			name: 'Jules Wyvern',
			imageUrl: '/assets/images/avatar.png'
		}
	};
	challenge = {
		name: 'NFT',
		creator: {
			name: 'Frontend Mentor',
			link: 'https://www.frontendmentor.io?ref=challenge'
		},
		coder: {
			name: 'al3xback',
			gitHubLink: 'https://github.com/al3xback'
		}
	};
}
