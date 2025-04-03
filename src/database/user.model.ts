import { EUserRole, EUserStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

// Trên này chỉ là khai báo dữ liệu để sử dụng cho đúng thôi.
export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email_address: string;
  avatar: string;
  course: Schema.Types.ObjectId[];
  status: EUserStatus;
  role: EUserRole;
  createAt: Date;
}
// Đây mới là tạo cấu trúc Schanme để cho monggo nó hiểu cấu trúc sẽ như thế nào.
const useSchema = new Schema<IUser>({
  clerkId: {
    type: String,
  },
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email_address: {
    type: String,
    unique: true,
    required: true,
  },
  avatar: {
    type: String,
  },
  course: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course", // ref này là liên kết đến bảng khác.
    },
  ],
  status: {
    type: String,
    enum: Object.values(EUserStatus),
    default: EUserStatus.ACTIVE,
  },
  role: {
    type: String,
    enum: Object.values(EUserRole),
    default: EUserRole.USER,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models.user || model("User", useSchema);
export default User;

// models này là 1 đối tượng trong monggo nó sẽ chứa hết tất cả model đax đc đăng ký trước đó
// ở đây thì hiểu nếu trong models đăng kí trước đó đã có user rồi thì mình sẽ dùng, trong trường hợp này mới khai báo có nghĩa là nó ko có thì chỗ này có thể là undf
// Thì nó sẽ chạy vào model("User", useSchema);
// + Thứ nhất nó sẽ truyền vào tên mod là User
// + thứ 2 nó sẽ trueyèn vào Schema mà mình mới khai báo.
