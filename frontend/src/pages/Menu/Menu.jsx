import React from 'react';
import './Menu.css'; // nếu bạn có CSS riêng cho Menu

function Menu() {
  const menuItems = [
    { name: 'Gà rán truyền thống', desc: 'Gà rán giòn, đậm vị, công thức Hàn Quốc', price: '65.000đ' },
    { name: 'Gà sốt cay Hàn Quốc', desc: 'Vị cay đặc trưng, ăn là ghiền', price: '70.000đ' },
    { name: 'Mì Ý bò bằm', desc: 'Sốt cà chua đậm đà, thịt bò thơm ngon', price: '55.000đ' },
    { name: 'Cơm gà xối mỡ', desc: 'Cơm chiên bơ, gà chiên giòn, rau củ kèm theo', price: '60.000đ' },
    { name: 'Combo Gà + Pepsi', desc: '1 phần gà + 1 lon Pepsi', price: '75.000đ' },
    { name: 'Khoai tây chiên', desc: 'Khoai tây giòn tan, ăn kèm tương', price: '25.000đ' },
    { name: 'Salad trộn', desc: 'Rau củ tươi, sốt mè rang', price: '30.000đ' },
    { name: 'Gà phô mai sốt mật ong', desc: 'Đậm vị ngọt và béo, cực kỳ hấp dẫn', price: '78.000đ' },
    { name: 'Burger gà giòn', desc: 'Bánh mì mềm, nhân gà giòn rụm', price: '49.000đ' },
    { name: 'Cơm gà cay phô mai', desc: 'Kết hợp vị cay và béo độc đáo', price: '72.000đ' },
  ];

  return (
    <div className="menu-page">
      <h1>Thực đơn</h1>
      <p>Chọn món bạn yêu thích từ thực đơn đa dạng của chúng tôi!</p>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <strong>{item.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
