// ============================================
// 📊 SO SÁNH: HTML THUẦN vs REACT
// ============================================

/**
 * ============================================
 * VÍ DỤ 1: HIỂN THỊ TEXT
 * ============================================
 */

// ❌ HTML THUẦN
/*
<h1>Xin chào</h1>
*/

// ✅ REACT
function Hello() {
  return <h1>Xin chào</h1>
}

/**
 * ============================================
 * VÍ DỤ 2: HIỂN THỊ BIẾN
 * ============================================
 */

// ❌ HTML + JAVASCRIPT (DOM)
/*
<div id="greeting"></div>

<script>
  const name = "Nguyễn Văn A"
  document.getElementById('greeting').innerHTML = `Xin chào ${name}`
</script>
*/

// ✅ REACT
function Greeting() {
  const name = "Nguyễn Văn A"
  return <div>Xin chào {name}</div>
}

/**
 * ============================================
 * VÍ DỤ 3: BUTTON CLICK (QUAN TRỌNG!)
 * ============================================
 */

// ❌ HTML + JAVASCRIPT
/*
<button id="myBtn">Click: 0</button>

<script>
  let count = 0
  const btn = document.getElementById('myBtn')
  
  btn.addEventListener('click', function() {
    count++
    btn.innerHTML = `Click: ${count}`
  })
</script>
*/

// ✅ REACT với useState
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Click: {count}
    </button>
  )
}

/**
 * GIẢI THÍCH:
 * - HTML: Phải dùng getElementById, addEventListener, innerHTML
 * - React: Chỉ cần useState và onClick, React tự động update UI
 */

/**
 * ============================================
 * VÍ DỤ 4: INPUT FORM
 * ============================================
 */

// ❌ HTML + JAVASCRIPT
/*
<input type="text" id="nameInput" />
<p id="display">Tên: </p>

<script>
  const input = document.getElementById('nameInput')
  const display = document.getElementById('display')
  
  input.addEventListener('input', function() {
    display.innerHTML = `Tên: ${input.value}`
  })
</script>
*/

// ✅ REACT
function NameInput() {
  const [name, setName] = useState('')
  
  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Tên: {name}</p>
    </div>
  )
}

/**
 * ============================================
 * VÍ DỤ 5: HIỂN THỊ DANH SÁCH
 * ============================================
 */

// ❌ HTML + JAVASCRIPT
/*
<ul id="productList"></ul>

<script>
  const products = ['iPhone', 'Samsung', 'Xiaomi']
  const list = document.getElementById('productList')
  
  let html = ''
  for (let i = 0; i < products.length; i++) {
    html += `<li>${products[i]}</li>`
  }
  list.innerHTML = html
</script>
*/

// ✅ REACT
function ProductList() {
  const products = ['iPhone', 'Samsung', 'Xiaomi']
  
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  )
}

/**
 * ============================================
 * VÍ DỤ 6: HIỆN/ẨN NỘI DUNG
 * ============================================
 */

// ❌ HTML + JAVASCRIPT
/*
<button id="toggleBtn">Hiện</button>
<div id="content" style="display: none;">Nội dung</div>

<script>
  const btn = document.getElementById('toggleBtn')
  const content = document.getElementById('content')
  let visible = false
  
  btn.addEventListener('click', function() {
    visible = !visible
    content.style.display = visible ? 'block' : 'none'
    btn.innerHTML = visible ? 'Ẩn' : 'Hiện'
  })
</script>
*/

// ✅ REACT
function Toggle() {
  const [visible, setVisible] = useState(false)
  
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ẩn' : 'Hiện'}
      </button>
      {visible && <div>Nội dung</div>}
    </div>
  )
}

/**
 * ============================================
 * VÍ DỤ 7: FORM VALIDATION
 * ============================================
 */

// ❌ HTML + JAVASCRIPT
/*
<form id="loginForm">
  <input type="email" id="email" />
  <span id="emailError" style="color: red;"></span>
  <button type="submit">Login</button>
</form>

<script>
  const form = document.getElementById('loginForm')
  const email = document.getElementById('email')
  const error = document.getElementById('emailError')
  
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    if (!email.value.includes('@')) {
      error.innerHTML = 'Email không hợp lệ'
    } else {
      error.innerHTML = ''
      alert('OK')
    }
  })
</script>
*/

