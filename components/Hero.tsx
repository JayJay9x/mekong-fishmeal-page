
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/mekongriver/1920/1080"
          alt="Mekong Delta landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-blue/70"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <span className="inline-block bg-amber-gold/20 text-amber-gold text-sm font-semibold px-4 py-1.5 rounded-full border border-amber-gold/50 mb-4">
          Tiêu chuẩn xuất khẩu quốc tế
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
          NGUỒN ĐẠM TINH KHIẾT TỪ TÂM ĐIỂM MEKONG
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 mb-10">
          Bột cá sấy gián tiếp theo công nghệ hiện đại, cam kết độ đạm ổn định, chỉ số TVN thấp và minh bạch trong từng lô hàng.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-amber-gold text-navy-blue font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Xem danh mục sản phẩm
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-white hover:text-navy-blue transition-all duration-300"
          >
            Liên hệ báo giá
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
