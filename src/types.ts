interface IItem {
    href: string;
    value: string;
    icon: string;
}

export interface BurgerProps {
  header: any;
  items: IItem[];
}
