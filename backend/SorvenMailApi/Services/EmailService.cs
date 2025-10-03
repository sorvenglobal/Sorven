using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

public interface IEmailService
{
    Task SendMailAsync(string fromName, string fromEmail, string messageBody);
}
public class EmailService : IEmailService
{
    private readonly IConfiguration _config;
    public EmailService(IConfiguration config) { _config = config; }
    public async Task SendMailAsync(string fromName, string fromEmail, string messageBody)
    {
        var email = new MimeMessage();
        email.From.Add(new MailboxAddress(fromName, fromEmail));
        email.To.Add(MailboxAddress.Parse("business@sorvenglobal.com")); // receiver
        email.Subject = "New Contact Form Submission - Sorven Global";
        email.Body = new TextPart("plain") { Text = messageBody };
        using var smtp = new SmtpClient();
        await smtp.ConnectAsync(_config["Smtp:Host"], int.Parse(_config["Smtp:Port"]), true);
        await smtp.AuthenticateAsync(_config["Smtp:Username"], _config["Smtp:Password"]);
        await smtp.SendAsync(email);
        await smtp.DisconnectAsync(true);
    }
}
