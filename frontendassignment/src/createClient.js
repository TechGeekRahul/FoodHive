import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://auckfigpiytfrwfrwsyx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1Y2tmaWdwaXl0ZnJ3ZnJ3c3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MTk2MDcsImV4cCI6MjA1Mzk5NTYwN30.h0o8R_dp2KRPbakd6Ha4swbryq_zKRQMOW8Xvfw5TVU'

export  const supabase = createClient(supabaseUrl, supabaseKey)