import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Link2 } from "lucide-react";

const Hero = () => {
  const [productLink, setProductLink] = useState("");

  const handleWhatsAppClick = () => {
    const phoneNumber = '919043404233'; // without + sign
    const url = (document.getElementById('productUrl') as HTMLInputElement)?.value.trim();

    if (!url) {
      alert("Please paste a product link.");
      return;
    }

    const message = `Hi, I'm interested in this product: ${url}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab (works on mobile and desktop)
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-industrial">
          Get the Same Furniture at{" "}
          <span className="text-primary">Half the Price</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Looks of Urban Ladder or Pepper fry, but at 50% of the cost. No middlemen, no commissions.
        </p>

        <div className="bg-card p-8 rounded-lg border border-border shadow-sm max-w-2xl mx-auto">
          <div className="mb-4">
            <label htmlFor="product-link" className="block text-sm font-medium text-foreground mb-2 text-left">
              Paste a product link here (from Urban Ladder, Pepperfry, etc.)
            </label>
            <div className="relative">
              <Link2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="productUrl"
                type="url"
                placeholder="https://www.urbanladder.com/..."
                value={productLink}
                onChange={(e) => setProductLink(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
          
          <Button
            onClick={handleWhatsAppClick}
            variant="whatsapp"
            size="lg"
            className="w-full h-12 text-base"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Send on WhatsApp
          </Button>
          
          <p className="text-xs text-muted-foreground mt-3">
            We'll review your link and get back to you with a quote within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;