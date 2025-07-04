import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'd like to know more about your furniture manufacturing services.");
    const phoneNumber = "919043404233"; // without + sign
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-industrial">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to get started? Send us a product link and we'll get back to you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="bg-primary/5 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6 font-industrial">
                Start Your Order
              </h3>
              <p className="text-muted-foreground mb-6">
                Send us a WhatsApp message with your furniture link and we'll provide a quote within 24 hours.
              </p>
              <Button
                onClick={handleWhatsAppClick}
                variant="whatsapp"
                size="lg"
                className="w-full md:w-auto"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us Now
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Factory Location</h4>
                <p className="text-muted-foreground">
                  Bangalore, Karnataka<br />
                  <span className="text-sm">Serving across South India</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">+91 90434 04233</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">orders@furniturefactorydirect.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;