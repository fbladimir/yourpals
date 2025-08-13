# Supabase Storage Setup for Profile Pictures

## **Current Status:**
The image upload functionality is implemented but requires Supabase Storage to be configured.

## **What You Need to Do:**

### **1. Create Storage Bucket in Supabase Dashboard:**
1. Go to your Supabase project dashboard
2. Navigate to **Storage** → **Buckets**
3. Click **Create a new bucket**
4. Set bucket name: `avatars`
5. Set bucket as **Public** (so images can be accessed)
6. Click **Create bucket**

### **2. Set Storage Policies:**
1. Go to **Storage** → **Policies**
2. For the `avatars` bucket, add these policies:

**Policy 1: Allow authenticated users to upload**
```sql
CREATE POLICY "Allow authenticated users to upload avatars" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.role() = 'authenticated');
```

**Policy 2: Allow public read access**
```sql
CREATE POLICY "Allow public read access to avatars" ON storage.objects
FOR SELECT USING (bucket_id = 'avatars');
```

**Policy 3: Allow users to update their own avatars**
```sql
CREATE POLICY "Allow users to update their own avatars" ON storage.objects
FOR UPDATE USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
```

### **3. Test the Upload:**
Once configured, users can:
- Click "Upload New Image" 
- Select an image file (JPEG, PNG, GIF, WebP)
- File will be uploaded to Supabase Storage
- Profile picture will update automatically

## **Alternative: Use External Avatar Service**
If you prefer not to set up storage, you can use a service like:
- **Gravatar** (email-based)
- **UI Avatars** (initial-based)
- **DiceBear** (generated avatars)

## **Current Implementation:**
- ✅ File validation (type & size)
- ✅ Error handling
- ✅ Loading states
- ✅ User feedback
- ❌ Storage bucket (needs setup)

The code is ready - just needs the storage bucket configured!
