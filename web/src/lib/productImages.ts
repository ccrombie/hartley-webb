// Curated Unsplash images mapped to each product ID
export const productImages: Record<string, string> = {
  // Electricals
  'HW-E001': 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&q=80', // TV
  'HW-E002': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80', // Headphones
  'HW-E003': 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', // Coffee machine
  'HW-E004': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',    // Vacuum
  'HW-E005': 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80', // MacBook
  'HW-E006': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',    // Ninja cooker
  'HW-E007': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80', // Nespresso
  'HW-E008': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80', // Galaxy phone
  'HW-E009': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', // Stand mixer
  'HW-E010': 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80', // Bluetooth speaker

  // Home & Furniture
  'HW-H001': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',    // Sofa
  'HW-H002': 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&q=80', // Casserole
  'HW-H003': 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&q=80', // Dinnerware
  'HW-H004': 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80', // Mug
  'HW-H005': 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80', // Mattress
  'HW-H006': 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&q=80', // Knife block

  // Women's Fashion
  'HW-WF001': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', // Floral dress
  'HW-WF002': 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80', // Wool coat
  'HW-WF003': 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',    // Striped top
  'HW-WF004': 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80',   // Court shoes
  'HW-WF005': 'https://images.unsplash.com/photo-1594938298603-c8148c4b4e63?w=600&q=80', // Blazer

  // Men's Fashion
  'HW-MF001': 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80', // Suit jacket
  'HW-MF002': 'https://images.unsplash.com/photo-1520975916090-7b25e3268413?w=600&q=80', // Wax jacket
  'HW-MF003': 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80', // Oxford shirt
  'HW-MF004': 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',    // Jeans
  'HW-MF005': 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',    // Boots

  // Children's
  'HW-C001': 'https://images.unsplash.com/photo-1471286174890-9c112ac6476f?w=600&q=80',  // Girls dress
  'HW-C002': 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80',  // School shoes

  // Beauty & Fragrance
  'HW-B001': 'https://images.unsplash.com/photo-1586495777744-4e6232bf2c9b?w=600&q=80',  // Lipstick
  'HW-B002': 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=600&q=80',  // Perfume
  'HW-B003': 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&q=80',     // Face cream
  'HW-B004': 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',  // Moisturiser

  // Garden
  'HW-G001': 'https://images.unsplash.com/photo-1600210491892-03d54079b6ac?w=600&q=80',  // Garden furniture
  'HW-G002': 'https://images.unsplash.com/photo-1558618047-f4e7f0c50b95?w=600&q=80',     // Lawn mower
  'HW-G003': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',  // Garden / hose

  // Toys & Games
  'HW-T001': 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',  // LEGO
  'HW-T002': 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&q=80',  // Toys
  'HW-T003': 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&q=80',  // Puzzle
}

export function getProductImage(productId: string): string | undefined {
  return productImages[productId]
}
