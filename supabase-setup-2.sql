alter table public.profiles
  add column full_name text,
  add column phone text;

create unique index if not exists profiles_phone_key
  on public.profiles (phone) where phone is not null;

-- Endurecendo a privacidade agora que a tabela guarda nome/telefone (PII):
-- antes a policy de select era pública (necessária só pra simplicidade inicial).
drop policy if exists "profiles are viewable by everyone" on public.profiles;

create policy "users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);
