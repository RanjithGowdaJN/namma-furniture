import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Can you match any design?",
      answer: "Yes, if it's made of wood and we can see dimensions or references. We specialize in wooden furniture and can replicate most designs you find on popular furniture websites."
    },
    {
      question: "Is there any guarantee?",
      answer: "We provide reasonable quality assurance. We aim to match utility and appearance of the original design, focusing on practical functionality rather than luxury finesse."
    },
    {
      question: "How long does delivery take?",
      answer: "Typically 7–14 days, depending on your location and the complexity of the furniture piece. We'll give you a specific timeline when we send the quote."
    },
    {
      question: "What about customizations?",
      answer: "We can make size adjustments and minor design modifications. Share your requirements when you send the product link, and we'll let you know what's possible."
    },
    {
      question: "How do you ensure the quality?",
      answer: "We use quality wood and hardware. While we focus on functionality over luxury finishes, we ensure the furniture is sturdy and matches the design specifications."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, UPI, and cash on delivery for local orders. Payment terms will be discussed when we send your quote."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-industrial">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our process
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;