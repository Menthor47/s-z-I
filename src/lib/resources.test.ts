import { describe, it, expect } from "vitest";
import { RESOURCE_ARTICLES, RESOURCE_SUMMARIES, findArticleBySlug } from "./resources";

describe("resources registry", () => {
  it("findArticleBySlug returns an article for each known slug", () => {
    for (const article of RESOURCE_ARTICLES) {
      const result = findArticleBySlug(article.slug);

      expect(result).toBeDefined();
      expect(result?.slug).toBe(article.slug);
    }
  });

  it("findArticleBySlug returns undefined for an unknown slug", () => {
    const result = findArticleBySlug("non-existent-slug");

    expect(result).toBeUndefined();
  });

  it("RESOURCE_SUMMARIES stay in sync with RESOURCE_ARTICLES metadata", () => {
    expect(RESOURCE_SUMMARIES.length).toBe(RESOURCE_ARTICLES.length);

    RESOURCE_SUMMARIES.forEach((summary) => {
      const article = RESOURCE_ARTICLES.find((candidate) => candidate.slug === summary.slug);

      expect(article).toBeDefined();
      if (!article) return;

      expect(summary.title).toBe(article.title);
      expect(summary.description).toBe(article.description);
      expect(summary.readingTime).toBe(article.readingTime);
    });
  });
});
