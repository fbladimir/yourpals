"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
  onUserUpdate?: (updatedUser: any) => void;
}

export default function AccountModal({ isOpen, onClose, user, onUserUpdate }: AccountModalProps) {
  const [activeTab, setActiveTab] = useState('profile');
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    full_name: user?.user_metadata?.full_name || '',
    username: user?.user_metadata?.username || user?.email?.split('@')[0] || '',
    phone: user?.user_metadata?.phone || ''
  });
  const [tempValue, setTempValue] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Update form when user changes
  useEffect(() => {
    if (user) {
      setEditForm({
        full_name: user.user_metadata?.full_name || '',
        username: user.user_metadata?.username || user.email?.split('@')[0] || '',
        phone: user.user_metadata?.phone || ''
      });
    }
  }, [user]);

  const handleUpdateProfile = async (field: string, value: string) => {
    try {
      const { error } = await supabase.auth.updateUser({
        data: {
          [field]: value
        }
      });

      if (error) throw error;

      // Update local state
      setEditForm(prev => ({
        ...prev,
        [field]: value
      }));
      
      setEditingField(null);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const startEditing = (field: string, currentValue: string) => {
    setEditingField(field);
    setTempValue(currentValue);
  };

  const saveEdit = (field: string) => {
    handleUpdateProfile(field, tempValue);
  };

  const cancelEdit = () => {
    setEditingField(null);
    setTempValue('');
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type and size
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Please select a valid image file (JPEG, PNG, GIF, or WebP)');
      return;
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert('Image file size must be less than 5MB');
      return;
    }

    try {
      setIsUploading(true);
      
      // Create a unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}_${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      // Upload to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw new Error('Failed to upload image');
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // Update user metadata with new avatar
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          avatar_url: publicUrl
        }
      });

      if (updateError) throw updateError;

      // Update local user state to show the new image immediately
      user.user_metadata = {
        ...user.user_metadata,
        avatar_url: publicUrl
      };

      // Notify parent component of user update
      if (onUserUpdate) {
        onUserUpdate(user);
      }

      setIsUploading(false);
      
      // Show success message (but don't close modal)
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-[60] transform translate-x-full transition-transform duration-300';
      successMessage.innerHTML = `
        <div class="flex items-center space-x-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Profile picture updated successfully!</span>
        </div>
      `;
      document.body.appendChild(successMessage);
      
      // Animate in
      setTimeout(() => {
        successMessage.classList.remove('translate-x-full');
      }, 100);
      
      // Remove after 3 seconds
      setTimeout(() => {
        successMessage.classList.add('translate-x-full');
        setTimeout(() => {
          document.body.removeChild(successMessage);
        }, 300);
      }, 3000);
      
    } catch (error) {
      console.error('Error uploading image:', error);
      setIsUploading(false);
      
      // Show user-friendly error message
      if (error instanceof Error) {
        alert(`Upload failed: ${error.message}`);
      } else {
        alert('Failed to upload image. Please try again.');
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      onClose();
      // Redirect will be handled by the parent component
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8">
                <Image
                  src="/yourpalsRobot.png"
                  alt="YourPals Robot"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Account Settings</h1>
                <p className="text-xs sm:text-sm text-gray-600">Manage your profile & security</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button
                onClick={handleSignOut}
                className="text-red-600 hover:text-red-700 transition-colors text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-lg hover:bg-red-50"
              >
                Sign out
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'profile' 
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white rounded-t-lg' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Profile</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`flex-1 px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'security' 
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-white rounded-t-lg' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center justify-center space-x-1.5 sm:space-x-2">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Security</span>
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 max-h-[70vh] sm:max-h-[60vh] overflow-y-auto">
            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 sm:space-y-6"
              >
                {/* Profile Picture */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="relative group">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center overflow-hidden shadow-lg relative">
                      {user?.user_metadata?.avatar_url ? (
                        <Image
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover relative z-10"
                        />
                      ) : (
                        <span className="text-white font-bold text-2xl sm:text-3xl relative z-10">
                          {user?.email?.charAt(0).toUpperCase() || 'U'}
                        </span>
                      )}
                      
                      {/* Shiny overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
                      
                      {/* Glowing ring on hover */}
                      <div className="absolute inset-0 rounded-full ring-4 ring-white/0 group-hover:ring-white/30 transition-all duration-300 group-hover:scale-105"></div>
                      
                      {/* Camera icon overlay */}
                      <div className="absolute inset-0 bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-2">Profile Picture</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3">Upload a new profile image to personalize your account</p>
                    <label className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 cursor-pointer text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        disabled={isUploading}
                      />
                      {isUploading ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-3 sm:h-4 w-3 sm:w-4 border-2 border-white border-t-transparent"></div>
                          <span>Uploading...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <span>Upload New Image</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-2 sm:space-y-3">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Full Name</label>
                  {editingField === 'full_name' ? (
                    <div className="space-y-2 sm:space-y-3">
                      <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                        placeholder="Enter your full name"
                        autoFocus
                      />
                      <div className="flex space-x-2 sm:space-x-3">
                        <button
                          onClick={() => saveEdit('full_name')}
                          className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-xs sm:text-sm"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium text-xs sm:text-sm"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
                      <span className="text-gray-900 font-medium text-sm sm:text-base">
                        {editForm.full_name || 'Not set'}
                      </span>
                      <button
                        onClick={() => startEditing('full_name', editForm.full_name)}
                        className="text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>

                {/* Username */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">Username</label>
                  {editingField === 'username' ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400"
                        placeholder="Enter username"
                        autoFocus
                      />
                      <div className="flex space-x-3">
                        <button
                          onClick={() => saveEdit('username')}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-900 font-medium">
                        {editForm.username || 'Not set'}
                      </span>
                      <button
                        onClick={() => startEditing('username', editForm.username)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-900 font-medium">{user.email}</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Primary
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm font-medium">Cannot change</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                  {editingField === 'phone' ? (
                    <div className="space-y-3">
                      <input
                        type="tel"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-400"
                        placeholder="+1 (555) 123-4567"
                        autoFocus
                      />
                      <div className="flex space-x-3">
                        <button
                          onClick={() => saveEdit('phone')}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Save Changes
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <span className="text-gray-900 font-medium">
                        {editForm.phone || 'No phone number'}
                      </span>
                      <button
                        onClick={() => startEditing('phone', editForm.phone)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium px-3 py-1 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        {editForm.phone ? 'Edit' : 'Add'}
                      </button>
                    </div>
                  )}
                </div>

                {/* Connected Accounts */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700">Connected Accounts</label>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <p className="text-gray-600 text-sm mb-4">Link your social accounts for easier sign-in</p>
                    <div className="space-y-3">
                      <button className="w-full flex items-center justify-center space-x-3 p-3 border-2 border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="font-medium text-gray-700 group-hover:text-blue-600">Connect Google</span>
                      </button>
                      <button className="w-full flex items-center justify-center space-x-3 p-3 border-2 border-gray-300 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 group">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#000000" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="font-medium text-gray-700 group-hover:text-blue-600">Connect Apple</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="mb-3 sm:mb-0">
                      <h3 className="font-semibold text-gray-900">Two-factor authentication</h3>
                      <p className="text-sm text-gray-600 mt-1">Add an extra layer of security to your account</p>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Enable 2FA
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="mb-3 sm:mb-0">
                      <h3 className="font-semibold text-gray-900">Change password</h3>
                      <p className="text-sm text-gray-600 mt-1">Update your password regularly for better security</p>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Change Password
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                    <div className="mb-3 sm:mb-0">
                      <h3 className="font-semibold text-gray-900">Login sessions</h3>
                      <p className="text-sm text-gray-600 mt-1">View and manage your active login sessions</p>
                    </div>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      View Sessions
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span>Secured by Supabase</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
