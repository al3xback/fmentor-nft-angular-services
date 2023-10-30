export interface Card {
    title: string;
    description: string;
    imageSrc: string;
    ethereumAmount: number;
    remainingTime: number;
    author: {
        name: string,
        imageSrc: string
    },
}
