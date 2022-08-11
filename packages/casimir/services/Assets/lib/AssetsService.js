import { makeSingletonInstance } from '@casimir/toolbox';
import { proxydi } from '@casimir/proxydi';
import { AssetsHttp } from './AssetsHttp';

/**
 * Assets data provider
 */
export class AssetsService {
  proxydi = proxydi;

  assetsHttp = AssetsHttp.getInstance();

  /**
   * Get assets by type
   * @param {number} type
   * @return {Promise<Object>}
   */
  getAssetsByType(type) {
    return this.assetsHttp.getAssetsByType(type);
  }

  /**
   * Get assets by issuer
   * @param {string} issuer
   * @return {Promise<Object>}
   */
  getAssetsByIssuer(issuer) {
    return this.assetsHttp.getAssetsByIssuer(issuer);
  }

  /**
   * Get all assets
   * @param {number} limit
   * @return {Promise<Object>}
   */
  lookupAssets(limit) {
    return this.assetsHttp.lookupAssets(limit);
  }

  /** @type {() => AssetsService} */
  static getInstance = makeSingletonInstance(() => new AssetsService());
}
