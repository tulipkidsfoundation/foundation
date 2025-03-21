-- Create admin_users table
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Add RLS policies
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Create secure function to check password (without exposing the hash)
CREATE OR REPLACE FUNCTION public.check_admin_password(email TEXT, password TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  stored_hash TEXT;
BEGIN
  SELECT password_hash INTO stored_hash FROM public.admin_users WHERE email = check_admin_password.email;
  
  IF stored_hash IS NULL THEN
    RETURN FALSE;
  END IF;
  
  -- Using pgcrypto for password verification
  RETURN crypt(password, stored_hash) = stored_hash;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Insert initial admin user with hashed password
-- Password: Tulipkids@2025
INSERT INTO public.admin_users (email, password_hash)
VALUES ('tulipkids0@gmail.com', crypt('Tulipkids@2025', gen_salt('bf')));