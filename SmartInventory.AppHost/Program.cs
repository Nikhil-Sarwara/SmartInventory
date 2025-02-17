var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.SmartInventoryAPI>("smartinventoryapi");

builder.Build().Run();
