-- Add the t_shirt_sizes column to the registrations table
ALTER TABLE public.registrations 
ADD COLUMN t_shirt_sizes TEXT[] DEFAULT '{}';

-- Add comment to the column for documentation
COMMENT ON COLUMN public.registrations.t_shirt_sizes IS 'Array of t-shirt sizes for all participants';
