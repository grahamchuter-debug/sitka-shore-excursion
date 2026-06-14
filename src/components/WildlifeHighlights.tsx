import Image from "next/image";
import { IMAGES } from "@/data/site";

const highlights = [
  {
    title: "Brown & Black Bears",
    description:
      "Fortress of the Bear offers reliable close-up viewing of rescued Alaskan bears in naturalized habitats — one of Sitka's signature wildlife experiences.",
    image: IMAGES.hero.src,
    alt: "Brown bear in Alaska forest habitat near Sitka",
  },
  {
    title: "Bald Eagles & Raptors",
    description:
      "The Alaska Raptor Center rehabilitates bald eagles, owls, and falcons. Watch flight training and meet birds of prey up close.",
    image: IMAGES.eagle.src,
    alt: "Bald eagle at Alaska Raptor Center Sitka",
  },
  {
    title: "Totem Poles & Tlingit Culture",
    description:
      "Sitka National Historical Park preserves dozens of carved totem poles along rainforest trails — living art of the Tlingit people.",
    image: IMAGES.totem.src,
    alt: "Tlingit totem poles Sitka National Historical Park",
  },
  {
    title: "Sea Otters & Marine Life",
    description:
      "Sitka Sound teems with sea otters, whales, porpoises, and puffins against the dramatic backdrop of Mount Edgecumbe.",
    image: IMAGES.otter.src,
    alt: "Sea otter and marine wildlife in Sitka Sound",
  },
  {
    title: "Temperate Rainforest",
    description:
      "Walk moss-draped old-growth trails on Baranof Island — one of the world's largest temperate rainforests.",
    image: IMAGES.rainforest.src,
    alt: "Temperate rainforest trail Baranof Island Sitka",
  },
  {
    title: "Coastal Scenery",
    description:
      "Volcanic Mount Edgecumbe, Sitka Sound, and Pacific-facing vistas make Sitka one of Alaska's most photogenic ports.",
    image: IMAGES.coastal.src,
    alt: "Sitka Sound coastal mountains and misty Alaska scenery",
  },
];

export function WildlifeHighlights() {
  return (
    <section>
      <h2 className="font-serif text-2xl lg:text-3xl text-forest-900 mb-2">Sitka Wildlife & Nature Highlights</h2>
      <p className="text-forest-700 mb-8 max-w-2xl">
        Sitka is Alaska&apos;s wildlife port — where bears, bald eagles, totem poles, rainforest trails, and Pacific
        marine life converge on Baranof Island.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {highlights.map((item) => (
          <article key={item.title} className="group bg-white rounded-xl overflow-hidden border border-mist-300 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-44 overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg text-forest-900 mb-2">{item.title}</h3>
              <p className="text-sm text-forest-700 leading-relaxed">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
