-- Test admin credentials directly
DO $$
DECLARE
  result BOOLEAN;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE email = 'tulipkids0@gmail.com' 
    AND password_hash = 'Tulipkids@2025'
  ) INTO result;
  
  RAISE NOTICE 'Credential check result: %', result;
END;
$$;