
import logo from "../assets/logo-text.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Technologies", href: "#technologies" },
        { name: "Projects", href: "#projects" },
        { name: "Your Stack", href: "#your-stack" },
        { name: "Features", href: "#features" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "GitHub", href: "https://github.com" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      label: "Visit GitHub",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.49 0-1.21.43-2.2 1.14-2.97-.12-.28-.5-1.41.11-2.93 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.12-1.43 3.05-1.13 3.05-1.13.61 1.52.23 2.65.11 2.93.71.77 1.14 1.76 1.14 2.97 0 4.26-2.59 5.2-5.07 5.48.4.35.75 1.02.75 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      label: "Visit Twitter",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.42L5.55 22H2.4l7.25-8.29L1.8 2h6.4l4.43 6.77L18.9 2Zm-1.1 18h1.73L7.28 3.9H5.42L17.8 20Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com",
      label: "Visit LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.96V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19 18.5h-2.97v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.74V9h2.85v1.3h.04a3.13 3.13 0 0 1 2.82-1.55c3.01 0 3.57 1.98 3.57 4.56v5.19Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">

          <div className="lg:col-span-2">
            <a
              href="#home"
              className="inline-flex items-center"
              aria-label="Dev Stack Home"
            >
              <img
                src={logo}
                alt="Dev Stack"
                className="h-auto w-36 object-contain"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
              Discover the technologies that power modern web development.
              Build your dream tech stack and take your development skills
              to the next level.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-200 hover:border-pink-300 hover:bg-pink-50 hover:text-pink-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

   
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {group.title}
              </h3>

              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 transition-colors duration-200 hover:text-pink-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-500">
            © {currentYear} Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="text-xs text-gray-500 transition-colors hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-xs text-gray-500 transition-colors hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
