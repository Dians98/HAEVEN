import Link from "next/link";
import { Logo } from "@/components/common/logo";
import { LANG_STORAGE_KEY, localePath } from "@/lib/i18n";

// Choix mémorisé d'abord, puis langue du navigateur ; sans JavaScript, les deux liens restent.
const redirectScript = `(function(){var l;try{l=localStorage.getItem(${JSON.stringify(LANG_STORAGE_KEY)})}catch(e){}if(l!=="fr"&&l!=="en"){l=(navigator.language||"").toLowerCase().indexOf("fr")===0?"fr":"en"}location.replace("/"+l+"/")})();`;

export default function EntryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-(--gutter) text-center">
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <Logo className="h-16 w-[54px] text-poudre" />
      <h1 className="font-serif text-[clamp(32px,6vw,48px)] font-medium tracking-[0.24em]">HAEVEN</h1>
      <nav aria-label="Language / Langue" className="flex gap-6">
        <Link href={localePath("en")} lang="en" hrefLang="en" className="txtlink">
          English
        </Link>
        <Link href={localePath("fr")} lang="fr" hrefLang="fr" className="txtlink">
          Français
        </Link>
      </nav>
    </main>
  );
}
