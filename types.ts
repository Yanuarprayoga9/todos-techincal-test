export interface Category {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    todos?: Todo[];
  }
  
  export interface Todo {
    id: string;
    name: string;
    value: string;
    isCompleted: boolean;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
  }
  