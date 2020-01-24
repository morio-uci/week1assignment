import OctoApi from '../main.js';
import {expect} from 'chai';

describe ('Octoparts API suite', () => {
    it('getDataByMPN default value', () => {
        const result = OctoApi.getDataByMPN();
        expect(result).to.equal("Fetching data for CY8C5868AXI-LP032 from octopart.com's api.");
    });
    it('getDataByMPN negative number -2', () =>{
       const result =  OctoApi.getDataByMPN(-2);
        expect(result).to.equal("Fetching data for -2 from octopart.com's api.");
    });
});