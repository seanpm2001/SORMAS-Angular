import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  EntityLink,
  EXPORT_TYPES,
  SentResourceTypes,
  SMALL_NOTIFICATION_MODAL_WIDTH,
} from '../_constants/common';
import { SendResourceService } from '../_services/send-resource.service';
import { RegionDto } from '../_models/regionDto';
import { NavItem } from '../_models/common';
import { actionsMoreDefs } from './configuration-actions-data';
import { ACTIONS_CONFIGURATION } from '../_constants/actions';
import {
  API_ROUTE_COMMUNITIES,
  API_ROUTE_CONTINENTNS,
  API_ROUTE_COUNTRIES,
  API_ROUTE_ENTRY_POINTS,
  API_ROUTE_FACILITIES,
  API_ROUTE_REGIONS,
  API_ROUTE_SUBCONTINENTNS,
} from '../_constants/api';
import { ExportService } from '../_services/api/export.service';
import { NotificationService } from '../_services/notification.service';

const LINKS: EntityLink[] = [
  { link: '/configuration/outbreaks', title: 'Outbreaks' },
  { link: '/configuration/continents', title: 'Continents' },
  { link: '/configuration/subcontinents', title: 'Subcontinents' },
  { link: '/configuration/countries', title: 'Countries' },
  { link: '/configuration/regions', title: 'Regions' },
  { link: '/configuration/districts', title: 'Districts' },
  { link: '/configuration/communities', title: 'Communities' },
  { link: '/configuration/facilities', title: 'Facilities' },
  { link: '/configuration/entry-points', title: 'Points of entry' },
  { link: '/configuration/population', title: 'Population' },
  { link: '/configuration/line-listing', title: 'Line listing' },
  { link: '/configuration/document-templates', title: 'Document templates' },
];

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit, OnDestroy {
  links: EntityLink[] = LINKS;
  actionsMore: NavItem[] = actionsMoreDefs;
  API_ROUTE: any;
  exportType: string;

  private subscription: Subscription[] = [];
  public regionName: string | null;

  constructor(
    private sendResourceService: SendResourceService,
    private router: Router,
    private exportService: ExportService,
    private translateService: TranslateService,
    private notificationService: NotificationService
  ) {
    this.subscription.push(
      this.sendResourceService.getResource().subscribe((response: any) => {
        if (response.fromComponent === SentResourceTypes.LINE_LISTING_DATA) {
          const regionTmp = response.resource.regions.find(
            (region: RegionDto) => region.uuid === response.resource.regionId
          );
          if (regionTmp) {
            this.regionName = regionTmp.name;
          } else {
            this.regionName = null;
          }
        }
      })
    );
  }

  ngOnInit(): void {
    this.setApiRoute();
    this.setExportType();
    this.subscription.push(
      this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.setApiRoute();
          this.setExportType();
        }
      })
    );
  }

  setApiRoute(): void {
    if (this.router.url.includes('continents')) {
      this.API_ROUTE = API_ROUTE_CONTINENTNS;
    }
    if (this.router.url.includes('subcontinents')) {
      this.API_ROUTE = API_ROUTE_SUBCONTINENTNS;
    }
    if (this.router.url.includes('countries')) {
      this.API_ROUTE = API_ROUTE_COUNTRIES;
    }
    if (this.router.url.includes('regions')) {
      this.API_ROUTE = API_ROUTE_REGIONS;
    }
    if (this.router.url.includes('communities')) {
      this.API_ROUTE = API_ROUTE_COMMUNITIES;
    }
    if (this.router.url.includes('facilities')) {
      this.API_ROUTE = API_ROUTE_FACILITIES;
    }
    if (this.router.url.includes('entry-points')) {
      this.API_ROUTE = API_ROUTE_ENTRY_POINTS;
    }
  }

  setExportType(): void {
    this.exportType = 'basic';
    if (this.router.url.includes('facilities')) {
      this.exportType = 'basic_detailed';
    }
  }

  onActionSelected(event: any) {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    switch (event) {
      case ACTIONS_CONFIGURATION.BASIC_EXPORT:
        this.exportService.executeExport(EXPORT_TYPES.BASIC, this.API_ROUTE.EXPORT);
        break;
      case ACTIONS_CONFIGURATION.DETAILED_EXPORT:
        this.exportService.executeExport(EXPORT_TYPES.DETAILED, this.API_ROUTE.EXPORT);
        break;
      default:
        break;
    }
  }

  export(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, this.API_ROUTE.EXPORT);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
