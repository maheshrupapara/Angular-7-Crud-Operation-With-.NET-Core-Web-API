using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CrudOperationWithAngular7.Models
{
    public class CrudTable
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(16)")]
        public string PhoneNumber { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(5)")]
        public string Age { get; set; }
    }
}
