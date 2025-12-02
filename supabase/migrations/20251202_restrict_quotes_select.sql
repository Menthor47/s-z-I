-- Restrict public read access to quotes
-- This migration removes the overly-permissive policy that allowed anyone to view all quotes
-- and restores a more restrictive policy suitable for authenticated access only.

-- Drop the permissive policy if it exists
DROP POLICY IF EXISTS "Anyone can view quotes" ON public.quotes;

-- Restore a safer policy that only allows authenticated users to read their own quotes by email.
-- Note: the current frontend does not read from quotes at all, so this effectively disables
-- public SELECT while still allowing future authenticated use-cases.
CREATE POLICY "Users can view their own quotes by email"
ON public.quotes
FOR SELECT
TO authenticated
USING (
  email = current_setting('request.jwt.claims', true)::json->>'email'
);
