import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <footer className="border-t bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Praveen Kumar N</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Senior Product Designer with over a decade of experience creating user-centered, 
                innovative solutions. Leading design teams to deliver impactful user experiences.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Navigation</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Connect</h4>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/pr4veen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:praveen.nalakurthi@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://figma.com/@pr4veen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Figma"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                <a
                  href="https://medium.com/@pr4veen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Medium"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/pr4veen_n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="https://pr4veen.designfolio.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  pr4veen.designfolio.me
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="h-10 bg-muted/50 flex items-center justify-center border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Praveen Kumar N. All rights reserved.
        </p>
      </div>
    </>
  );
}
