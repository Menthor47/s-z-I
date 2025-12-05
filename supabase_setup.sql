-- Enable RLS on quotes table
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for quotes (public lead generation)
CREATE POLICY "Allow public inserts for quotes" 
ON quotes FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated inserts for quotes (internal/logged-in users)
CREATE POLICY "Allow authenticated inserts for quotes" 
ON quotes FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Enable RLS on contacts table
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts for contacts
CREATE POLICY "Allow public inserts for contacts" 
ON contacts FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow authenticated inserts for contacts
CREATE POLICY "Allow authenticated inserts for contacts" 
ON contacts FOR INSERT 
TO authenticated 
WITH CHECK (true);

-- Note: To set up email notifications, you would typically use Supabase Edge Functions.
-- Below is a placeholder for a database trigger if you were using an internal mailer, 
-- but Edge Functions are the recommended approach for sending emails via Resend/SendGrid.

/*
-- Example Trigger for Edge Function (requires 'supabase_functions' extension)
create trigger "on_quote_created"
  after insert on "public"."quotes"
  for each row execute function supabase_functions.http_request(
    'https://YOUR_PROJECT_REF.supabase.co/functions/v1/send-quote-email',
    'POST',
    '{"Content-Type":"application/json"}',
    '{}',
    '1000'
  );
*/
