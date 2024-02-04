
import mongoose from "mongoose";
export default async function Connection(){

    try {
      await  mongoose.connect("mongodb+srv://piyush:piyush@cluster0.xzrcgxi.mongodb.net/google-docs-clone", {useUnifiedTopology:true,useNewUrlParser:true});

      console.log("connected");
    } catch (error) {
        console.log("error while connectong " + error);
    }
}

