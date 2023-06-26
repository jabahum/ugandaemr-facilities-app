import { getAsyncLifecycle, defineConfigSchema } from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";

const backendDependencies = {
  fhir2: "^1.2.0",
  "webservices.rest": "^2.2.0",
};

const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

const moduleName = "@openmrs/esm-facilities-app";

function setupOpenMRS() {
  const options = {
    featureName: "facilities-list",
    moduleName,
  };

  defineConfigSchema(moduleName, configSchema);
  return {
    pages: [],
    extensions: [],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
