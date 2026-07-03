const supabaseUrl = 'https://ncsuipvenncdlqrekpji.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jc3VpcHZlbm5jZGxxcmVrcGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4ODg4NjEsImV4cCI6MjA5ODQ2NDg2MX0.nFtQKz-_OKrUNyQ71h2D-ZwFS0UA9DDqoiG1ThY6TxY';

window.supabaseClient = null;

window.initSupabase = function() {
    if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
        console.error("❌ Supabase هنوز آماده نیست");
        return false;
    }
    
    window.supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
    console.log("✅ Supabase Client ساخته شد");
    return true;
};