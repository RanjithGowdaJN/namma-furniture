import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary font-industrial">
          Furniture Factory Direct
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-foreground hover:text-primary transition-colors"
          >
            How it Works
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-foreground hover:text-primary transition-colors"
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <Button 
          variant="outline" 
          className="md:hidden"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </Button>
      </div>
    </header>
  );
};

export default Header;