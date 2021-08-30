import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseService } from './base.service';
import { RegionSerializer } from '../../_serializers/region.serializer';

import * as constants from '../../app.constants';
import { RegionDto } from '../../_models/models';
import { HelperService } from '../helper.service';

@Injectable({
  providedIn: 'root',
})
export class RegionService extends BaseService<RegionDto> {
  constructor(httpClient: HttpClient, helperService: HelperService) {
    super(httpClient, helperService, '', constants.API_ROUTE_REGIONS, new RegionSerializer());
  }
}
