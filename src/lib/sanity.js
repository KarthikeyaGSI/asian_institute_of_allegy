// Sanity CMS Configuration & Core Schemas
// Phase 1 Scope: Conditions, Testimonials, Stats

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
};

// 1. Condition Schema (for Guided Entry + Pathways)
export const conditionSchema = {
  name: "condition",
  title: "Condition",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Condition Title (e.g. Breathing Issues)" },
    { name: "category", type: "string", title: "Category (e.g. respiratory, skin)" },
    { name: "symptoms", type: "array", of: [{ type: "string" }], title: "Symptoms" },
    { name: "cause", type: "text", title: "Likely Cause" },
    { name: "approach", type: "text", title: "Our Approach" }
  ]
};

// 2. Testimonial Schema
export const testimonialSchema = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", type: "text", title: "Patient Quote" },
    { name: "author", type: "string", title: "Initials (e.g. A.K.)" },
    { name: "condition", type: "string", title: "Patient Condition (e.g. Chronic Asthma Patient)" }
  ]
};

// 3. Stats Schema (for numbers section)
export const statsSchema = {
  name: "stat",
  title: "Statistic",
  type: "document",
  fields: [
    { name: "value", type: "number", title: "Numeric Value (e.g. 50000)" },
    { name: "suffix", type: "string", title: "Suffix (e.g. +)" },
    { name: "label", type: "string", title: "Label (e.g. Patients)" }
  ]
};

// You can export these to your Sanity Studio schemas array:
export const schemaTypes = [conditionSchema, testimonialSchema, statsSchema];
