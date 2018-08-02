import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        transition(':enter', [
          style({
            transform: 'translateY(100%)', 
            opacity: 0
          }),
          animate('300ms', style({
              transform: 'translateY(0)', 
              opacity: 1
          }))
        ])
    ]),
    trigger('fadeInOut', [
        transition(':enter', [
          style({
            opacity: 0
          }),
          animate('300ms', style({
              opacity: 1
          }))
        ])
    ])
]