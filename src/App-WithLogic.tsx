// ============================================
// 📚 PHIÊN BẢN CÓ LOGIC THỰC TẾ - HỌC REACT
// ============================================

// IMPORT - Lấy các thứ cần dùng
import { useState } from 'react' // ← Hook để tạo state
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

// COMPONENT CHÍNH
function App() {
  // =============================================
  // 📦 STATE - Lưu trữ dữ liệu động
  // =============================================
  
  // State lưu email user nhập
  const [email, setEmail] = useState('')
  //      ^       ^            ^
  //      |       |            Giá trị ban đầu (rỗng)
  //      |       Hàm để thay đổi email
  //      Biến chứa email hiện tại
  
  // State lưu password user nhập
  const [password, setPassword] = useState('')
  
  // State lưu lỗi (nếu có)
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })
  
  // State loading (đang xử lý)
  const [isLoading, setIsLoading] = useState(false)
  
  // State remember me (checkbox)
  const [rememberMe, setRememberMe] = useState(false)

  // =============================================
  // 🎯 FUNCTIONS - Các hàm xử lý
  // =============================================
  
  /**
   * Hàm kiểm tra email hợp lệ
   * @param email - Email cần kiểm tra
   * @returns true nếu hợp lệ, false nếu không
   */
  const validateEmail = (email: string): boolean => {
    // Regex pattern kiểm tra email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  /**
   * Hàm xử lý khi user gõ vào ô Email
   * @param e - Event từ input
   */
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value // Lấy giá trị user vừa gõ
    setEmail(value) // Cập nhật state
    
    // Xóa lỗi nếu user đang sửa
    if (errors.email) {
      setErrors({ ...errors, email: '' })
    }
  }

  /**
   * Hàm xử lý khi user gõ vào ô Password
   */
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    
    if (errors.password) {
      setErrors({ ...errors, password: '' })
    }
  }

  /**
   * Hàm kiểm tra form có hợp lệ không
   * @returns true nếu OK, false nếu có lỗi
   */
  const validateForm = (): boolean => {
    const newErrors = {
      email: '',
      password: ''
    }
    
    // Kiểm tra email
    if (!email) {
      newErrors.email = 'Vui lòng nhập email'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email không hợp lệ'
    }
    
    // Kiểm tra password
    if (!password) {
      newErrors.password = 'Vui lòng nhập mật khẩu'
    } else if (password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
    }
    
    setErrors(newErrors)
    
    // Return true nếu không có lỗi
    return !newErrors.email && !newErrors.password
  }

  /**
   * Hàm xử lý khi user click nút Đăng nhập
   */
  const handleLogin = async () => {
    // Bước 1: Validate form
    if (!validateForm()) {
      console.log('❌ Form không hợp lệ')
      return // Dừng lại, không submit
    }
    
    // Bước 2: Bật loading
    setIsLoading(true)
    
    console.log('🚀 Đang đăng nhập...', {
      email,
      password,
      rememberMe
    })
    
    // Bước 3: Giả lập gọi API (2 giây)
    // SAU NÀY thay bằng gọi API thật:
    // const response = await axios.post('/api/v1/auth/login', { email, password })
    
    setTimeout(() => {
      // Giả lập đăng nhập thành công
      console.log('✅ Đăng nhập thành công!')
      alert(`Chào mừng ${email}!`)
      
      // Tắt loading
      setIsLoading(false)
      
      // SAU NÀY: Lưu token, redirect...
      // localStorage.setItem('token', response.data.accessToken)
      // navigate('/dashboard')
      
    }, 2000) // 2000ms = 2 giây
  }

  /**
   * Hàm xử lý OAuth (Google, GitHub, Facebook)
   */
  const handleOAuthLogin = (provider: string) => {
    console.log(`🔐 Đăng nhập với ${provider}`)
    alert(`Tính năng đăng nhập ${provider} sẽ được phát triển sau!`)
    
    // SAU NÀY: Redirect đến OAuth URL
    // window.location.href = `http://localhost:8080/oauth2/authorize/${provider}`
  }

  // =============================================
  // 🎨 RENDER - Hiển thị giao diện
  // =============================================
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-md shadow-xl">
        
        {/* HEADER - Tiêu đề */}
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Đăng nhập</CardTitle>
            <Badge variant="secondary">Có Logic</Badge>
          </div>
          <CardDescription>
            Nhập thông tin để đăng nhập vào hệ thống E-Commerce
          </CardDescription>
        </CardHeader>
        
        {/* CONTENT - Form */}
        <CardContent className="space-y-4">
          
          {/* Input Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email hoặc Tên đăng nhập</Label>
            <Input 
              id="email" 
              type="text" 
              placeholder="example@email.com"
              value={email} // ← Liên kết với state
              onChange={handleEmailChange} // ← Khi user gõ, gọi hàm này
              className={`w-full ${errors.email ? 'border-red-500' : ''}`}
              // ↑ Nếu có lỗi, thêm border đỏ
            />
            {/* Hiển thị lỗi email (nếu có) */}
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          
          {/* Input Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={handlePasswordChange}
              className={`w-full ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          
          {/* Checkbox + Link */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="rounded"
                checked={rememberMe} // ← Liên kết với state
                onChange={(e) => setRememberMe(e.target.checked)} // ← Cập nhật state
              />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <a href="#" className="text-primary hover:underline">
              Quên mật khẩu?
            </a>
          </div>
          
        </CardContent>
        
        {/* FOOTER - Buttons */}
        <CardFooter className="flex flex-col gap-3">
          
          {/* Button Đăng nhập */}
          <Button 
            className="w-full" 
            size="lg"
            onClick={handleLogin} // ← Khi click, gọi hàm handleLogin
            disabled={isLoading} // ← Disable khi đang loading
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng nhập'}
            {/* ↑ Hiển thị text khác nhau tùy trạng thái */}
          </Button>
          
          {/* Divider */}
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Hoặc đăng nhập với
              </span>
            </div>
          </div>
          
          {/* OAuth Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleOAuthLogin('Google')}
            >
              Google
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleOAuthLogin('GitHub')}
            >
              GitHub
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => handleOAuthLogin('Facebook')}
            >
              Facebook
            </Button>
          </div>
          
          {/* Link đăng ký */}
          <p className="text-center text-sm text-muted-foreground">
            Chưa có tài khoản?{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Đăng ký ngay
            </a>
          </p>
          
        </CardFooter>
      </Card>
      
      {/* DEBUG INFO - Hiển thị state (CHỈ ĐỂ HỌC) */}
      <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs max-w-xs">
        <h3 className="font-bold mb-2">🐛 Debug Info (Chỉ để học)</h3>
        <div className="space-y-1">
          <p><strong>Email:</strong> {email || '(chưa nhập)'}</p>
          <p><strong>Password:</strong> {password ? '•'.repeat(password.length) : '(chưa nhập)'}</p>
          <p><strong>Remember:</strong> {rememberMe ? 'Yes' : 'No'}</p>
          <p><strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}</p>
          {errors.email && <p className="text-red-400">❌ {errors.email}</p>}
          {errors.password && <p className="text-red-400">❌ {errors.password}</p>}
        </div>
      </div>
    </div>
  )
}

// EXPORT - Chia sẻ component ra ngoài
export default App

// =============================================
// 📝 GHI CHÚ HỌC TẬP
// =============================================

/**
 * NHỮNG ĐIỀU ĐÃ HỌC:
 * 
 * 1. useState - Tạo state để lưu dữ liệu động
 *    const [data, setData] = useState(initialValue)
 * 
 * 2. Event Handler - Xử lý sự kiện
 *    onChange, onClick, onSubmit...
 * 
 * 3. Conditional Rendering - Hiển thị có điều kiện
 *    {condition && <Component />}
 *    {condition ? <A /> : <B />}
 * 
 * 4. Props - Truyền dữ liệu vào component
 *    <Input value={email} onChange={handleChange} />
 * 
 * 5. TypeScript - Kiểu dữ liệu
 *    string, number, boolean, React.ChangeEvent
 * 
 * BÀI TẬP THỰC HÀNH:
 * 
 * 1. Thêm input "Confirm Password"
 * 2. Validate: password và confirmPassword phải giống nhau
 * 3. Thêm nút "Hiện/Ẩn mật khẩu"
 * 4. Thay đổi màu theme
 * 5. Thêm animation khi loading
 */
