import { buildPageMetadata } from "@/lib/seo/metadata";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Blog Technique & Réglementation VHU | Épaviste.pro",
  description: "Découvrez nos articles sur la réglementation de l'enlèvement d'épave, les conseils d'entretien et les démarches administratives pour véhicules hors d'usage.",
  pathname: "/blog",
});

const blogPosts = [
  {
    title: "Enlèvement d'épave : quels documents fournir en 2026 ?",
    desc: "Guide complet sur la carte grise, le certificat de non-gage et la cession pour destruction.",
    image: "https://images.unsplash.com/photo-1517520287167-4bda6428c11b?q=80&w=800",
    cat: "RÉGLEMENTATION",
    slug: "documents-enlevement-epave-2026"
  },
  {
    title: "Prime à la conversion : comment en bénéficier ?",
    desc: "Tout savoir sur les aides de l'État pour le recyclage de votre ancien véhicule.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
    cat: "AIDES ÉTAT",
    slug: "prime-a-la-conversion-guide"
  },
  {
    title: "Panne sur autoroute : les bons réflexes de sécurité",
    desc: "Sécurité, balisage et appel d'un dépanneur agréé : suivez le guide.",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=800",
    cat: "SÉCURITÉ",
    slug: "reflexes-securite-panne-autoroute"
  },
  {
    title: "Comment se débarrasser d'un véhicule sans carte grise ?",
    desc: "Les solutions légales pour l'enlèvement d'un véhicule dont les papiers sont perdus.",
    image: "https://images.unsplash.com/photo-1599256629724-6014e3047466?q=80&w=800",
    cat: "ADMINISTRATIF",
    slug: "enlevement-epave-sans-carte-grise"
  }
];

const breadcrumbItems = [
  { label: "Accueil", href: "/" },
  { label: "Blog Technique", href: "/blog" },
];

export default function BlogPage() {
  return (
    <div className="bg-pro-gray">
      <div className="pt-32">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="py-24 section-blue-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-official-grid opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="section-label justify-center text-white">Expertise Automobile</div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
            Blog Technique & <span className="text-pro-accent">Réglementation</span>
          </h1>
          <p className="text-xl text-white/80 font-medium max-w-3xl mx-auto leading-relaxed">
            Votre ressource officielle pour tout comprendre sur la fin de vie des véhicules, les obligations légales et les aides de l'État.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {blogPosts.map((post, i) => (
              <div key={i} className="bg-white border border-pro-gray-steel flex flex-col md:flex-row overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover img-zoom" />
                  <div className="absolute top-4 left-4 bg-etat-blue text-white px-3 py-1 text-[10px] font-black tracking-widest">
                    {post.cat}
                  </div>
                </div>
                <div className="p-8 md:w-3/5 space-y-4 flex flex-col justify-center">
                  <h3 className="text-2xl font-black text-pro-darker group-hover:text-etat-blue transition-colors leading-tight">{post.title}</h3>
                  <p className="text-pro-text-light font-medium text-sm leading-relaxed">{post.desc}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-block text-[10px] font-black text-etat-red uppercase tracking-widest border-b-2 border-transparent hover:border-etat-red transition-all pt-2 w-fit">
                    Lire l'article complet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Stay informed */}
      <section className="py-24 section-slate border-y border-pro-gray-steel">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
          <div className="section-label justify-center">Veille Réglementaire</div>
          <h2 className="text-4xl font-black text-pro-darker tracking-tight">Restez informé des évolutions législatives</h2>
          <p className="text-lg text-pro-text-light font-medium">Recevez mensuellement un récapitulatif des aides de l'État et des nouvelles normes environnementales VHU.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="votre@email.com" className="form-input flex-1" />
            <button className="btn-pro shadow-xl">S'abonner</button>
          </div>
        </div>
      </section>
    </div>
  );
}
