const capitalize = function (this: string): string {
  if (typeof this !== "string") {
    throw Error("Invaild type: expected a string");
  }
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const replaceToSpaceAndCapitalize = function (this: string, target: string): string {
  if (typeof this !== "string") {
    throw Error("Invalid type: expected a string");
  }
  if (typeof target !== "string") {
    throw Error(`Invalid Argument Type: expected "target" to be string ${typeof target} received`);
  }
  return this.split(target)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

String.prototype.capitalize = capitalize;
String.prototype.replaceToSpaceAndCapitalize = replaceToSpaceAndCapitalize;

declare global {
  interface String {
    capitalize(): string;
    replaceToSpaceAndCapitalize(target: string): string;
  }
}

export {};
