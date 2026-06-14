import { FAQ_ITEMS } from "@/data/faq";

export function FAQList() {
  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((faq) => (
        <details key={faq.question} className="bg-white border border-mist-300 rounded-lg group">
          <summary className="px-5 py-4 cursor-pointer font-semibold text-forest-900 hover:text-forest-800 list-none flex justify-between items-center">
            {faq.question}
            <span className="text-glacier-400 group-open:rotate-45 transition-transform text-xl">+</span>
          </summary>
          <div className="px-5 pb-4 text-sm text-forest-700 leading-relaxed border-t border-mist-200 pt-4">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
