// ArticleContext.tsx
import { createContext } from 'react';
import {Article} from "./models/Article";

export const ArticleContext = createContext<Article[]>([]);
