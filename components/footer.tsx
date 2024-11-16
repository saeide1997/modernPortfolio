import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Folio Motion. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Created by <a href="https://github.com/aniruddhaadak80/" className="text-primary hover:text-primary/90 underline">ANIRUDDHA ADAK</a>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Phone: <a href="tel:+917029155691" className="text-primary hover:text-primary/90 underline">+917029155691</a>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Email: <a href="mailto:aniruddhaadak80@gmail.com" className="text-primary hover:text-primary/90 underline">aniruddhaadak80@gmail.com</a>
            </p>
          </div>
          <div className="flex space-x-4">
            {/* Github */}
            <Button
              variant="ghost"
              size="icon"
              className="group transition-all transform hover:scale-110 hover:text-primary/80"
            >
              <a
                href="https://github.com/aniruddhaadak80"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Github className="h-5 w-5 group-hover:text-primary transition-all" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
              </a>
            </Button>

            {/* Linkedin */}
            <Button
              variant="ghost"
              size="icon"
              className="group transition-all transform hover:scale-110 hover:text-primary/80"
            >
              <a
                href="https://linkedin.com/in/aniruddha-adak"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Linkedin className="h-5 w-5 group-hover:text-primary transition-all" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
              </a>
            </Button>

            {/* Twitter */}
            <Button
              variant="ghost"
              size="icon"
              className="group transition-all transform hover:scale-110 hover:text-primary/80"
            >
              <a
                href="https://twitter.com/aniruddha_adak"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Twitter className="h-5 w-5 group-hover:text-primary transition-all" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
              </a>
            </Button>

            {/* Mail */}
            <Button
              variant="ghost"
              size="icon"
              className="group transition-all transform hover:scale-110 hover:text-primary/80"
            >
              <a
                href="mailto:aniruddhaadak80@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Mail className="h-5 w-5 group-hover:text-primary transition-all" />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
