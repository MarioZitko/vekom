import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12">
        {/* Left Section: Company Information */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">VEKOM</h3>
          <p className="text-sm text-muted-foreground">
            VEKOM je proizvođač betonskih elemenata, koji već više od 30 godina proizvodi proizvode
            prepoznate po svojoj kvaliteti i izdržljivosti.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} VEKOM. Sva prava pridržana.
          </p>
        </div>

        {/* Middle Section: Contact Information */}
        <div className="text-center md:text-right">
          <p className="text-sm flex items-center justify-center md:justify-end gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@vekom-elementi.hr" className="hover:text-primary transition">
              info@vekom-elementi.hr
            </a>
          </p>
          <p className="text-sm flex items-center justify-center md:justify-end gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:+3850915687329" className="hover:text-primary transition">
              +385 (0) 91 5687 329
            </a>
          </p>
          <p className="text-sm flex items-center justify-center md:justify-end gap-2">
            <MapPin className="w-4 h-4" />
            Kolodvorska 1, Klinča Sela, Hrvatska
          </p>
        </div>
      </div>
    </footer>
  );
}
