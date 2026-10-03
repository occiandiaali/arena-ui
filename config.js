/* Shared by index.html and home.html. Load AFTER the supabase-js script. */
window.CONFIG = {
  USE_LOCAL: true, // true => users.json for the grid, false => Supabase table
  BYPASS_AUTH: false, // true => skip the login guard on home.html (layout testing only)
  PAGE_SIZE: 9, //12,
  LOCAL_URL: "users.json",
  SUPABASE_URL: "https://vuyxoceswintvkxqquri.supabase.co", //"https://uaojbjkkkxzbyyokdjov.supabase.co",
  SUPABASE_ANON_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1eXhvY2Vzd2ludHZreHFxdXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzNDg2NzksImV4cCI6MjA4OTkyNDY3OX0.lRdUYiYIswcX2G8llsUnY2sD5dgblyuBOKulU2_56p8", //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhb2piamtra3h6Ynl5b2tkam92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1Njg0NzQsImV4cCI6MjA5ODE0NDQ3NH0.qPveM7D-TMG4_59hanubn2wFiVFkLz2X-IcbAOAVpvU",   // anon/public key only
  SUPABASE_SELECT: "id,username,sex,age,avatar,interests",
  EXTERNAL_URL_TEMPLATE: "http://127.0.0.1:5000", //"https://example.com/?user={username}",
  EXTERNAL_MODE: "tab", // "tab" = new browser tab, "modal" = full-screen iframe
  HOME_PAGE: "home.html",
  LOGIN_PAGE: "index.html",
};

window.sb = supabase.createClient(
  CONFIG.SUPABASE_URL,
  CONFIG.SUPABASE_ANON_KEY,
);
