import { state, animate, style, transition, animation, keyframes } from '@angular/animations';

export const zoomIn = animation([
  animate('{{duration}} {{delay}} ease-in',
    keyframes([
      style({ opacity: 0, transform: 'scale(0.3)' }),
      style({ opacity: 1, transform: 'scale(0.65)' }),
      style({ opacity: 1, transform: 'scale(1)' })
    ])
  )
], { params: { duration: '1s', delay: '' } });
