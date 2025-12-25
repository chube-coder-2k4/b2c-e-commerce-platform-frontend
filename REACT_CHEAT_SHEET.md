# ⚡ REACT CHEAT SHEET - NGƯỜI MỚI

## 📦 Component Cơ Bản

```tsx
// Component đơn giản nhất
function Hello() {
  return <h1>Xin chào</h1>
}

// Component với biến
function Greeting() {
  const name = "Nguyễn Văn A"
  return <h1>Xin chào {name}</h1>
}

// Export component
export default Hello
```

---

## 🔄 useState - Quản lý State

```tsx
import { useState } from 'react'

function Counter() {
  // Khai báo state
  const [count, setCount] = useState(0)
  //      ↑       ↑              ↑
  //   Biến   Hàm set    Giá trị ban đầu
  
  // Đọc state
  console.log(count) // 0
  
  // Thay đổi state
  setCount(5)           // Set cứng = 5
  setCount(count + 1)   // Tăng thêm 1
  setCount(prev => prev + 1) // Tăng (cách an toàn)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  )
}
```

**State với Object:**
```tsx
const [user, setUser] = useState({
  name: '',
  age: 0
})

// Cập nhật 1 field
setUser({ ...user, name: 'John' })

// Cập nhật nhiều field
setUser({ ...user, name: 'John', age: 25 })
```

---

## 🎯 Event Handling

```tsx
// onClick - Click chuột
<button onClick={() => console.log('Clicked!')}>
  Click me
</button>

// onChange - Input thay đổi
<input onChange={(e) => console.log(e.target.value)} />

// onSubmit - Submit form
<form onSubmit={(e) => {
  e.preventDefault() // Ngăn reload trang
  console.log('Submitted')
}}>
  <button type="submit">Submit</button>
</form>

// Gọi function khi click
const handleClick = () => {
  console.log('Clicked')
}
<button onClick={handleClick}>Click</button>
```

---

## 📝 Input - 2-way Binding

```tsx
function NameInput() {
  const [name, setName] = useState('')
  
  return (
    <input 
      value={name}                        // Hiển thị giá trị state
      onChange={(e) => setName(e.target.value)}  // Cập nhật state
      placeholder="Nhập tên..."
    />
  )
}
```

**Với nhiều input:**
```tsx
const [form, setForm] = useState({
  email: '',
  password: ''
})

const handleChange = (field, value) => {
  setForm({ ...form, [field]: value })
}

<input 
  value={form.email}
  onChange={(e) => handleChange('email', e.target.value)}
/>
<input 
  value={form.password}
  onChange={(e) => handleChange('password', e.target.value)}
/>
```

---

## ✅ Conditional Rendering

```tsx
// If-else đơn giản
{isLoggedIn ? <Profile /> : <Login />}

// Chỉ render khi true
{isVisible && <div>Nội dung</div>}

// Nhiều điều kiện
{status === 'loading' && <Loading />}
{status === 'error' && <Error />}
{status === 'success' && <Data />}
```

---

## 📋 List Rendering - map()

```tsx
// Array đơn giản
const fruits = ['Táo', 'Cam', 'Chuối']

<ul>
  {fruits.map((fruit, index) => (
    <li key={index}>{fruit}</li>
  ))}
</ul>

// Array of objects
const products = [
  { id: 1, name: 'iPhone', price: 20000000 },
  { id: 2, name: 'Samsung', price: 18000000 },
]

<div>
  {products.map((product) => (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.price} đ</p>
    </div>
  ))}
</div>
```

**⚠️ LƯU Ý:** Luôn thêm `key` prop khi map!

---

## 🎨 CSS Classes với Tailwind

