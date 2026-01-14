import { datadogRum } from "@datadog/browser-rum";

const ENV = process.env.NODE_ENV;
const DATACOMMONS = process.env.NEXT_PUBLIC_DATACOMMONS || "gen3.2_generic_datacommons";

datadogRum.init({
  applicationId: '4ff9aad3-e5ca-477e-bf07-b0e2508500a8',
  clientToken: 'pub096755ba850be1d26c801f30442873ee',
  site: 'ddog-gov.com',
  service: 'frontend-framework',
  env: `${DATACOMMONS}`,
  version: process.env.version || 'unknown',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 0,
  defaultPrivacyLevel: 'mask-user-input',
});

const DatadogInit = ()=>  {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null;
}

export default DatadogInit;
