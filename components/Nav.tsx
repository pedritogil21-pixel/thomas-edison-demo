import Image from "next/image";
import Link from "next/link";
import { ACADEMIA_SHORT } from "@/lib/constants";
import { waUrl, MSG_DEFAULT } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./icons";

export function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md backdrop-saturate-150 bg-paper/90 border-b border-ink/10">
      <div className="w-[min(1120px,92%)] mx-auto flex items-center justify-between py-3.5">
        <Link href="#top" className="inline-flex items-center gap-2.5 font-display font-bold text-[19px] text-ink tracking-tight">
          <span
            className="brand-mark relative w-10 h-10 rounded-[10px] bg-white grid place-items-center overflow-hidden"
            style={{ boxShadow: "var(--shadow-brand)" }}
          >
            <Image
              src="/logo.webp"
              alt={ACADEMIA_SHORT}
              width={40}
              height={40}
              className="w-9 h-9 object-contain"
              priority
            />
          </span>
          {ACADEMIA_SHORT}
        </Link>

        <nav aria-label="Secciones" className="hidden md:inline-flex gap-6 text-sm text-muted">
          <a href="#ciclos" className="hover:text-ink">Ciclos</a>
          <a href="#porque" className="hover:text-ink">¿Por qué?</a>
          <a href="#docentes" className="hover:text-ink">Docentes</a>
          <a href="#inscripcion" className="hover:text-ink">Inscripción</a>
        </nav>

        <a
          href={waUrl(MSG_DEFAULT)}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-yellow text-ink font-bold text-sm font-display"
          style={{ boxShadow: "var(--shadow-brand)" }}
        >
          <WhatsAppIcon width={16} height={16} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
