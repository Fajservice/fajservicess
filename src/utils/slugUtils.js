/**
 * Converts a string to a URL-friendly slug
 * @param {string} text - The text to convert to a slug
 * @returns {string} - The URL-friendly slug
 */
export const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-')     // Replace spaces with hyphens
      .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
      .trim();                   // Trim leading/trailing spaces
  };
  
  /**
   * Example usage:
   * const title = "Reviving Rides, One Car at a Time!";
   * const slug = generateSlug(title); // Output: "reviving-rides-one-car-at-a-time"
   */