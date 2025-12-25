// ============================================
// 🎓 VÍ DỤ ĐƠN GIẢN - HỌC TỪNG BƯỚC
// ============================================

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// ============================================
// BÀI 1: COMPONENT ĐƠN GIẢN NHẤT
// ============================================

function Bai1_ComponentDonGian() {
  return <h1>Xin chào!</h1>
}

// ============================================
// BÀI 2: COMPONENT CÓ NHIỀU ELEMENT
// ============================================

function Bai2_NhieuElement() {
  return (
    <div>
      <h1>Tiêu đề</h1>
      <p>Đây là đoạn văn</p>
      <button>Click me</button>
    </div>
  )
}

// ============================================
// BÀI 3: SỬ DỤNG BIẾN
// ============================================

function Bai3_SuDungBien() {
  const name = "Nguyễn Văn A"
  const age = 20
  
  return (
    <div>
      <h1>Xin chào, tôi là {name}</h1>
      <p>Tôi {age} tuổi</p>
    </div>
  )
}

// ============================================
// BÀI 4: STATE CƠ BẢN - ĐẾM SỐ
// ============================================

function Bai4_DemSo() {
  // Tạo state lưu số đếm
  const [count, setCount] = useState(0)
  
  // Hàm tăng số
  const tang = () => {
    setCount(count + 1)
  }
  
  // Hàm giảm số
  const giam = () => {
    setCount(count - 1)
  }
  
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Số đếm: {count}</h2>
      <div className="space-x-2">
        <Button onClick={giam}>Giảm</Button>
        <Button onClick={tang}>Tăng</Button>
      </div>
    </div>
  )
}

// ============================================
// BÀI 5: INPUT - LƯU TÊN
// ============================================

function Bai5_LuuTen() {
  const [ten, setTen] = useState('')
  
  return (
    <div className="p-4 space-y-4">
      <div>
        <label>Nhập tên của bạn:</label>
        <Input 
          value={ten}
          onChange={(e) => setTen(e.target.value)}
          placeholder="VD: Nguyễn Văn A"
        />
      </div>
      <p className="text-lg">
        Xin chào: <strong>{ten || '(chưa nhập)'}</strong>
      </p>
    </div>
  )
}

// ============================================
// BÀI 6: TOGGLE - BẬT/TẮT
// ============================================

function Bai6_Toggle() {
  const [hienThi, setHienThi] = useState(false)
  
  return (
    <div className="p-4 space-y-4">
      <Button onClick={() => setHienThi(!hienThi)}>
        {hienThi ? 'Ẩn' : 'Hiện'} nội dung
      </Button>
      
      {hienThi && (
        <div className="p-4 bg-blue-100 rounded">
          <p>🎉 Nội dung bí mật đây!</p>
        </div>
      )}
    </div>
  )
}

// ============================================
// BÀI 7: FORM ĐƠN GIẢN
// ============================================

function Bai7_FormDonGian() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = () => {
    alert(`Email: ${email}\nPassword: ${password}`)
  }
  
  return (
    <div className="p-4 space-y-4 max-w-md">
      <h2 className="text-xl font-bold">Đăng nhập đơn giản</h2>
      
      <div>
        <label>Email:</label>
        <Input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <div>
        <label>Password:</label>
        <Input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <Button onClick={handleSubmit} className="w-full">
        Đăng nhập
      </Button>
    </div>
  )
}

// ============================================
// BÀI 8: DANH SÁCH - MAP
// ============================================

function Bai8_DanhSach() {
  const sanPham = [
    { id: 1, ten: 'iPhone 15', gia: 20000000 },
    { id: 2, ten: 'Samsung S24', gia: 18000000 },
    { id: 3, ten: 'Laptop Dell', gia: 15000000 },
  ]
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Danh sách sản phẩm</h2>
      <div className="space-y-2">
        {sanPham.map((sp) => (
          <div key={sp.id} className="p-4 border rounded flex justify-between">
            <span className="font-medium">{sp.ten}</span>
            <span className="text-green-600">
              {sp.gia.toLocaleString('vi-VN')} đ
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================================
// BÀI 9: OBJECT STATE
// ============================================

function Bai9_ObjectState() {
  const [user, setUser] = useState({
    ten: '',
    tuoi: 0,
    email: ''
  })
  
  const updateField = (field: string, value: any) => {
    setUser({
      ...user,  // Giữ nguyên các field khác
      [field]: value  // Chỉ update field này
    })
  }
  
  return (
    <div className="p-4 space-y-4 max-w-md">
      <h2 className="text-xl font-bold">Thông tin user</h2>
      
      <div>
        <label>Tên:</label>
        <Input 
          value={user.ten}
          onChange={(e) => updateField('ten', e.target.value)}
        />
      </div>
      
      <div>
        <label>Tuổi:</label>
        <Input 
          type="number"
          value={user.tuoi}
          onChange={(e) => updateField('tuoi', e.target.value)}
        />
      </div>
      
      <div>
        <label>Email:</label>
        <Input 
          value={user.email}
          onChange={(e) => updateField('email', e.target.value)}
        />
      </div>
      
      <div className="p-4 bg-gray-100 rounded">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  )
}

// ============================================
// COMPONENT CHÍNH - CHỌN BÀI HỌC
// ============================================

export default function HocReact() {
  const [baihoc, setBaihoc] = useState(1)
  
  const danhSachBai = [
    { so: 1, ten: 'Component đơn giản' },
    { so: 2, ten: 'Nhiều element' },
    { so: 3, ten: 'Sử dụng biến' },
    { so: 4, ten: 'State - Đếm số' },
    { so: 5, ten: 'Input - Lưu tên' },
    { so: 6, ten: 'Toggle Bật/Tắt' },
    { so: 7, ten: 'Form đơn giản' },
    { so: 8, ten: 'Danh sách - Map' },
    { so: 9, ten: 'Object State' },
  ]
  
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6 mb-4">
        <h1 className="text-3xl font-bold mb-4">🎓 Học React từ con số 0</h1>
        <p className="text-gray-600 mb-4">
          Chọn bài học bên dưới để xem ví dụ
        </p>
        
        {/* Danh sách bài học */}
        <div className="grid grid-cols-3 gap-2">
          {danhSachBai.map((bai) => (
            <Button
              key={bai.so}
              variant={baihoc === bai.so ? 'default' : 'outline'}
              onClick={() => setBaihoc(bai.so)}
              className="text-left justify-start"
            >
              Bài {bai.so}: {bai.ten}
            </Button>
          ))}
        </div>
      </div>
      
      {/* Nội dung bài học */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        {baihoc === 1 && <Bai1_ComponentDonGian />}
        {baihoc === 2 && <Bai2_NhieuElement />}
        {baihoc === 3 && <Bai3_SuDungBien />}
        {baihoc === 4 && <Bai4_DemSo />}
        {baihoc === 5 && <Bai5_LuuTen />}
        {baihoc === 6 && <Bai6_Toggle />}
        {baihoc === 7 && <Bai7_FormDonGian />}
        {baihoc === 8 && <Bai8_DanhSach />}
        {baihoc === 9 && <Bai9_ObjectState />}
      </div>
    </div>
  )
}

// ============================================
// 📝 HƯỚNG DẪN SỬ DỤNG
// ============================================

/**
 * Để chạy file này:
 * 
 * 1. Mở src/main.tsx
 * 2. Thay đổi import:
 *    import App from './App-Examples'  // thay vì './App'
 * 
 * 3. Save và xem trong browser
 * 
 * HOẶC:
 * 
 * Copy nội dung từng bài vào src/App.tsx để test
 */
