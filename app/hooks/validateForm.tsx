import { parseZonedDateTime } from "@internationalized/date";

export type rules = {
  [key: string]: ruleName[] | string[];
};

type ruleName = "string" | "in" | "currency" | "number" | "required" | "zonedDateTime" | "not";

const validateForm = (toValidate: FormData, rules: rules) => {
  const validated: { [key: string]: string | File } = {};
  const errors: { [key: string]: string } = {};

  const validateRule = (ruleName: ruleName, value: FormDataEntryValue, ruleParam?: string) => {
    switch (ruleName) {
      case "string":
        return typeof value === "string" ? true : "have to be string";
      case "in":
        return ruleParam?.split(",").includes(value as string)
          ? true
          : `have to be in ${ruleParam}`;
      case "currency":
        // Handle "Rp. " prefix and thousands separator for Rupiah
        if (ruleParam === "rupiah") {
          const rupiahPattern = /^Rp\. ?[0-9]{1,3}(?:\.[0-9]{3})*(?:,[0-9]{2})?$/;
          return typeof value === "string" && rupiahPattern.test(value) ? true : "Not in rupiah";
        }
        return "Invalid currency";
      case "number":
        return !isNaN(Number(value)) ? true : "have to be number";
      case "required":
        return value !== null && value !== undefined && value !== "" ? true : "is required";
      case "zonedDateTime":
        return !!parseZonedDateTime(value as string) ? true : "have to be in zonedDateTime type";
      case "not":
        return value !== ruleParam ? true : `cannot be ${ruleParam}`;
      default:
        return true;
    }
  };

  for (const [key, value] of toValidate.entries()) {
    const valueRules = rules[key] || [];
    for (const rule of valueRules) {
      const [ruleName, ruleParam] = rule.split(":");
      const result = validateRule(ruleName as ruleName, value, ruleParam);
      if (typeof result === "string") {
        errors[key] = `${key} ${result}`;
      } else {
        validated[key] = value;
      }
    }
  }

  return { validated, errors };
};

export default validateForm;
