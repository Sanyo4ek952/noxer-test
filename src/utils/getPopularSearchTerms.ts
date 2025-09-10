import type { Product } from "../type/type.ts";

export function getPopularSearchTerms(products: Product[], limit = 5) {
  const wordMap: Record<string, number> = {};

  products.forEach((product) => {
    const words = product.Product_Name.toLowerCase().split(/\s+/);
    words.forEach((word) => {
      if (word.length > 2) {
        // игнорируем короткие слова
        wordMap[word] = (wordMap[word] || 0) + 1;
      }
    });
  });

  // Сортируем по частоте
  const sortedWords = Object.entries(wordMap)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([word]) => word);

  return sortedWords;
}
