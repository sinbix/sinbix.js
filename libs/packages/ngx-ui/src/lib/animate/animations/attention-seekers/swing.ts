import { animation, style, animate, keyframes } from '@angular/animations';

export const swing = animation([
  style({ transformOrigin: 'top center' }),
  animate('{{duration}} {{delay}} ease-in-out',
    keyframes([
      style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0 }),
      style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2 }),
      style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4 }),
      style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6 }),
      style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8 }),
      style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1 })
    ])
  )], {
  params: { duration: '1s', delay: '' }
});
