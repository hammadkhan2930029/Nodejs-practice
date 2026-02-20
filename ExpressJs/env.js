// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);
import { z, ZodError } from "zod";

// const schema = z.number().min(18).max(100).int();
// const userAge = 18;
// const { data, error, success } = schema.safeParse(userAge);
// console.log('Data :',data);
// console.log("Error :",error);
// console.log("Success :",success);

// try {
//   const pareUserAge = schema.parse(userAge);
//   console.log(pareUserAge);
// } catch (error) {
//   if (error instanceof ZodError) {
//     console.log(error.issues[0].message);
//   } else {
//     console.log(error);
//   }
// }

// const po = process.env.PORT;
const portSchema = z.coerce.number().min(1).max(65535).default(3000);

export const PORT = portSchema.parse(process.env.PORT);

// console.log("Data :", data);
// console.log("Error :", error);
// console.log("success :", success);
