namespace SmartInventory.API.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/test")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet("secure-data")]
        [Authorize]
        public IActionResult GetSecureData()
        {
            return Ok(new { message = "You have accessed a secured endpoint!" });
        }
    }

}