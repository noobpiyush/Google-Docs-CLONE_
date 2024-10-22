
import mongoose from "mongoose";
export default async function Connection(){

    try {
      await  mongoose.connect(process.env.DB_URL);

      console.log("connected");
    } catch (error) {
        console.log("error while connectong " + error);
    }
}
