import type { Specs, Callers, ValidationLevel, Params } from "../types";
declare const _default: (
  specs: Specs,
  callers: Callers,
  {
    origin,
    validationLevel,
  }?: {
    origin: null | string;
    validationLevel: ValidationLevel;
  }
) => {
  [path: string]: {
    [method: string]: ({
      pathParams,
      queryParams,
      body,
      contentType,
    }?: {
      pathParams: Params;
      queryParams: Params;
      body: any;
      contentType: string;
    }) => Promise<any>;
  };
};
export default _default;
