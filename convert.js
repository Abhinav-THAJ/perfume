const fs = require('fs');
const { parse } = require('csv-parse/sync');

const inputPath = 'C:\\Users\\hp\\Downloads\\wc-product-export-13-4-2026-1776075937368 - Copy.csv';
const fileContent = fs.readFileSync(inputPath, 'utf8');

const records = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
});

const products = records.map(record => {
  // Extract images
  let images = [];
  if (record.Images) {
    images = record.Images.split(',').map(img => img.trim()).filter(img => img.length > 0);
  }

  return {
    id: record.ID,
    name: record.Name,
    shortDescription: record['Short description'],
    price: record['Regular price'],
    salePrice: record['Sale price'],
    images: images,
    categories: record.Categories ? record.Categories.split(',').map(c => c.trim()) : [],
  };
}).filter(product => product.name);

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/products.json', JSON.stringify(products, null, 2));

console.log('Successfully wrote products.json!');
