import { Link2, Calculator, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Link2,
      title: "Paste a Link",
      description: "From Urban Ladder, Pepperfry, or any furniture website"
    },
    {
      icon: Calculator,
      title: "We Review & Quote",
      description: "You get the same design at 50% of the price"
    },
    {
      icon: Truck,
      title: "Delivered to Your Doorstep",
      description: "Same look, same utility, factory-direct"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-industrial">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to get high-quality furniture at factory prices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-industrial">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;