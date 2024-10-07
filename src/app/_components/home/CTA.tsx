import { Button } from "@/components/ui/button";
import Link from "next/link";
import hex__img from "@/assets/hex.jpg";

export default function CTA() {
  return (
    <section className="relative bg-black text-white py-16 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${hex__img.src})`,
            opacity: 0.4,
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-3xl font-bold">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="mt-4 text-lg">
          Sign up now and experience the future of AI messaging.
        </p>
        <Link href="/signup">
          <Button
            variant="outline"
            className="text-slate-900 inline-block mt-8 px-6 py-3"
          >
            Get Started for Free
          </Button>
        </Link>
      </div>
    </section>
  );
}
