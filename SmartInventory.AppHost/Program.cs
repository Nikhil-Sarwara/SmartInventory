var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.SmartInventory_API>("smartinventoryapi");

builder.Build().Run();
