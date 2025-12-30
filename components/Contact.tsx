
import React from 'react';

const InfoItem: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="bg-amber-gold/10 text-amber-gold rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center">
      <i data-lucide={icon} className="w-6 h-6"></i>
    </div>
    <div>
      <h4 className="font-bold text-navy-blue text-lg">{title}</h4>
      <p className="text-slate-600">{children}</p>
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-navy-blue mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Sẵn sàng hợp tác? Điền vào biểu mẫu bên dưới hoặc liên hệ trực tiếp để nhận báo giá và tư vấn.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <InfoItem icon="phone" title="Hotline">
              <a href="tel:+84396529995" className="hover:text-amber-gold transition-colors">+84 39 652 9995</a>
            </InfoItem>
            <InfoItem icon="mail" title="Email">
              <a href="mailto:info@mekongfishmeal.com" className="hover:text-amber-gold transition-colors">info@mekongfishmeal.com</a>
            </InfoItem>
            <InfoItem icon="map-pin" title="Địa chỉ nhà máy">
              Tỉnh lộ 942, Xã Mỹ An, Huyện Chợ Mới, Tỉnh An Giang, Việt Nam
            </InfoItem>
          </div>
          
          <form className="bg-slate-50 p-8 rounded-2xl shadow-lg space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-blue mb-2">Họ và tên</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-gold focus:border-amber-gold outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy-blue mb-2">Số điện thoại</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-gold focus:border-amber-gold outline-none transition-all" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div>
              <label htmlFor="protein-type" className="block text-sm font-medium text-navy-blue mb-2">Loại đạm quan tâm</label>
              <select id="protein-type" name="protein-type" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-gold focus:border-amber-gold outline-none transition-all bg-white">
                <option>Chọn loại đạm</option>
                <option>Bột cá 55% Đạm</option>
                <option>Bột cá 60% Đạm</option>
                <option>Bột cá 65% Đạm</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy-blue mb-2">Lời nhắn</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-gold focus:border-amber-gold outline-none transition-all" placeholder="Nhu cầu dự kiến, yêu cầu khác..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-navy-blue text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300">
                Gửi yêu cầu
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
