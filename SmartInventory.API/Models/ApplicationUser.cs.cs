using Microsoft.AspNetCore.Identity;

namespace SmartInventory.API.Models
{

    public class ApplicationUser : IdentityUser
    {
        public required string FullName { get; set; }
    }


}
