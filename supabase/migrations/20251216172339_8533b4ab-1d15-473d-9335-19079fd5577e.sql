-- Create a function to check submission rate and prevent spam
CREATE OR REPLACE FUNCTION public.check_lead_submission_rate()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  recent_count INTEGER;
BEGIN
  -- Count submissions from same email in last 5 minutes
  SELECT COUNT(*) INTO recent_count
  FROM public.leads
  WHERE created_at > NOW() - INTERVAL '5 minutes'
  AND email = NEW.email;
  
  -- Allow max 3 submissions per email per 5 minutes
  IF recent_count >= 3 THEN
    RAISE EXCEPTION 'Rate limit exceeded. Please wait before submitting again.';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to enforce rate limiting before insert
CREATE TRIGGER enforce_lead_rate_limit
  BEFORE INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.check_lead_submission_rate();