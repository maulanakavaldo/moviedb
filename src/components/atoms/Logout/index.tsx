import Cookies from 'js-cookie';
import React from 'react'

export default function Logout() {
    const handleLogout = () => {
        // Menghapus cookie "ca_userInfo"
        Cookies.remove('ca_userInfo');
        window.location.href = '/login'
      };
  return (
    <button onClick={handleLogout}>Logout</button>
  )
}