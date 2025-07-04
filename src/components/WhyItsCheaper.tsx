import { Banknote, Warehouse, Factory, Truck } from "lucide-react";

const WhyItsCheaper = () => {
  const reasons = [
    {
      icon: Banknote,
      title: "No Marketplace Commissions",
      description: "We don't pay 15-25% commission to online marketplaces"
    },
    {
      icon: Warehouse,
      title: "No Warehouse Overhead",
      description: "We manufacture on-demand, saving on storage costs"
    },
    {
      icon: Factory,
      title: "Local Manufacturing",
      description: "Made locally to reduce transportation and import costs"
    },
    {
      icon: Truck,
      title: "Direct Delivery",
      description: "From our factory to your doorstep, no middlemen"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-industrial">
            Why It's Cheaper
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We cut out the unnecessary costs that make furniture expensive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 font-industrial">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItsCheaper;