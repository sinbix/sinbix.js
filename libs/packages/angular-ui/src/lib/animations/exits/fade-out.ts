import { animate, style, animation } from '@angular/animations';

export const fadeOut = animation(
  [animate('{{duration}} {{delay}} ease-out', style({ opacity: 0 }))],
  { params: { duration: '1s', delay: '' } }
);

export const fadeOutRight = animation(
  [
    animate(
      '{{duration}} {{delay}} ease-out',
      style({ opacity: 0, transform: 'translateX(20px)' })
    ),
  ],
  { params: { duration: '1s', delay: '' } }
);

export const fadeOutLeft = animation(
  [
    animate(
      '{{duration}} {{delay}} ease-out',
      style({ opacity: 0, transform: 'translateX(-20px)' })
    ),
  ],
  { params: { duration: '1s', delay: '' } }
);

export const fadeOutUp = animation(
  [
    animate(
      '{{duration}} {{delay}} ease-out',
      style({ opacity: 0, transform: 'translateY(-20px)' })
    ),
  ],
  { params: { duration: '1s', delay: '' } }
);

export const fadeOutDown = animation(
  [
    animate(
      '{{duration}} {{delay}} ease-out',
      style({ opacity: 0, transform: 'translateY(20px)' })
    ),
  ],
  { params: { duration: '1s', delay: '' } }
);
