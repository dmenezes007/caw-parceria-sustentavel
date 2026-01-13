# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of CAW - Parceria Sustentável seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

1. **DO NOT** open a public GitHub issue for security vulnerabilities
2. Email the maintainer directly with details about the vulnerability
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Varies based on severity
  - Critical: 1-7 days
  - High: 7-14 days
  - Medium: 14-30 days
  - Low: 30-90 days

### Security Best Practices

When using this project:

1. **Environment Variables**: Never commit `.env.local` or API keys to version control
2. **Dependencies**: Regularly update dependencies to patch known vulnerabilities
3. **Build**: Always use the latest stable version
4. **Deployment**: Use HTTPS in production environments

### Known Security Considerations

- API keys should be stored securely in environment variables
- The application runs client-side, so sensitive data should never be exposed
- Always validate and sanitize user inputs

## Disclosure Policy

When we receive a security vulnerability report:

1. We will confirm receipt within 48 hours
2. We will investigate and validate the vulnerability
3. We will work on a fix and prepare a security patch
4. We will notify the reporter when the fix is released
5. We will publicly acknowledge the reporter (if desired)

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.1) and documented in the [CHANGELOG.md](CHANGELOG.md).

To stay informed about security updates:
- Watch this repository on GitHub
- Check the [Releases](https://github.com/dmenezes007/caw-parceria-sustentavel/releases) page

## Contact

For security concerns, please reach out through:
- GitHub Issues (for non-sensitive matters)
- Direct contact through GitHub profile

Thank you for helping keep CAW - Parceria Sustentável secure! 🔒
