using System.ComponentModel.DataAnnotations;

namespace SmartInventoryAPI.Models
{
    public class InventoryItem
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public DateTime LastUpdated { get; set; } = DateTime.UtcNow;
    }
}
