-- Add length constraints to leads table columns
ALTER TABLE public.leads
  ADD CONSTRAINT leads_name_length CHECK (char_length(name) <= 100),
  ADD CONSTRAINT leads_company_length CHECK (char_length(company) <= 200),
  ADD CONSTRAINT leads_email_length CHECK (char_length(email) <= 255),
  ADD CONSTRAINT leads_phone_length CHECK (phone IS NULL OR char_length(phone) <= 20),
  ADD CONSTRAINT leads_industry_length CHECK (char_length(industry) <= 200),
  ADD CONSTRAINT leads_challenges_length CHECK (char_length(challenges) <= 5000);