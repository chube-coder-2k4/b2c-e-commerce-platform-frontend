# 📝 CODING STYLE - DÀNH CHO NGƯỜI MỚI HỌC

## 🎯 Nguyên tắc viết code trong project này

### ✅ LUÔN LUÔN:

#### 1. **Comment chi tiết mọi thứ**
```tsx
// ❌ KHÔNG TỐT - Không có comment
function handleLogin() {
  setLoading(true)
  const response = await api.post('/login', { email, password })
  setUser(response.data)
}

// ✅ TỐT - Comment đầy đủ
/**
 * Hàm xử lý đăng nhập
 * 1. Bật loading state
 * 2. Gọi API login
 * 3. Lưu thông tin user vào state
 */
function handleLogin() {
  // Bước 1: Bật loading để hiện spinner
  setLoading(true)
  
  // Bước 2: Gọi API login với email và password
  const response = await api.post('/login', { email, password })
  
  // Bước 3: Lưu thông tin user vào state
  setUser(response.data)
}
```

#### 2. **Giải thích TỪNG DÒNG code phức tạp**
```tsx
// ❌ KHÔNG TỐT
const newUser = { ...user, age: 25 }

// ✅ TỐT
// Spread operator: Sao chép tất cả thuộc tính từ user cũ
// và thay đổi age thành 25 (giữ nguyên các field khác)
const newUser = { ...user, age: 25 }
//                 ^         ^
//                 |         Thay đổi field này
//                 Copy tất cả field từ user cũ
```

#### 3. **Comment mục đích, không chỉ mô tả**
```tsx
// ❌ KHÔNG TỐT - Chỉ mô tả
// Set loading to true
setLoading(true)

// ✅ TỐT - Giải thích TẠI SAO
// Bật loading để hiển thị spinner, 
// tránh user click nhiều lần trong lúc đợi API
setLoading(true)
```

#### 4. **Chia section rõ ràng**
```tsx
function LoginPage() {
  // =============================================
  // 📦 STATE - Lưu trữ dữ liệu động
  // =============================================
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // =============================================
  // 🎯 FUNCTIONS - Các hàm xử lý
  // =============================================
  const handleLogin = () => {
    // ...
  }
  
  // =============================================
  // 🎨 RENDER - Hiển thị giao diện
  // =============================================
  return (
    <div>...</div>
  )
}
```

#### 5. **Giải thích Props và TypeScript**
```tsx
// ❌ KHÔNG TỐT
interface ButtonProps {
  text: string
  onClick: () => void
}

// ✅ TỐT
/**
 * Props của component Button
 * @param text - Chữ hiển thị trên nút
 * @param onClick - Hàm được gọi khi user click nút
 * @param variant - Kiểu button: 'primary' | 'secondary' | 'outline'
 * @param disabled - true = nút bị vô hiệu hóa (không click được)
 */
interface ButtonProps {
  text: string           // Chữ hiển thị
  onClick: () => void    // Hàm xử lý click
  variant?: 'primary' | 'secondary' | 'outline'  // ? = optional
  disabled?: boolean     // Mặc định = false
}
```

#### 6. **Giải thích cú pháp đặc biệt**
```tsx
// ✅ Giải thích destructuring
const { name, age } = user
//      ^     ^      ^
//      |     |      Object gốc
//      |     Lấy thuộc tính age
//      Lấy thuộc tính name
// Tương đương: const name = user.name; const age = user.age

// ✅ Giải thích optional chaining
const city = user?.address?.city
//                ^         ^
//                |         Nếu address tồn tại, lấy city
//                Nếu user tồn tại, lấy address
// Tránh lỗi: Cannot read property 'address' of undefined

// ✅ Giải thích ternary
const status = age >= 18 ? 'Adult' : 'Child'
//             ^          ^          ^
//             |          |          Nếu false
//             |          Nếu true
//             Điều kiện
```

#### 7. **Comment inline cho JSX phức tạp**
```tsx
return (
  <div className="flex items-center justify-between">
    {/* Phần bên trái: Logo và menu */}
    <div className="flex items-center gap-4">
      <Logo />
      <Navigation />
    </div>
    
    {/* Phần bên phải: User info và logout */}
    <div className="flex items-center gap-2">
      {/* Chỉ hiện khi đã login */}
      {isLoggedIn && (
        <>
          <Avatar user={user} />
          <Button onClick={handleLogout}>Đăng xuất</Button>
        </>
      )}
    </div>
  </div>
)
```

#### 8. **Ghi chú TODO và FIXME**
```tsx
// TODO: Thêm validation email
// TODO: Xử lý lỗi khi API fail
// FIXME: Loading state chưa hoạt động đúng
// NOTE: Cần refactor hàm này sau khi học useCallback
```

---

## 📚 TEMPLATE MẪU

