import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://ikzkarutfadnglzimnwp.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlremthcnV0ZmFkbmdsemltbndwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1OTkxMTUsImV4cCI6MjA3OTE3NTExNX0.jO9Lm3cFgUK5E33MVxMJLHk9XWnr14_njxUPD18m-VQ'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
