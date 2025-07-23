import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateOnScroll(
	sectionIds: string[],
	animationConfig = {
		from: { opacity: 0, y: 100 },
		to: {
			opacity: 1,
			y: 0,
			duration: 1,
			scrollTrigger: {
				start: 'top 100%',
				toggleActions: 'play none none none'
			}
		}
	}
) {
	sectionIds.forEach((id) => {
		const section = document.getElementById(id);
		if (section) {
			gsap.fromTo(section, animationConfig.from, {
				...animationConfig.to,
				scrollTrigger: {
					trigger: section,
					...animationConfig.to.scrollTrigger
				}
			});
		}
	});
}
