import { neon } from "@neondatabase/serverless";
 import { drizzle } from "drizzle-orm/neon-http";
 import * as schema from "./schema";
 const sql = neon(
   "postgresql://neondb_owner:npg_LZj3mE2rUoYI@ep-quiet-base-a5ozhcw1-pooler.us-east-2.aws.neon.tech/beat_cancer?sslmode=require"
 );
 export const db = drizzle(sql, { schema });
