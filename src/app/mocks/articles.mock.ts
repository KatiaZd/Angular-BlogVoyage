export interface Articles {
    id: number;
    country: string;
    city: string;
    startDate: Date;
    endDate: Date;
    mainImage: string;
    secondaryImages: string[];
    text: string;
    positivePoints: string[];
    negativePoints: string[];
    tips: string[];
    summary: string;
    isTop: boolean;


}