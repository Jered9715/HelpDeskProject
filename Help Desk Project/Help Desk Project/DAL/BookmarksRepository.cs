using Help_Desk_Project.Models;

namespace Help_Desk_Project.DAL
{
    public class BookmarksRepository
    {
        private readonly HelpDeskContext _context;

        public BookmarksRepository(HelpDeskContext context)
        {
            _context = context;
        }

        public List<Bookmark> GetAllBookmarks()
        {
            return _context.Bookmarks.ToList();

        }

        public Bookmark GetBookmarkById(int id)
        {
          return _context.Bookmarks.FirstOrDefault(t => t.BookmarkId == id);
        }

        public void AddBookmark(BookmarkCreationDto bookmarkDto)
        {
            Bookmark bookmark = new Bookmark()
            {
                UserId = bookmarkDto.UserId,
                TicketId = bookmarkDto.TicketId,

            };
            
            _context.Bookmarks.Add(bookmark);
            _context.SaveChanges();
        }

        public void UpdateBookmark(Bookmark bookmark)
        {            
            _context.Bookmarks.Update(bookmark);
            _context.SaveChanges();
        }

        public void DeleteBookmark(int id)
        {
            Bookmark bookmark = _context.Bookmarks.FirstOrDefault(t => t.BookmarkId == id);
            if (bookmark != null)
            {
                _context.Bookmarks.Remove(bookmark);
                _context.SaveChanges();


            }
        }

    }
}
