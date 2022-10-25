import { NonNullableFormBuilder } from "@angular/forms";
import { number } from "joi";

export interface Product{
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
