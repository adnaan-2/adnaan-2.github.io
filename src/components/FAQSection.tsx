import SectionReveal from "./SectionReveal";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Who is Adnan Khalil?",
    answer:
      "Adnan Khalil is a Full-Stack Software Engineer (COMSATS University) with 2+ years of production experience specializing in Headless Shopify development, custom e-commerce scaling, full-stack web applications (React.js, Next.js, Node.js, FastAPI), and business AI automation.",
  },
  {
    question: "What services does Adnan Khalil offer?",
    answer:
      "Adnan offers Headless Shopify storefront engineering (Hydrogen, Oxygen, Remix), Custom Shopify Theme (Liquid) & Storefront API (GraphQL) development, Full-Stack Web Application & MVP development (React, Next.js, Node.js, FastAPI), Technical SEO, Generative Engine Optimization (GEO), and Business Process Automation (n8n, Zapier, AI APIs).",
  },
  {
    question: "What technologies does Adnan Khalil specialize in?",
    answer:
      "Adnan specializes in Shopify Hydrogen, Oxygen edge hosting, Remix, Storefront API (GraphQL), Liquid, React.js, Next.js, TypeScript, Node.js, Express.js, FastAPI, Python, PostgreSQL, MySQL, MongoDB, n8n, Zapier, and third-party AI APIs (Gemini & OpenAI).",
  },
  {
    question: "Does Adnan Khalil build Headless Shopify storefronts?",
    answer:
      "Yes. Adnan builds sub-second composable Headless Shopify storefronts using Hydrogen, Oxygen edge hosting, Remix, and the GraphQL Storefront API, optimized for top Core Web Vitals, traditional search engines, and Generative Engine Optimization (GEO).",
  },
  {
    question: "Where is Adnan Khalil based and how can I contact him?",
    answer:
      "Adnan Khalil is based in Islamabad, Pakistan and is available for full-time remote roles and freelance projects worldwide. You can contact him via email at adnanmughal0342@gmail.com or call/WhatsApp at +92 342-1986817.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <div className="mb-4 font-mono text-sm text-primary flex items-center gap-2">
            <HelpCircle className="h-4 w-4" /> FAQ & GEO Knowledge Base
          </div>
          <h2 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mb-8 text-sm text-muted-foreground sm:mb-12">
            Direct, factual insights about Adnan Khalil's background, technical specialization, and development capabilities.
          </p>
        </SectionReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <SectionReveal key={faq.question} delay={index * 0.05}>
              <div className="overflow-hidden rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/40">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between p-5 text-left font-semibold text-foreground text-base sm:text-lg focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="border-t border-border/40 px-5 pb-5 pt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
