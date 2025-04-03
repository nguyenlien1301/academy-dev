// Ở đây chứa những action liên quan đến model.
"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { TCreateUserParam } from "@/types";

// param: IUser để validate từ bên ngoài giả sử truyền vào một trường khác nó sẽ báo lỗi.
// ở đây nên tạo 1 param riêng cho nó, vì nếu để như vậy thì bắt buộc phải truyền vào đầy đủ trường nếu ko nó sẽ báo lỗi. ( tạo trong file index.d.ts)
export default async function createUser(params: TCreateUserParam) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    // Ở đay dùng phương thức create để cho phép tạo ra 1 collection ở trong data
    return newUser;
  } catch (error) {
    console.error(error);
  }
}
