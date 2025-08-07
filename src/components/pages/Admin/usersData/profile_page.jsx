import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { state: user } = useLocation();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">No User Data Found</h2>
          <p className="text-white/70 mb-6">We couldn't find the user information you're looking for.</p>
          <button 
            onClick={() => navigate(-1)} 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6 flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl border border-white/20 md:-mt-32">
        {/* Header with gradient */}
        <div className="h-32 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-4 left-6">
            <h1 className="text-3xl font-bold text-white md:-mt-25">User Profile</h1>
            <p className="text-white/80">Personal Information</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row relative -mt-16">
          {/* Profile Image Section */}
          <div className="lg:w-1/3 flex flex-col items-center p-8 z-10">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <img
                src={`https://i.pravatar.cc/200?u=${user.id}`}
                alt="User avatar"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mt-4 text-center">{user.name}</h2>
            <p className="text-blue-200 text-center">@{user.username}</p>
            
            {/* Quick Stats */}
            <div className="flex space-x-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">4.8</div>
                <div className="text-xs text-white/70">Rating</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">127</div>
                <div className="text-xs text-white/70">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
                <div className="text-2xl font-bold text-white">3.2k</div>
                <div className="text-xs text-white/70">Followers</div>
              </div>
            </div>
          </div>

          {/* User Information Section */}
          <div className="lg:w-2/3 p-8 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Contact</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-white/80">
                    <span className="text-white/60 w-16 text-sm">Email:</span>
                    <span className="text-blue-300">{user.email}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <span className="text-white/60 w-16 text-sm">Phone:</span>
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <span className="text-white/60 w-16 text-sm">Website:</span>
                    <span className="text-purple-300">{user.website}</span>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Company</h3>
                </div>
                <div className="space-y-3">
                  <div className="text-white/80">
                    <span className="text-white/60 text-sm block">Organization:</span>
                    <span className="text-lg font-medium">{user.company.name}</span>
                  </div>
                  <div className="text-white/80">
                    <span className="text-white/60 text-sm block">Catchphrase:</span>
                    <span className="text-sm italic text-purple-300">{user.company.catchPhrase || "Innovation at its finest"}</span>
                  </div>
                </div>
              </div>

              {/* Location Information */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-white/80">
                    <span className="text-white/60 text-sm block">Street:</span>
                    <span>{user.address.street}</span>
                  </div>
                  <div className="text-white/80">
                    <span className="text-white/60 text-sm block">City:</span>
                    <span>{user.address.city}</span>
                  </div>
                  <div className="text-white/80">
                    <span className="text-white/60 text-sm block">Zipcode:</span>
                    <span>{user.address.zipcode}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 cursor-pointer bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Users</span>
              </button>
              <button className="flex-1 cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Send Message</span>
              </button>
              <button className="flex-1  cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;