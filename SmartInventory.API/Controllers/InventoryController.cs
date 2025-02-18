using Microsoft.AspNetCore.Mvc;
using SmartInventoryAPI.Models;
using System.Collections.Generic;
using System.Linq;

namespace SmartInventoryAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InventoryController : ControllerBase
    {
        private static List<InventoryGroup> _inventoryGroups = new List<InventoryGroup>();
        private static List<InventoryItem> _inventoryItems = new List<InventoryItem>();

        // ===================== InventoryGroup Endpoints =====================

        // GET: api/Inventory/groups
        [HttpGet("groups")]
        public ActionResult<IEnumerable<InventoryGroup>> GetInventoryGroups()
        {
            return Ok(_inventoryGroups);
        }

        // POST: api/Inventory/groups
        [HttpPost("groups")]
        public ActionResult CreateInventoryGroup([FromBody] InventoryGroup group)
        {
            group.Id = _inventoryGroups.Count + 1;
            _inventoryGroups.Add(group);
            return CreatedAtAction(nameof(GetInventoryGroupById), new { id = group.Id }, group);
        }

        // GET: api/Inventory/groups/{id}
        [HttpGet("groups/{id}")]
        public ActionResult<InventoryGroup> GetInventoryGroupById(int id)
        {
            var group = _inventoryGroups.FirstOrDefault(g => g.Id == id);
            if (group == null)
            {
                return NotFound();
            }
            return Ok(group);
        }

        // PUT: api/Inventory/groups/{id}
        [HttpPut("groups/{id}")]
        public ActionResult UpdateInventoryGroup(int id, [FromBody] InventoryGroup updatedGroup)
        {
            var group = _inventoryGroups.FirstOrDefault(g => g.Id == id);
            if (group == null)
            {
                return NotFound();
            }
            group.Name = updatedGroup.Name;
            group.Description = updatedGroup.Description;
            return NoContent();
        }

        // DELETE: api/Inventory/groups/{id}
        [HttpDelete("groups/{id}")]
        public ActionResult DeleteInventoryGroup(int id)
        {
            var group = _inventoryGroups.FirstOrDefault(g => g.Id == id);
            if (group == null)
            {
                return NotFound();
            }
            _inventoryGroups.Remove(group);
            return NoContent();
        }

        // ===================== InventoryItem Endpoints =====================

        // GET: api/Inventory/items
        [HttpGet("items")]
        public ActionResult<IEnumerable<InventoryItem>> GetInventoryItems()
        {
            // Populate InventoryGroup for each item
            foreach (var item in _inventoryItems)
            {
                item.InventoryGroup = _inventoryGroups.FirstOrDefault(g => g.Id == item.GroupId);
            }
            return Ok(_inventoryItems);
        }


        // POST: api/Inventory/items
        [HttpPost("items")]
        public ActionResult CreateInventoryItem([FromBody] InventoryItem item)
        {
            // Ensure the group exists
            var group = _inventoryGroups.FirstOrDefault(g => g.Id == item.GroupId);
            if (group == null)
            {
                return BadRequest($"InventoryGroup with ID {item.GroupId} does not exist.");
            }

            // Add the item to the list
            item.Id = _inventoryItems.Count + 1;
            item.InventoryGroup = group; // Set the related group
            _inventoryItems.Add(item);
            return CreatedAtAction(nameof(GetInventoryItemById), new { id = item.Id }, item);
        }


        // GET: api/Inventory/items/{id}
        [HttpGet("items/{id}")]
        public ActionResult<InventoryItem> GetInventoryItemById(int id)
        {
            var item = _inventoryItems.FirstOrDefault(i => i.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // PUT: api/Inventory/items/{id}
        [HttpPut("items/{id}")]
        public ActionResult UpdateInventoryItem(int id, [FromBody] InventoryItem updatedItem)
        {
            var item = _inventoryItems.FirstOrDefault(i => i.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            item.Name = updatedItem.Name;
            item.Quantity = updatedItem.Quantity;
            item.LastUpdated = updatedItem.LastUpdated;
            item.GroupId = updatedItem.GroupId;
            return NoContent();
        }

        // DELETE: api/Inventory/items/{id}
        [HttpDelete("items/{id}")]
        public ActionResult DeleteInventoryItem(int id)
        {
            var item = _inventoryItems.FirstOrDefault(i => i.Id == id);
            if (item == null)
            {
                return NotFound();
            }
            _inventoryItems.Remove(item);
            return NoContent();
        }
    }
}
