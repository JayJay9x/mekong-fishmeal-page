
import React from 'react';

const ValueCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    <div className="bg-amber-gold text-navy-blue rounded-full w-14 h-14 flex items-center justify-center mb-6">
      <i data-lucide={icon} className="w-8 h-8"></i>
    </div>
    <h3 className="text-2xl font-bold text-navy-blue mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-navy-blue mb-4">Giá trị cốt lõi của Mekong Fishmeal</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Chúng tôi không chỉ cung cấp sản phẩm, chúng tôi mang đến sự tin cậy và hiệu quả cho chuỗi cung ứng của bạn.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard icon="award" title="Chất lượng ổn định">
                Mọi lô hàng đều được kiểm nghiệm nghiêm ngặt, đảm bảo các chỉ số TVN, độ ẩm, và độ đạm luôn đồng nhất và đạt chuẩn quốc tế.
            </ValueCard>
            <ValueCard icon="leaf" title="Nguyên liệu tươi mới">
                Nguồn cá tươi được thu mua và chế biến ngay trong ngày từ vùng nguyên liệu trù phú của Đồng bằng sông Cửu Long, giữ trọn vẹn giá trị dinh dưỡng.
            </ValueCard>
            <ValueCard icon="clipboard-check" title="Minh bạch tuyệt đối">
                Luôn cung cấp kết quả xét nghiệm mẫu độc lập trước khi xuất kho, giúp đối tác hoàn toàn an tâm về chất lượng sản phẩm.
            </ValueCard>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
