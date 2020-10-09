import { state, animate, style, transition, animation } from '@angular/animations';

export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('{{duration}} {{delay}} ease-in'),
], {
  params: { duration: '1s', delay: '' }
});

export const fadeInRight = animation([
  style({ opacity: 0, transform: 'translateX(-20px)' }),
  animate('{{duration}} {{delay}} ease-in', style('*'))
], {
  params: { duration: '1s', delay: '' }
});

export const fadeInLeft = animation([
  style({ opacity: 0, transform: 'translateX(20px)' }),
  animate('{{duration}} {{delay}} ease-in', style('*'))
], {
  params: { duration: '1s', delay: '' }
});

export const fadeInUp = animation([
  style({ opacity: 0, transform: 'translateY(20px)' }),
  animate('{{duration}} {{delay}} ease-in', style('*'))
], {
  params: { duration: '1s', delay: '' }
});

export const fadeInDown = animation([
  style({ opacity: 0, transform: 'translateY(-20px)' }),
  animate('{{duration}} {{delay}} ease-in', style('*'))
], {
  params: { duration: '1s', delay: '' }
});
