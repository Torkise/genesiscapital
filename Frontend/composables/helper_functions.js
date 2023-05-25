import router from "@/router";
export function parseArray(input) {
    try {
      // Remove the surrounding single quotes if present
      const sanitizedInput = input.replace(/'/g, '"');
      // Parse the string into an array
      const array = JSON.parse(sanitizedInput);
      // Make sure the parsed value is an array
      if (Array.isArray(array)) {
        return array;
      } else {
        throw new Error('Invalid input format');
      }
    } catch (error) {
      throw new Error('Invalid input format');
    }
  }
