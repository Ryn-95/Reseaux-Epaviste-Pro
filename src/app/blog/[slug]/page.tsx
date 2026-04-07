import { buildPageMetadata } from "@/lib/seo/metadata";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { PHONE_EPAVISTE_DISPLAY, PHONE_EPAVISTE_TEL } from "@/lib/constants";
import TrackedPhoneLink from "@/components/TrackedPhoneLink";
import { notFound } from "next/navigation";

const blogPosts = {
  "documents-enlevement-epave-2026": {
    title: "Enlèvement d'épave : quels documents fournir en 2026 ?",
    desc: "Guide complet sur la carte grise, le certificat de non-gage et la cession pour destruction.",
    image: "https://images.unsplash.com/photo-1517520287167-4bda6428c11b?q=80&w=1200",
    cat: "RÉGLEMENTATION",
    content: `
      <p>L'enlèvement d'un véhicule hors d'usage (VHU) est une procédure strictement encadrée par la loi française. En 2026, les exigences administratives restent rigoureuses pour garantir la traçabilité du véhicule et sa destruction conforme aux normes environnementales.</p>
      
      <h2>1. La Carte Grise (Certificat d'Immatriculation)</h2>
      <p>C'est la pièce maîtresse du dossier. Vous devez la barrer d'un trait oblique et y inscrire la mention "Vendu le [date et heure] pour destruction" ou "Cédé le [date et heure] pour destruction". N'oubliez pas de la signer.</p>
      <p>En cas de perte ou de vol, vous devrez fournir la déclaration officielle de perte ou de vol remise par la gendarmerie ou le commissariat.</p>

      <h2>2. Le Certificat de Situation Administrative (Non-Gage)</h2>
      <p>Ce document, datant de moins de 15 jours, atteste que le véhicule n'est pas gagé et qu'il ne fait l'objet d'aucune opposition au transfert du certificat d'immatriculation (OTCI).</p>

      <h2>3. La Pièce d'Identité</h2>
      <p>Une copie recto-verso de la pièce d'identité du titulaire de la carte grise est indispensable. Si le véhicule appartient à plusieurs personnes, la copie des pièces d'identité de tous les cotitulaires est requise.</p>

      <h2>4. Le Certificat de Cession (Cerfa 15776*02)</h2>
      <p>Ce document officiel doit être rempli en deux exemplaires : un pour vous et un pour l'épaviste agréé. Il formalise le transfert de responsabilité du véhicule.</p>
    `
  },
  "prime-a-la-conversion-guide": {
    title: "Prime à la conversion : comment en bénéficier ?",
    desc: "Tout savoir sur les aides de l'État pour le recyclage de votre ancien véhicule.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    cat: "AIDES ÉTAT",
    content: `
      <p>La prime à la conversion est un levier majeur de la transition écologique en France. Elle permet aux propriétaires de véhicules anciens et polluants de bénéficier d'une aide financière substantielle lors de l'achat d'un véhicule plus propre.</p>
      
      <h2>Conditions pour le véhicule mis au rebut</h2>
      <p>Pour être éligible, le véhicule doit être une voiture particulière ou une camionnette. Il doit appartenir au bénéficiaire depuis au moins un an et être immatriculé en France.</p>

      <h2>Montants de l'aide en 2026</h2>
      <p>Le montant de la prime dépend de votre revenu fiscal de référence par part. Elle peut atteindre jusqu'à 6 000 € pour l'achat d'un véhicule électrique neuf ou d'occasion.</p>

      <h2>La mise au rebut obligatoire</h2>
      <p>Le véhicule ancien doit être obligatoirement remis à un centre VHU agréé pour destruction. L'épaviste vous remettra alors un certificat de destruction, pièce indispensable pour finaliser votre dossier de demande de prime.</p>
    `
  },
  "reflexes-securite-panne-autoroute": {
    title: "Panne sur autoroute : les bons réflexes de sécurité",
    desc: "Sécurité, balisage et appel d'un dépanneur agréé : suivez le guide.",
    image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?q=80&w=1200",
    cat: "SÉCURITÉ",
    content: `
      <p>Une panne sur autoroute est une situation stressante et potentiellement dangereuse. Adopter les bons réflexes peut sauver des vies.</p>
      
      <h2>1. Se mettre en sécurité</h2>
      <p>Dès les premiers signes de panne, essayez de vous garer sur la bande d'arrêt d'urgence. Allumez vos feux de détresse. Sortez du véhicule par les portières de droite et mettez-vous à l'abri derrière la glissière de sécurité.</p>

      <h2>2. Alerter les secours</h2>
      <p>Utilisez de préférence les bornes d'appel d'urgence orange situées tous les 2 km. Elles permettent de vous localiser précisément. À défaut, appelez le 112.</p>

      <h2>3. Ne pas tenter de réparer soi-même</h2>
      <p>Sur autoroute, il est strictement interdit et extrêmement dangereux de tenter de changer une roue ou de faire une réparation. Seuls des dépanneurs agréés sont habilités à intervenir.</p>
    `
  },
  "enlevement-epave-sans-carte-grise": {
    title: "Comment se débarrasser d'un véhicule sans carte grise ?",
    desc: "Les solutions légales pour l'enlèvement d'un véhicule dont les papiers sont perdus.",
    image: "https://images.unsplash.com/photo-1599256629724-6014e3047466?q=80&w=1200",
    cat: "ADMINISTRATIF",
    content: `
      <p>La perte de la carte grise n'est pas une fatalité pour l'enlèvement de votre épave. Des solutions légales existent pour régulariser la situation.</p>
      
      <h2>Le cas de la perte ou du vol</h2>
      <p>Si vous avez perdu votre carte grise, vous devez effectuer une déclaration de perte auprès de la gendarmerie ou du commissariat. Ce document remplacera la carte grise pour la transaction avec l'épaviste.</p>

      <h2>Véhicule ancien sans carte grise</h2>
      <p>Pour les véhicules très anciens dont la carte grise a disparu, vous pouvez fournir une fiche d'identification du véhicule, à demander sur le site de l'ANTS.</p>

      <h2>Rôle de l'épaviste agréé</h2>
      <p>Un épaviste professionnel saura vous guider dans ces démarches spécifiques et vérifiera la conformité de vos documents pour assurer une destruction légale du véhicule.</p>
    `
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  if (!post) return {};

  return buildPageMetadata({
    title: `${post.title} | Blog Épaviste.pro`,
    description: post.desc,
    pathname: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${slug}` },
  ];

  return (
    <article className="bg-pro-gray min-h-screen">
      <div className="pt-32">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <header className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-official-grid opacity-5"></div>
        <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="section-label justify-center text-white mb-8">{post.cat}</div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-10">
            {post.title}
          </h1>
          <p className="text-xl text-white/70 font-medium max-w-3xl mx-auto leading-relaxed">
            {post.desc}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 bg-white border border-pro-gray-steel p-8 md:p-12 shadow-sm">
            <div className="relative aspect-video mb-12 overflow-hidden border border-pro-gray-steel">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            
            <div 
              className="prose prose-lg prose-slate max-w-none 
                prose-h2:text-3xl prose-h2:font-black prose-h2:text-pro-darker prose-h2:uppercase prose-h2:tracking-tight prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-pro-text-light prose-p:font-medium prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-etat-blue prose-strong:font-black"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-16 pt-12 border-t border-pro-gray-steel flex items-center justify-between">
              <div className="text-sm font-black text-pro-darker uppercase tracking-widest">Partager cet article</div>
              <div className="flex gap-4">
                <button className="w-10 h-10 border border-pro-gray-steel flex items-center justify-center hover:bg-etat-blue hover:text-white transition-colors">F</button>
                <button className="w-10 h-10 border border-pro-gray-steel flex items-center justify-center hover:bg-etat-blue hover:text-white transition-colors">X</button>
                <button className="w-10 h-10 border border-pro-gray-steel flex items-center justify-center hover:bg-etat-blue hover:text-white transition-colors">L</button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-pro-darker p-10 text-white space-y-8 sticky top-32">
              <div className="section-label text-white">Besoin d'aide ?</div>
              <h3 className="text-3xl font-black uppercase leading-none tracking-tight">Intervention Immédiate</h3>
              <p className="text-white/60 font-medium">Nos agents sont à votre disposition pour toute question sur la réglementation ou pour une intervention d'urgence.</p>
              <div className="space-y-4 pt-4">
                <TrackedPhoneLink trackingLocation="blog_sidebar_cta" phoneHref={`tel:${PHONE_EPAVISTE_TEL}`} className="btn-pro btn-emergency w-full text-xl shadow-xl">
                  {PHONE_EPAVISTE_DISPLAY}
                </TrackedPhoneLink>
                <Link href="/contact" className="btn-pro bg-white text-etat-blue w-full hover:bg-pro-gray-steel">
                  Rappel Gratuit
                </Link>
              </div>
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Disponible Actuellement</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-pro-gray-steel p-10 space-y-8">
              <h3 className="text-xl font-black text-pro-darker uppercase tracking-tight">Articles Récents</h3>
              <div className="space-y-8">
                {Object.entries(blogPosts).filter(([key]) => key !== slug).slice(0, 3).map(([key, p]) => (
                  <Link key={key} href={`/blog/${key}`} className="group block space-y-2">
                    <div className="text-[10px] font-black text-etat-red uppercase tracking-widest">{p.cat}</div>
                    <h4 className="font-black text-pro-darker group-hover:text-etat-blue transition-colors leading-tight">{p.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
