using Help_Desk_Project.DAL;
using Help_Desk_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Help_Desk_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarksController : ControllerBase
    {
        private readonly BookmarksRepository _repo;

        public BookmarksController(BookmarksRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IActionResult GetAllBookmarks()
        { 
            List<Bookmark> bookmarks = _repo.GetAllBookmarks();
            return Ok(bookmarks);
        }



        [HttpPost]
        public IActionResult AddBookmark([FromBody] BookmarkCreationDto bookmarkDto)
        {
            _repo.AddBookmark(bookmarkDto);
            return Ok();
        }


        [HttpPut("{id}")]
        public IActionResult UpdateBookmark(int id,[FromBody] BookmarkUpdateDto bookmarkDto)
        {
            Bookmark bookmark = _repo.GetBookmarkById(id);
            if (bookmark == null) 
            {
                return NotFound();
            }
           bookmark.TicketId = bookmarkDto.TicketId;
            bookmark.UserId = bookmarkDto.UserId;
            
            _repo.UpdateBookmark(bookmark);
            return NoContent();
        }

        
        
        [HttpDelete("{id}")]
        public IActionResult DeleteBookmark(int id)
        { 
            Bookmark bookmark = _repo.GetBookmarkById(id);
            if (bookmark == null) 
            {
                return NotFound();
            }
            _repo.DeleteBookmark(id);
            return NoContent();
        }


    }
}
