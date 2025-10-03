using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IEmailService _emailService;
    public ContactController(IEmailService emailService) { _emailService = emailService; }

    [HttpPost("submit")]
    public async Task<IActionResult> Submit([FromBody] ContactRequest model)
    {
        string body = $"Name: {model.Name}\nEmail: {model.Email}\nMessage: {model.Message}";
        await _emailService.SendMailAsync(model.Name, model.Email, body);
        return Ok(new { message = "Sent" });
    }
}