### Template Component đầy đủ:
```tsx
// ============================================
// 📝 TÊN COMPONENT - MÔ TẢ NGẮN GỌN
// ============================================

// IMPORT - Lấy các thứ cần dùng
import { useState } from 'react'
import { Button } from '@/components/ui/button'

// ============================================
// 📦 TYPES/INTERFACES - Định nghĩa kiểu dữ liệu
// ============================================

/**
 * Props của component MyComponent
 */
interface MyComponentProps {
  title: string        // Tiêu đề hiển thị
  onSubmit: () => void // Hàm gọi khi submit
}

// ============================================
// 🎯 COMPONENT CHÍNH
// ============================================

/**
 * Component MyComponent
 * Mô tả: Component này làm gì, dùng ở đâu
 * @param title - Tiêu đề
 * @param onSubmit - Callback khi submit
 */
export default function MyComponent({ title, onSubmit }: MyComponentProps) {
  
  // =============================================
  // 📦 STATE - Lưu trữ dữ liệu động
  // =============================================
  
  // State lưu email user nhập
  const [email, setEmail] = useState('')
  
  // State loading (đang xử lý hay không)
  const [loading, setLoading] = useState(false)
  
  // =============================================
  // 🎯 FUNCTIONS - Các hàm xử lý
  // =============================================
  
  /**
   * Hàm xử lý khi user click submit
   */
  const handleSubmit = () => {
    // Bước 1: Validate
    if (!email) {
      alert('Vui lòng nhập email')
      return
    }
    
    // Bước 2: Gọi callback từ parent
    onSubmit()
  }
  
  // =============================================
  // 🎨 RENDER - Hiển thị giao diện
  // =============================================
  
  return (
    <div className="p-4">
      {/* Header */}
      <h1 className="text-2xl font-bold">{title}</h1>
      
      {/* Input email */}
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhập email..."
      />
      
      {/* Submit button */}
      <Button 
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Đang xử lý...' : 'Submit'}
      </Button>
    </div>
  )
}

// ============================================
// 📝 GHI CHÚ HỌC TẬP
// ============================================

/**
 * KIẾN THỨC ĐÃ HỌC TRONG FILE NÀY:
 * 
 * 1. Props - Truyền dữ liệu từ parent xuống child
 * 2. State - Lưu dữ liệu động với useState
 * 3. Event handling - onClick, onChange
 * 4. Conditional rendering - {loading ? ... : ...}
 * 
 * BÀI TẬP:
 * 
 * 1. Thêm validation: email phải có @
 * 2. Thêm state lưu error message
 * 3. Hiển thị error màu đỏ dưới input
 */
```

---

## 🎨 STYLE GUIDE

### Đặt tên:
```tsx
// ✅ Component: PascalCase
function LoginForm() {}
function UserProfile() {}

// ✅ Function: camelCase
const handleClick = () => {}
const validateEmail = () => {}

// ✅ State: camelCase, mô tả rõ ràng
const [isLoading, setIsLoading] = useState(false)  // Boolean → is/has/should
const [userList, setUserList] = useState([])       // Array → ...List
const [userData, setUserData] = useState(null)     // Object → ...Data

// ✅ Constant: UPPER_CASE
const MAX_LENGTH = 100
const API_BASE_URL = 'http://...'
```

### Thứ tự trong component:
```tsx
function MyComponent() {
  // 1. State
  const [state, setState] = useState()
  
  // 2. Refs (nếu có)
  const inputRef = useRef(null)
  
  // 3. useEffect (nếu có)
  useEffect(() => {}, [])
  
  // 4. Functions
  const handleClick = () => {}
  
  // 5. Return JSX
  return <div>...</div>
}
```

---

## 💡 KHI NÀO COMMENT, KHI NÀO KHÔNG?

### ✅ NÊN COMMENT:
- Logic phức tạp (regex, algorithm)
- Code không rõ ràng ngay từ cái nhìn đầu
- Tại sao làm theo cách này (business logic)
- Workaround, hack, trick đặc biệt
- TODO, FIXME, NOTE

### ❌ KHÔNG CẦN COMMENT:
```tsx
// ❌ Comment thừa - code đã tự giải thích
// Set name to 'John'
const name = 'John'

// ✅ Tốt hơn - đặt tên biến rõ ràng, không cần comment
const userName = 'John'
```

---

## 🎯 MỤC TIÊU

Comment tốt giúp:
- ✅ Người mới đọc code hiểu ngay
- ✅ Bản thân sau 3 tháng vẫn nhớ
- ✅ Học được kiến thức mới khi đọc
- ✅ Debug nhanh hơn
- ✅ Team work hiệu quả

---

## 📚 VÍ DỤ THỰC TẾ

Xem các file sau để thấy comment chi tiết:
- ✅ `src/App-WithLogic.tsx` - Comment CỰC KỲ chi tiết
- ✅ `src/App-Examples.tsx` - Comment từng bài học
- ✅ `src/App-Comparison.tsx` - So sánh có giải thích

---

**Từ giờ, mọi code tôi viết sẽ có comment chi tiết như vậy! 🎯**
