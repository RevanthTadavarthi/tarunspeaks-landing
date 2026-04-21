/**
 * Footer Component
 * 
 * This is the footer section at the bottom of the page.
 * It includes contact information (email and phone numbers) and any additional links.
 * This provides users with ways to get in touch with the team.
 */
export default function Footer() {
  return (
    <footer className="bg-accent/10 border-t border-accent/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <div className="space-y-2 text-primary/80">
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:teamtarunspeaks@gmail.com"
                  className="text-secondary hover:underline"
                >
                  teamtarunspeaks@gmail.com
                </a>
              </div>
              <div>
                <strong>Phone:</strong> Contact us via email for phone support
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary/80">
              <li>
                <a href="#curriculum" className="hover:text-secondary transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-secondary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-secondary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social/Additional */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Follow Us</h3>
            <div className="text-primary/80">
              <p>Stay updated with our latest courses and updates</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent/30 pt-8 text-center text-primary/60 text-sm">
          <p>© {new Date().getFullYear()} TarunSpeaks. All rights reserved.</p>
          <p className="mt-2">
            Course content and curriculum sourced from &quot;Roadmap to Digital Marketing 2.0&quot; PDF.
          </p>
        </div>
      </div>
    </footer>
  );
}

