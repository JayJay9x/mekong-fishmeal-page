
import React from 'react';

interface Product {
  name: string;
  protein: number;
  description: string;
  specs: {
    moisture: string;
    fat: string;
    ash: string;
  };
  tag: 'Standard' | 'Premium' | 'General';
}

const products: Product[] = [
  {
    name: "Bột cá 55% Đạm",
    protein: 55,
    description: "Phù hợp cho gia súc và các loại thủy sản thông dụng, cung cấp nguồn đạm dồi dào với chi phí tối ưu.",
    specs: { moisture: '< 10%', fat: '< 12%', ash: '< 25%' },
    tag: 'General',
  },
  {
    name: "Bột cá 60% Đạm",
    protein: 60,
    description: "Dòng sản phẩm tiêu chuẩn cho các trang trại chăn nuôi chất lượng cao, giúp vật nuôi tăng trưởng ổn định.",
    specs: { moisture: '< 10%', fat: '< 10%', ash: '< 22%' },
    tag: 'Standard',
  },
  {
    name: "Bột cá 65% Đạm",
    protein: 65,
    description: "Hàm lượng đạm cao cấp, chuyên dùng cho tôm, cá giống và các loại vật nuôi có yêu cầu dinh dưỡng khắt khe.",
    specs: { moisture: '< 10%', fat: '< 10%', ash: '< 18%' },
    tag: 'Premium',
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col group hover:border-amber-gold transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${product.tag === 'Premium' ? 'bg-amber-gold text-navy-blue' : 'bg-navy-blue text-white'}`}>{product.tag}</span>
            </div>
            <p className="text-slate-400 mb-6 flex-grow">{product.description}</p>
            <div className="bg-navy-blue/30 p-6 rounded-lg mb-6">
                <div className="text-center">
                    <span className="text-6xl font-extrabold text-amber-gold">{product.protein}%</span>
                    <p className="text-white font-semibold">PROTEIN</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                    <div>
                        <p className="text-slate-400 text-sm">Moisture</p>
                        <p className="text-white font-semibold">{product.specs.moisture}</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-sm">Fat</p>
                        <p className="text-white font-semibold">{product.specs.fat}</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-sm">Ash</p>
                        <p className="text-white font-semibold">{product.specs.ash}</p>
                    </div>
                </div>
            </div>
            <a href="#contact" className="w-full text-center bg-slate-700 text-white font-semibold py-3 rounded-lg group-hover:bg-amber-gold group-hover:text-navy-blue transition-all duration-300">
                Yêu cầu báo giá
            </a>
        </div>
    );
}

const ProductCatalog: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">Danh mục sản phẩm</h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">Sản phẩm bột cá sấy gián tiếp đa dạng, đáp ứng mọi nhu cầu của thị trường thức ăn chăn nuôi.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(p => <ProductCard key={p.name} product={p} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
