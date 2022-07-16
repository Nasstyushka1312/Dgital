using DigitalTwin.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace DigitalTwin.DAL
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
    }
}
