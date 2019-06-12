import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MenuItems} from "../../shared/menu-items/menu-items";
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: []
})
export class FullComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              public menuItems: MenuItems) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit() {
  }

}
