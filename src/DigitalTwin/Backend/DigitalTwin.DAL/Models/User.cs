using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace DigitalTwin.DAL.Models
{
    [Index(nameof(Email), IsUnique = true)]
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Role { get; set; }

        [Required]
        public bool IsActive { get; set; }

        [Required]
        public bool IsIndividual { get; set; }
    }
}
