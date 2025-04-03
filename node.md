#next/link
You're importing a component that needs usePathname. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.

- const { pathname } = usePathname();
- sẽ lỗi vì nó chỉ chạy ở client conponent
  -> Tức là chỉ chạy ở môi trường client chứ ko chạy ở môi trường server
  -- Vì khi sử dụng mặc định của next thì nó là server component
  fix: thêm "use client"; trên top component

Tại sao lại dùng file .d.ts để lưu khai báo:
-- Khi chạy trên môi trường production thì nó sẽ covert qua js nhưng cái type convert qua thì ko có tác dụng gì cả nó chỉ khai báo để chạy trên môi trường development, Khi buil nó sẽ biên dịch qua js rồi
==> vì vậy khi dùng .d.ts chỉ dùng với mục đích là để share thôi share để chia sẻ các type để sử dụng trong môi trường development thôi,

server side chỉ chạy trong terminal ko chạy ngoài trình duyệt.

MongoDB:
mXzBXbwakMH7Z1DJ

mongodb+srv://nguyenvanlien130102:mXzBXbwakMH7Z1DJ@cluster0.ye4guip.mongodb.net/
