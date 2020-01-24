// ESM syntax is supported.
const OctoApi = {
    getDataByMPN: (manufacturePartNumber = 'CY8C5868AXI-LP032') => {
        const status = `Fetching data for ${manufacturePartNumber} from octopart.com's api.`;
        console.log(status);
        return status;
    }
};
export default OctoApi;

OctoApi.getDataByMPN();
