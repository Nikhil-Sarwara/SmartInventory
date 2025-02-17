using Microsoft.EntityFrameworkCore;
using SmartInventoryAPI.Models;

namespace SmartInventoryAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<InventoryItem> Inventory { get; set; }
    }
}
