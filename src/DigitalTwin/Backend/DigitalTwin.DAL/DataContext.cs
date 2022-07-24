using DigitalTwin.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DigitalTwin.DAL
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<ActivateLink> ActivateLinks { get; set; }

        public DbSet<LegalEntity> LegalEntities { get; set; }

        public DbSet<Extension> Extensions { get; set; }

        public DbSet<ActivatedExtension> ActivatedExtensions { get; set; }

        public DbSet<DigitalModel> DigitalModels { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .Property(u => u.CreateDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP");

            modelBuilder.Entity<DigitalModel>()
                .Property(dm => dm.CreateDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP");

            modelBuilder.Entity<ActivatedExtension>()
                .Property(ae => ae.ActivateDate)
                .HasDefaultValueSql("CURRENT_TIMESTAMP");

            modelBuilder.Entity<ActivateLink>()
                .Property(al => al.ExpirationTime)
                .HasDefaultValueSql("CURRENT_TIMESTAMP + INTERVAL '15 minute'");

            base.OnModelCreating(modelBuilder);
        }
    }
}
