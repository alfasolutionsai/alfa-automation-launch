'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/neon-button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'À propos',
			href: '#problems',
		},
		{
			label: 'Services',
			href: '#services',
		},
		{
			label: 'Processus',
			href: '#process',
		},
		{
			label: 'FAQ',
			href: '#faq',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn('sticky top-0 z-50 w-full border-b border-transparent', {
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg':
					scrolled,
			})}
		>
			<nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
				<a href="/" className="hover:bg-accent rounded-md p-2">
					<WordmarkIcon className="h-4" />
				</a>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<a key={link.label} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</a>
					))}
					<a href="#contact">
						<Button variant="solid">Commencer</Button>
					</a>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<MobileMenu open={open} className="flex flex-col justify-between gap-2">
				<div className="grid gap-y-2">
					{links.map((link) => (
						<a
							key={link.label}
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start',
							})}
							href={link.href}
							onClick={() => setOpen(false)}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex flex-col gap-2">
					<a href="#contact" onClick={() => setOpen(false)}>
						<Button className="w-full" variant="solid">Commencer</Button>
					</a>
				</div>
			</MobileMenu>
		</header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

export const WordmarkIcon = (props: React.ComponentProps<"svg">) => (
  <svg viewBox="0 0 219 299" fill="currentColor" className="h-6 w-6" {...props}>
    <path d="m 182.75847,203.5552 c 4.80546,-7.14689 4.39578,-22.79233 -5.21215,-28.31548 -7.35026,-3.67513 -15.65143,-2.2368 -19.52991,0.92698 -6.24382,3.7768 -12.25739,15.85478 -12.25739,28.08525 l 21.56033,-0.0269 -0.006,24.0752 -44.74739,-0.0239 c 0.58611,12.38299 7.3383,22.30191 19.90367,27.82506 -1.61776,5.21816 -9.19529,15.85477 -19.60164,15.1341 -2.05436,11.25565 -4.00707,17.5742 -13.36383,27.80116 -9.36272,-10.22397 -11.31543,-16.54551 -13.36978,-27.80116 -10.40639,0.72067 -17.98389,-9.91594 -19.60168,-15.1341 12.56541,-5.52315 19.31759,-15.44207 19.9037,-27.82506 l -44.75038,0.0239 v -24.0752 l 21.55435,0.0269 c 0,-12.23047 -6.00459,-24.30845 -12.2544,-28.08525 -3.87848,-3.16079 -12.17665,-4.59912 -19.52392,-0.92698 -9.61391,5.52315 -10.02658,21.17158 -5.22112,28.31548 -45.3992696,-8.42975 -40.8958396,-52.27406 -25.42981,-68.19163 12.49961,-12.85846 26.12656,-14.86795 36.63459,-10.81305 23.88083,8.56133 39.94194,37.08913 40.72242,79.70143 h 12.48762 c 0,-38.73681 -6.74019,-51.08691 -24.30247,-99.73969 C 67.50787,81.51957 72.82172,53.09344 88.6346,26.91901 94.29829,17.53832 101.37344,9.06969 109.50416,0 c 8.12476,9.06969 15.19988,17.53832 20.86357,26.91901 15.81291,26.17443 21.12673,54.60056 12.2873,77.59325 -17.57121,48.65278 -24.31144,60.99989 -24.31144,99.73969 h 12.48765 c 0.78049,-42.6123 16.84758,-71.1401 40.72242,-79.70143 10.50803,-4.05191 24.14398,-2.04541 36.63758,10.81305 15.46304,15.91757 19.9665,59.76188 -25.43279,68.19163 z" />
  </svg>
);
