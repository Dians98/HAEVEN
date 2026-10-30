import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import { Reveal } from "@/components/motion/reveal";

interface CtaBannerProps {
  title: string;
  text: string;
  button: string;
}

// Porte l'ancre #contact vers laquelle pointent tous les "Start a project".
export function CtaBanner({ title, text, button }: CtaBannerProps) {
  return (
    <section id="contact" className="on-poudre bg-poudre py-[clamp(72px,10vw,140px)] text-center">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-6 px-(--gutter)">
        <Reveal>
          <Logo className="h-16 w-[54px] text-ivoire" />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-[clamp(40px,5vw,70px)] leading-[1.05] text-anthracite">{title}</h2>
        </Reveal>
        <Reveal delay={0.16} as="p" className="text-anthracite">
          {text}
        </Reveal>
        <Reveal delay={0.24}>
          <Button asChild variant="deep">
            <a href="#contact">{button}</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
