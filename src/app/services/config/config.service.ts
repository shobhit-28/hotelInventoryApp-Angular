import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from '../routeConfig/route-config.service';
import { RouteConfig } from '../routeConfig/routeConfig';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken: RouteConfig) {
    console.log('ConfigService instance created')
    console.log(configToken)
  }
}
