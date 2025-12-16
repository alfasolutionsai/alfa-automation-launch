-- Add explicit UPDATE policy - only service role can update leads
CREATE POLICY "Service role can update leads"
ON public.leads
FOR UPDATE
USING (false)
WITH CHECK (false);

-- Add explicit DELETE policy - only service role can delete leads  
CREATE POLICY "Service role can delete leads"
ON public.leads
FOR DELETE
USING (false);