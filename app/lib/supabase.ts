import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill';

const SUPABASE_URL = 'https://tvawzypsmjffkpyuebju.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2YXd6eXBzbWpmZmtweXVlYmp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMDk3OTUsImV4cCI6MjA3OTc4NTc5NX0.gVlR9LlI6fTA7RsFAm8p8erTHD_yfyfLmG5RdK_r6TM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);