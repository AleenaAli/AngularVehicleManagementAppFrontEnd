
export class Filter {
   makeId: number;
   modelId: number;
   isSortAscending: boolean;
   sortBy: string;
   pageSize: number;
   currentPage: number;

   constructor() {
       this.makeId = null;
       this.modelId = null;
       this.isSortAscending = true;
       this.sortBy = 'id';
       this.pageSize = 5;
       this.currentPage = 1;
   }
}
