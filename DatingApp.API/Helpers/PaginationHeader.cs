namespace DatingApp.API.Helpers
{
    public class PaginationHeader
    {
        public int CurrentPage { get; set; }
        public int ItemsOerPage { get; set; }
        public int TotalItems { get; set; }
        public int TotalPages { get; set; }
        

        public PaginationHeader(int currentPage, int itemsPerPage, int totalItems, int totalPages)
        {
            this.CurrentPage= currentPage;
            this.ItemsOerPage= itemsPerPage;
            this.TotalItems = totalItems;
            this.TotalPages = totalPages;
            
        }
    }
}