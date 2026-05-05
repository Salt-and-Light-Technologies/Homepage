-- ============================================================
-- Salt and Light Technologies — Blog Setup
-- Run this in your Supabase project → SQL Editor
-- ============================================================

-- 1. Posts table
create table if not exists posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title        text not null,
  excerpt      text,
  thumbnail_url text,
  content      jsonb not null default '[]',
  published_at timestamptz not null default now(),
  created_at   timestamptz not null default now()
);

-- 2. Row Level Security
alter table posts enable row level security;

-- Public can read all posts
create policy "Public read" on posts
  for select using (true);

-- Only authenticated users (you) can insert / update / delete
create policy "Auth insert" on posts
  for insert with check (auth.role() = 'authenticated');

create policy "Auth update" on posts
  for update using (auth.role() = 'authenticated');

create policy "Auth delete" on posts
  for delete using (auth.role() = 'authenticated');

-- ============================================================
-- 3. Storage bucket for blog images
-- Run in SQL Editor OR do it via the Supabase dashboard:
--   Storage → New bucket → Name: blog-images → Public: ON
-- ============================================================

insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

-- Public can read objects in the bucket
create policy "Public read images" on storage.objects
  for select using (bucket_id = 'blog-images');

-- Only authenticated users can upload
create policy "Auth upload images" on storage.objects
  for insert with check (
    bucket_id = 'blog-images' and auth.role() = 'authenticated'
  );

-- Only authenticated users can delete their uploads
create policy "Auth delete images" on storage.objects
  for delete using (
    bucket_id = 'blog-images' and auth.role() = 'authenticated'
  );
