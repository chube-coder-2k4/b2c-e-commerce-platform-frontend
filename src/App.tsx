import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Đăng nhập</CardTitle>
            <Badge variant="secondary">Demo</Badge>
          </div>
          <CardDescription>
            Nhập thông tin để đăng nhập vào hệ thống E-Commerce
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email hoặc Tên đăng nhập</Label>
            <Input 
              id="email" 
              type="text" 
              placeholder="example@email.com"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••"
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <a href="#" className="text-primary hover:underline">
              Quên mật khẩu?
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full" size="lg">
            Đăng nhập
          </Button>
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
          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" className="w-full">
              Google
            </Button>
            <Button variant="outline" className="w-full">
              GitHub
            </Button>
            <Button variant="outline" className="w-full">
              Facebook
            </Button>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Chưa có tài khoản?{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Đăng ký ngay
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
