import { Dispatch, SetStateAction } from "react";

interface IItem {
  href: string;
  value: string;
  icon: string;
}

export interface BurgerProps {
  header: any;
  items: IItem[];
  isShow: boolean;
}

export interface ModalProps {
  modalActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
