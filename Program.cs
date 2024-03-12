var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles(); // This enables static files to be served.

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.UseDefaultFiles(); // Add this line
app.UseStaticFiles(); // Ensure this line exists - it's okay to have it twice

app.Run();
