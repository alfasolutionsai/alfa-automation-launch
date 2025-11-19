import { ButtonColorful } from "@/components/ui/button-colorful";
import { ArrowRight } from "lucide-react";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { MorphingText } from "@/components/ui/morphing-text";
export function Hero() {
  return <section className="relative mx-auto w-full pt-40 px-6 text-center md:px-8 min-h-[calc(100vh-40px)] overflow-hidden bg-[linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--background))_50%,hsl(var(--border))_88%)] dark:bg-[linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--background))_30%,hsl(var(--muted))_78%,hsl(var(--foreground))_99%_50%)] rounded-b-xl">
      {/* Grid BG */}
      <div className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Radial Accent */}
      <div className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] -translate-x-1/2 rounded-[100%] bg-background bg-[radial-gradient(closest-side,hsl(var(--background))_82%,hsl(var(--foreground)))] dark:bg-[radial-gradient(closest-side,hsl(var(--background))_82%,hsl(var(--foreground)))] animate-fade-up" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
              <svg className="h-4 w-4 text-primary" viewBox="0 0 219 299" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="m 182.75847,203.5552 c 4.80546,-7.14689 4.39578,-22.79233 -5.21215,-28.31548 -7.35026,-3.67513 -15.65143,-2.2368 -19.52991,0.92698 -6.24382,3.7768 -12.25739,15.85478 -12.25739,28.08525 l 21.56033,-0.0269 -0.006,24.0752 -44.74739,-0.0239 c 0.58611,12.38299 7.3383,22.30191 19.90367,27.82506 -1.61776,5.21816 -9.19529,15.85477 -19.60164,15.1341 -2.05436,11.25565 -4.00707,17.5742 -13.36383,27.80116 -9.36272,-10.22397 -11.31543,-16.54551 -13.36978,-27.80116 -10.40639,0.72067 -17.98389,-9.91594 -19.60168,-15.1341 12.56541,-5.52315 19.31759,-15.44207 19.9037,-27.82506 l -44.75038,0.0239 v -24.0752 l 21.55435,0.0269 c 0,-12.23047 -6.00459,-24.30845 -12.2544,-28.08525 -3.87848,-3.16079 -12.17665,-4.59912 -19.52392,-0.92698 -9.61391,5.52315 -10.02658,21.17158 -5.22112,28.31548 -45.3992696,-8.42975 -40.8958396,-52.27406 -25.42981,-68.19163 12.49961,-12.85846 26.12656,-14.86795 36.63459,-10.81305 23.88083,8.56133 39.94194,37.08913 40.72242,79.70143 h 12.48762 c 0,-38.73681 -6.74019,-51.08691 -24.30247,-99.73969 C 67.50787,81.51957 72.82172,53.09344 88.6346,26.91901 94.29829,17.53832 101.37344,9.06969 109.50416,0 c 8.12476,9.06969 15.19988,17.53832 20.86357,26.91901 15.81291,26.17443 21.12673,54.60056 12.2873,77.59325 -17.57121,48.65278 -24.31144,60.99989 -24.31144,99.73969 h 12.48765 c 0.78049,-42.6123 16.84758,-71.1401 40.72242,-79.70143 10.50803,-4.05191 24.14398,-2.04541 36.63758,10.81305 15.46304,15.91757 19.9665,59.76188 -25.43279,68.19163 z" />
              </svg>
              <span className="text-muted-foreground">Nous sommes fiers d'être une entreprise québécoise</span>
            </div>

            <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Utilisez l'IA pour{" "}
              <span className="inline-block min-w-[280px] md:min-w-[500px] lg:min-w-[650px]">
                <MorphingText 
                  words={[
                    "Faire croître votre entreprise", 
                    "Capturer plus de leads", 
                    "Économiser de l'argent", 
                    "Améliorer votre service client", 
                    "Gagner du temps", 
                    "Mieux s'organiser"
                  ]} 
                  className="text-4xl md:text-6xl lg:text-7xl" 
                  interval={3500} 
                />
              </span>
            </h1>

            <p className="mb-10 text-lg text-muted-foreground md:text-xl">Chez Alfa on trouve des solutions à vos problème pour que vous puissiez vous concentrer sur ce qui fait vraiment avancer votre entreprise.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="#contact">
                <ButtonColorful 
                  label="Obtenez une consultation gratuite" 
                  className="w-full sm:w-auto h-12 px-8 text-base"
                />
              </a>
              
            </div>

            <div className="flex justify-center lg:justify-start">
              <p className="text-sm text-muted-foreground italic">Des solutions pour les vrais défis des entreprises d'ici</p>
            </div>
          </div>

          {/* Right content - 3D Scene */}
          <div className="relative hidden lg:block animate-fade-up">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />
            
          </div>
        </div>
      </div>
    </section>;
}