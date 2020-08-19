import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface ISidebarMenuItem {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'helioquote-spa';
  isWelcomePageShown: boolean;
  isFinalPage: boolean;
  private destroySubject$ = new Subject();

  sidebarMenuItems: ISidebarMenuItem[] = [
    {
      title: 'Welcome page',
      link: '/welcome-page'
    },
    {
      title: 'Solar in your area',
      link: '/solar-review-page'
    },
    {
      title: 'Current system',
      link: '/current-system-page'
    },
    {
      title: 'System overview',
      link: '/system-overview-page'
    },
    {
      title: 'Energy overview',
      link: '/energy-overview-page'
    },
    {
      title: 'Cashflow',
      link: '/cashflow-page'
    },
    // {
    //   title: 'Adders',
    //   link: '/adders-page'
    // },
    // {
    //   title: 'Environmental impact',
    //   link: '/environmental-impact-page'
    // },
    {
      title: 'Shopping cart',
      link: '/cart'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(takeUntil(this.destroySubject$)).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isWelcomePageShown = event.urlAfterRedirects.includes('welcome-page');
        this.isFinalPage = event.urlAfterRedirects.includes('cart');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  navigateToNextState(): void {
    const indexOfCurrentUrl = this.sidebarMenuItems.findIndex(elem => elem.link === this.router.url);
    const urlToNavigate = this.sidebarMenuItems[indexOfCurrentUrl + 1].link;
    this.router.navigateByUrl(urlToNavigate);
  }
}
