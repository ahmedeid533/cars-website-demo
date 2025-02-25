import React from 'react'
import ProfileTabs from './ProfileTabs'
import ConfirmedOrders from './ConfirmedOrders'

const ProfileTabsAndOrders = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 items-start gap-5 gap-x-0 lg:gap-x-5'>
      <ProfileTabs />
      <ConfirmedOrders />
    </div>
  )
}

export default ProfileTabsAndOrders