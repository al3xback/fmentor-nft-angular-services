export interface Card {
    title: string;
    description: string;
    imageUrl: string;
    ethereumAmount: number;
    remainingTime: number;
    author: {
        name: string,
        imageUrl: string
    },
}
