export interface Card {
    title: string;
    description: string;
    ethereumAmount: number;
    remainingTime: number;
    author: {
        name: string,
        imageSrc: string
    },
}
