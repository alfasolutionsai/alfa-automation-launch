import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ShaderBackground, HeroContent, PulsingCircle } from "@/components/ui/shaders-hero-section";

export function Hero() {
  return (
    <section className="relative">
      <ShaderBackground>
        <div className="absolute inset-0 z-20 flex flex-col">
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="text-center max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-sm px-4 py-2 text-sm">
                <svg className="h-4 w-4 text-white" viewBox="0 0 219 299" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="m 182.75847,203.5552 c 4.80546,-7.14689 4.39578,-22.79233 -5.21215,-28.31548 -7.35026,-3.67513 -15.65143,-2.2368 -19.52991,0.92698 -6.24382,3.7768 -12.25739,15.85478 -12.25739,28.08525 l 21.56033,-0.0269 -0.006,24.0752 -44.74739,-0.0239 c 0.58611,12.38299 7.3383,22.30191 19.90367,27.82506 -1.61776,5.21816 -9.19529,15.85477 -19.60164,15.1341 -2.05436,11.25565 -4.00707,17.5742 -13.36383,27.80116 -9.36272,-10.22397 -11.31543,-16.54551 -13.36978,-27.80116 -10.40639,0.72067 -17.98389,-9.91594 -19.60168,-15.1341 12.56541,-5.52315 19.31759,-15.44207 19.9037,-27.82506 l -44.75038,0.0239 v -24.0752 l 21.55435,0.0269 c 0,-12.23047 -6.00459,-24.30845 -12.2544,-28.08525 -3.87848,-3.16079 -12.17665,-4.59912 -19.52392,-0.92698 -9.61391,5.52315 -10.02658,21.17158 -5.22112,28.31548 -45.3992696,-8.42975 -40.8958396,-52.27406 -25.42981,-68.19163 12.49961,-12.85846 26.12656,-14.86795 36.63459,-10.81305 23.88083,8.56133 39.94194,37.08913 40.72242,79.70143 h 12.48762 c 0,-38.73681 -6.74019,-51.08691 -24.30247,-99.73969 C 67.50787,81.51957 72.82172,53.09344 88.6346,26.91901 94.29829,17.53832 101.37344,9.06969 109.50416,0 c 8.12476,9.06969 15.19988,17.53832 20.86357,26.91901 15.81291,26.17443 21.12673,54.60056 12.2873,77.59325 -17.57121,48.65278 -24.31144,60.99989 -24.31144,99.73969 h 12.48765 c 0.78049,-42.6123 16.84758,-71.1401 40.72242,-79.70143 10.50803,-4.05191 24.14398,-2.04541 36.63758,10.81305 15.46304,15.91757 19.9665,59.76188 -25.43279,68.19163 z" />
                </svg>
                <span className="text-white/90">Nous sommes fiers d'être une entreprise québécoise</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                Utilisez l'IA pour{" "}
                <span className="font-light italic">Gagner du temps</span>
              </h1>

              <p className="mb-10 text-lg text-white/80 md:text-xl max-w-3xl mx-auto">
                Nous concevons des systèmes d'IA personnalisés pour vos besoins spécifiques. On vous aide à automatiser les tâches répétitives, capturer et suivre chaque lead et libérer votre équipe pour que vous puissiez vous concentrer sur ce qui fait vraiment avancer et est important pour votre entreprise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8">
                  Obtenez un audit gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 border-2">
                  Réservez un appel découverte gratuit
                </Button>
              </div>

              <div className="flex justify-center">
                <p className="text-sm text-white/70 italic">
                  Des solutions pour les vrais défis de votre entreprise
                </p>
              </div>
            </div>
          </div>
        </div>
        <PulsingCircle />
      </ShaderBackground>
    </section>
  );
}