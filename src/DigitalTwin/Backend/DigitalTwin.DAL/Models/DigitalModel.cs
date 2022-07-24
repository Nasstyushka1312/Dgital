using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DigitalTwin.DAL.Models
{
    public class DigitalModel
    {
        [Required]
        public int Id { get; set; }

        [Required]
        [ForeignKey(nameof(User))]
        public int UserId { get; set; }

        [Required]
        public DateTime CreateDate { get; set; }

        //Relationships
        public virtual User User { get; set; }

        public virtual List<ActivatedExtension> ActivatedExtensions { get; set; }
    }
}
