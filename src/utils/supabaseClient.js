import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient('https://tnymzpctziprndvppkts.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDI2Njc5NywiZXhwIjoxOTQ5ODQyNzk3fQ.9MJ7t9r-D_h_FkXzZJ-4jiwaAw4URSdYJvccfX9Mljk')