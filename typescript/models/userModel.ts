import mongoose, {Schema} from "mongoose"

export interface UserInterface {
    name:string;
    email:string;
    password:string;
}

const UserSchema = new Schema<UserInterface>({});

const UserModel = mongoose.model<UserInterface>("User", UserSchema);

export default UserModel;