```tsx
// Basic
<div className="text-center">Căn giữa</div>

// Nhiều class
<div className="text-xl font-bold text-blue-500">
  Chữ to, đậm, màu xanh
</div>

// Conditional class
<div className={`text-lg ${isActive ? 'text-green-500' : 'text-gray-500'}`}>
  Đổi màu theo điều kiện
</div>

// Template literal
<div className={`
  px-4 py-2 
  rounded-lg 
  ${variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'}
`}>
  Button
</div>
```

---

## 🔧 Props - Truyền dữ liệu

```tsx
// Parent component
function App() {
  return <Greeting name="John" age={25} />
}

// Child component
function Greeting({ name, age }) {
  return <h1>Xin chào {name}, {age} tuổi</h1>
}

// Với TypeScript
interface GreetingProps {
  name: string
  age: number
}

function Greeting({ name, age }: GreetingProps) {
  return <h1>Xin chào {name}, {age} tuổi</h1>
}
```

**Props children:**
```tsx
function Card({ children }) {
  return (
    <div className="border p-4 rounded">
      {children}
    </div>
  )
}

// Sử dụng
<Card>
  <h1>Tiêu đề</h1>
  <p>Nội dung</p>
</Card>
```

---

## 🎯 Form Validation

```tsx
function LoginForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  
  const validate = () => {
    if (!email) {
      setError('Email không được để trống')
      return false
    }
    if (!email.includes('@')) {
      setError('Email không hợp lệ')
      return false
    }
    setError('')
    return true
  }
  
  const handleSubmit = () => {
    if (validate()) {
      console.log('OK', email)
    }
  }
  
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
```

---

## ⏳ Loading State

```tsx
function LoginButton() {
  const [loading, setLoading] = useState(false)
  
  const handleLogin = async () => {
    setLoading(true)
    
    // Giả lập API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setLoading(false)
  }
  
  return (
    <button 
      onClick={handleLogin}
      disabled={loading}
    >
      {loading ? 'Đang xử lý...' : 'Đăng nhập'}
    </button>
  )
}
```

---

## 🌐 Fetch API

```tsx
// Với useState
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

const fetchData = async () => {
  setLoading(true)
  try {
    const response = await fetch('https://api.example.com/data')
    const json = await response.json()
    setData(json)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}

// Với Axios
import axios from 'axios'

const fetchData = async () => {
  setLoading(true)
  try {
    const response = await axios.get('https://api.example.com/data')
    setData(response.data)
  } catch (err) {
    setError(err.message)
  } finally {
    setLoading(false)
  }
}
```

---

## 🔍 Các Hook phổ biến

```tsx
// useState - State
const [count, setCount] = useState(0)

// useEffect - Side effects (gọi API, timer, etc.)
import { useEffect } from 'react'

useEffect(() => {
  console.log('Component mounted')
  fetchData()
}, []) // [] = chỉ chạy 1 lần khi mount

// useRef - Reference to DOM element
import { useRef } from 'react'

const inputRef = useRef(null)
inputRef.current.focus() // Focus vào input

<input ref={inputRef} />

// useContext - Global state
import { useContext } from 'react'

const user = useContext(UserContext)
```

---

## 💡 Tips & Tricks

### Console.log để debug
```tsx
const handleClick = () => {
  console.log('State:', { email, password })
  console.log('Props:', props)
}
```

### Destructuring
```tsx
// Thay vì
const name = props.name
const age = props.age

// Dùng
const { name, age } = props

// Hoặc ngay trong params
function Greeting({ name, age }) {
  return <h1>{name} - {age}</h1>
}
```

### Optional chaining
```tsx
// Thay vì
const city = user && user.address && user.address.city

// Dùng
const city = user?.address?.city
```

### Nullish coalescing
```tsx
// Giá trị mặc định
const name = user.name ?? 'Anonymous'
const count = items.length ?? 0
```

---

## 🚨 Lỗi thường gặp

### 1. "Cannot read property of undefined"
```tsx
// ❌ Sai
<p>{user.name}</p>  // Lỗi nếu user = null

// ✅ Đúng
<p>{user?.name}</p>
{user && <p>{user.name}</p>}
```

### 2. "Too many re-renders"
```tsx
// ❌ Sai - onClick gọi hàm ngay lập tức
<button onClick={handleClick()}>Click</button>

// ✅ Đúng - onClick nhận function
<button onClick={handleClick}>Click</button>
<button onClick={() => handleClick()}>Click</button>
```

### 3. "Each child should have a unique key"
```tsx
// ❌ Sai
{items.map(item => <div>{item}</div>)}

// ✅ Đúng
{items.map((item, index) => <div key={index}>{item}</div>)}
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

### 4. State không update ngay
```tsx
// ❌ Sai - count vẫn là giá trị cũ
setCount(5)
console.log(count) // Vẫn là giá trị cũ!

// ✅ Đúng - Dùng callback
setCount(5)
// Đợi render xong mới log
```

---

## 📚 Tài liệu tham khảo

- **React Docs**: https://react.dev/learn
- **TypeScript**: https://www.typescriptlang.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Shadcn/UI**: https://ui.shadcn.com/

---

**In và dán lên tường! 📌**
