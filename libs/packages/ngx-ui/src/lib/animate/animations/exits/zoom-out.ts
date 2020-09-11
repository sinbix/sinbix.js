import { state, animate, style, transition, animation, keyframes } from '@angular/animations';

export const zoomOut = animation([
  animate('{{duration}} {{delay}} ease-out',
    keyframes([
      style({ opacity: 1, transform: 'scale(1)' }),
      style({ opacity: 0, transform: 'scale(0.3)' }),
      style({ opacity: 0, transform: 'scale(0.3)' })
    ])
  )
], { params: { duration: '1s', delay: '' } });
