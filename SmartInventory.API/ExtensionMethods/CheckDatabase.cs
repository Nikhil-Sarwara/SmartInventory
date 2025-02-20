using Microsoft.EntityFrameworkCore;
using SmartInventoryAPI.Data;

namespace SmartInventoryAPI.ExtensionMethods
{
    public class CheckDatabase
    {
        public static void Check(AppDbContext context)
        {
            context.Database.EnsureCreated();
        }
    }
    public static class DbInitializer
    {
        public static void CheckAndMigrateDatabase(this IApplicationBuilder app)
        {
            using var scope = app.ApplicationServices.CreateScope();
            var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            // Ensure the database is created and apply any pending migrations
            dbContext.Database.Migrate();
        }
    }
}
