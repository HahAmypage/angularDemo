export interface TabItem{
    title: string,
    icon: string,
    link: string,
    selectedIcon: string
}

export interface Ad{
    imageUrl: string,
    link: string
}

export interface Product{
    id: number;
    title: string;
    imageUrl: string;
    price: number;
    productDesc: string;
    buyerAvatarsList: string[];
    tabList: string[];
}