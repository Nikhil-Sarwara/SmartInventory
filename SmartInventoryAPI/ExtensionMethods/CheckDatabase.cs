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
}
