using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CrudOperationWithAngular7.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CrudOperationWithAngular7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrudController : ControllerBase
    {
        private readonly Context _context;

        public CrudController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<CrudTable> GetCrudTables()
        {
            return _context.CrudTables;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCrudTable([FromRoute] int id, [FromBody] CrudTable CrudTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != CrudTable.Id)
            {
                return BadRequest();
            }

            _context.Entry(CrudTable).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CrudTableExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CrudTable>> GetCrudTable(int id)
        {
            var CrudTable = await _context.CrudTables.FindAsync(id);

            if (CrudTable == null)
            {
                return NotFound();
            }
            return CrudTable;

        }

        [HttpPost]
        public async Task<IActionResult> PostCrudTable([FromBody] CrudTable CrudTable)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CrudTables.Add(CrudTable);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCrudTable", new { id = CrudTable.Id }, CrudTable);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCrudTable([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var CrudTable = await _context.CrudTables.FindAsync(id);
            if (CrudTable == null)
            {
                return NotFound();
            }

            _context.CrudTables.Remove(CrudTable);
            await _context.SaveChangesAsync();

            return Ok(CrudTable);
        }

        private bool CrudTableExists(int id)
        {
            return _context.CrudTables.Any(e => e.Id == id);
        }
    }
}