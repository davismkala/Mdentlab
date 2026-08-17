
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  clinic_name text,
  email text NOT NULL,
  phone text,
  country text,
  subject text,
  message text NOT NULL
);
GRANT INSERT ON public.contact_submissions TO anon;
GRANT SELECT, INSERT ON public.contact_submissions TO authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can read contact submissions" ON public.contact_submissions FOR SELECT TO authenticated USING (true);

CREATE TABLE public.booking_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  clinic_name text,
  email text NOT NULL,
  phone text,
  country text,
  service_interest text,
  preferred_contact_method text,
  message text
);
GRANT INSERT ON public.booking_requests TO anon;
GRANT SELECT, INSERT ON public.booking_requests TO authenticated;
GRANT ALL ON public.booking_requests TO service_role;
ALTER TABLE public.booking_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit booking request" ON public.booking_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can read booking requests" ON public.booking_requests FOR SELECT TO authenticated USING (true);

CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  email text NOT NULL UNIQUE
);
GRANT INSERT ON public.newsletter_subscribers TO anon;
GRANT SELECT, INSERT ON public.newsletter_subscribers TO authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can subscribe" ON public.newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can read subscribers" ON public.newsletter_subscribers FOR SELECT TO authenticated USING (true);

CREATE TABLE public.career_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  position text,
  years_experience text,
  cover_note text,
  cv_url text
);
GRANT INSERT ON public.career_applications TO anon;
GRANT SELECT, INSERT ON public.career_applications TO authenticated;
GRANT ALL ON public.career_applications TO service_role;
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can apply" ON public.career_applications FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "Authenticated can read applications" ON public.career_applications FOR SELECT TO authenticated USING (true);

CREATE TABLE public.blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  excerpt text,
  body text,
  author_name text,
  published_at timestamptz,
  featured_image_url text,
  is_published boolean NOT NULL DEFAULT true
);
GRANT SELECT ON public.blog_posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.blog_posts TO authenticated;
GRANT ALL ON public.blog_posts TO service_role;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published posts are public" ON public.blog_posts FOR SELECT TO anon, authenticated USING (is_published = true);
CREATE POLICY "Authenticated can manage posts" ON public.blog_posts FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text,
  event_date timestamptz,
  location text,
  image_url text,
  is_past boolean NOT NULL DEFAULT false,
  registration_url text
);
GRANT SELECT ON public.events TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Events are public" ON public.events FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Authenticated can manage events" ON public.events FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Anyone can upload a CV" ON storage.objects FOR INSERT TO anon, authenticated WITH CHECK (bucket_id = 'cvs');
CREATE POLICY "Authenticated can read CVs" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'cvs');

INSERT INTO public.blog_posts (slug, title, excerpt, body, author_name, published_at, featured_image_url, is_published) VALUES
('dental-lab-for-east-africa',
 'The Importance of Choosing the Right Dental Lab for Your East African Clinic',
 'Finding a reliable dental lab for East…',
 '[PLACEHOLDER BODY — to be replaced with the real article copy.] Finding a reliable dental lab for East African clinics matters for turnaround time, fit consistency and patient outcomes. This placeholder stands in for the full article.',
 'Kevin', '2025-03-15T09:00:00Z',
 'https://i0.wp.com/mdentlab.com/wp-content/uploads/2025/03/close-up-dentist-explaining-image-scaled.jpg?fit=2560%2C1707&ssl=1', true),
('digital-dental-lab-services-east-africa',
 'Digital Dental Lab Services in East Africa: Transforming Dentistry with MDent',
 'Introduction Dental laboratories play a pivotal role…',
 '[PLACEHOLDER BODY — to be replaced with the real article copy.] Dental laboratories play a pivotal role in modern dentistry across East Africa. This placeholder stands in for the full article.',
 'MDent Lab', '2025-01-26T09:00:00Z',
 'https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/DSC_6642-scaled.jpg?fit=2560%2C1701&ssl=1', true),
('transforming-digital-dental-solutions-in-east-africa',
 'MDent Transforming Digital Dental Solutions in East Africa',
 'Middle East Dental Laboratory (MDent) is proud…',
 '[PLACEHOLDER BODY — to be replaced with the real article copy.] Middle East Dental Laboratory (MDent) is proud to expand digital dental solutions across East Africa. This placeholder stands in for the full article.',
 'MDent Lab', '2025-01-13T09:00:00Z',
 'https://i0.wp.com/mdentlab.com/wp-content/uploads/2025/01/Uganda111.png?fit=1536%2C1024&ssl=1', true);