// ✅ REACT
function LoginForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  
  const handleSubmit = () => {
    if (!email.includes('@')) {
      setError('Email không hợp lệ')
    } else {
      setError('')
      alert('OK')
    }
  }
  
  return (
    <div>
      <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

/**
 * ============================================
 * TẠI SAO REACT TỐT HƠN?
 * ============================================
 * 
 * 1. ✅ Không cần getElementById, querySelector
 * 2. ✅ Không cần addEventListener thủ công
 * 3. ✅ Không cần innerHTML (dễ bị XSS attack)
 * 4. ✅ UI tự động update khi state thay đổi
 * 5. ✅ Code ngắn gọn, dễ đọc, dễ maintain
 * 6. ✅ Component có thể tái sử dụng
 * 7. ✅ TypeScript support tốt
 * 8. ✅ Ecosystem lớn (thư viện, tools)
 */

/**
 * ============================================
 * THUẬT NGỮ QUAN TRỌNG
 * ============================================
 * 
 * JSX: JavaScript XML - viết HTML trong JS
 * Component: Khối UI có thể tái sử dụng
 * State: Dữ liệu động, khi thay đổi → re-render
 * Props: Tham số truyền vào component
 * Hook: Hàm đặc biệt (useState, useEffect...)
 * Event: Sự kiện (onClick, onChange, onSubmit...)
 * Render: Hiển thị component ra màn hình
 * Re-render: Render lại khi state/props thay đổi
 */

/**
 * ============================================
 * CÚ PHÁP JAVASCRIPT DÙNG TRONG REACT
 * ============================================
 */

// 1. ARROW FUNCTION
const sum = (a, b) => a + b
// Tương đương:
function sum(a, b) {
  return a + b
}

// 2. DESTRUCTURING
const { name, age } = user
// Tương đương:
const name = user.name
const age = user.age

// 3. SPREAD OPERATOR
const newUser = { ...user, age: 25 }
// Tương đương:
const newUser = Object.assign({}, user, { age: 25 })

// 4. TEMPLATE LITERAL
const greeting = `Xin chào ${name}`
// Tương đương:
const greeting = "Xin chào " + name

// 5. TERNARY OPERATOR
const status = age >= 18 ? 'Người lớn' : 'Trẻ em'
// Tương đương:
let status
if (age >= 18) {
  status = 'Người lớn'
} else {
  status = 'Trẻ em'
}

// 6. MAP (quan trọng!)
const numbers = [1, 2, 3]
const doubled = numbers.map(n => n * 2) // [2, 4, 6]
// Tương đương:
const doubled = []
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2)
}

// 7. FILTER
const evens = numbers.filter(n => n % 2 === 0)
// Lọc số chẵn

// 8. OPTIONAL CHAINING
const city = user?.address?.city
// Tương đương:
const city = user && user.address && user.address.city

/**
 * ============================================
 * TYPESCRIPT CƠ BẢN
 * ============================================
 */

// Khai báo kiểu dữ liệu
let name: string = "John"
let age: number = 25
let isActive: boolean = true

// Array
let numbers: number[] = [1, 2, 3]
let names: string[] = ["A", "B", "C"]

// Object (Interface)
interface User {
  name: string
  age: number
  email?: string  // ? = optional
}

const user: User = {
  name: "John",
  age: 25
}

// Function
const greet = (name: string): string => {
  return `Hello ${name}`
}

// React Component với TypeScript
interface ButtonProps {
  text: string
  onClick: () => void
}

const MyButton = ({ text, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{text}</button>
}

/**
 * ============================================
 * LỘ TRÌNH HỌC REACT
 * ============================================
 * 
 * TUẦN 1: JavaScript cơ bản
 * - Arrow function, destructuring, spread
 * - Array methods: map, filter, reduce
 * - Async/await, Promise
 * 
 * TUẦN 2: React cơ bản
 * - Component, JSX
 * - Props, State (useState)
 * - Event handling
 * 
 * TUẦN 3: React nâng cao
 * - useEffect (side effects)
 * - useContext (global state)
 * - Custom hooks
 * 
 * TUẦN 4: Thư viện & Tools
 * - React Router (routing)
 * - React Query (data fetching)
 * - Zustand/Redux (state management)
 * 
 * TUẦN 5-6: Dự án thực tế
 * - Kết nối API
 * - Authentication
 * - CRUD operations
 */

export default function Comparison() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        📊 So sánh HTML thuần vs React
      </h1>
      <p className="text-gray-600 mb-6">
        Xem code trong file này để hiểu rõ sự khác biệt!
      </p>
      
      {/* Demo các component */}
      <div className="space-y-6">
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Counter Demo:</h3>
          <Counter />
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Name Input Demo:</h3>
          <NameInput />
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Product List Demo:</h3>
          <ProductList />
        </div>
        
        <div className="border p-4 rounded">
          <h3 className="font-bold mb-2">Toggle Demo:</h3>
          <Toggle />
        </div>
      </div>
    </div>
  )
}
