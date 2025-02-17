using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartInventoryAPI.Data;
using SmartInventoryAPI.Models;
using System;

namespace SmartInventoryAPI.Controllers
{
    [Route("api/inventory")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        private readonly AppDbContext _context;
        public InventoryController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<InventoryItem>>> GetInventory()
        {
            return await _context.Inventory.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<InventoryItem>> AddInventory(InventoryItem item)
        {
            _context.Inventory.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetInventory), new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateInventory(int id, InventoryItem item)
        {
            if (id != item.Id) return BadRequest();
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInventory(int id)
        {
            var item = await _context.Inventory.FindAsync(id);
            if (item == null) return NotFound();
            _context.Inventory.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
