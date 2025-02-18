using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SmartInventoryAPI.Models
{
    public class InventoryItem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;

        public int Quantity { get; set; }

        public DateTime LastUpdated { get; set; } = DateTime.UtcNow;

        // Foreign key to link to InventoryGroup
        [ForeignKey("InventoryGroup")]
        public int GroupId { get; set; }

        // Navigation property for the relationship
        public InventoryGroup? InventoryGroup { get; set; }
    }
}

