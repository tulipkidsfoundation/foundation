-- Create admin_users table with a simpler approach
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Add RLS policies
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous select for authentication" ON public.admin_users
  FOR SELECT USING (true);

-- Insert initial admin user
INSERT INTO public.admin_users (email, password_hash)
VALUES ('tulipkids0@gmail.com', 'Tulipkids@2025')
ON CONFLICT (email) DO NOTHING;

-- Create a simpler function to check admin credentials
CREATE OR REPLACE FUNCTION public.check_admin_password(email TEXT, password TEXT)
RETURNS BOOLEAN AS $$
DECLARE
  found BOOLEAN;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE admin_users.email = check_admin_password.email 
    AND admin_users.password_hash = check_admin_password.password
  ) INTO found;
  
  RETURN found;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
