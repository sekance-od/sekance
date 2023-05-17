import React from 'react'
import Layout from './Layout'
// icons
import { ProfileHeader, ProfileBody, FilterableDatatable, Markets } from '../componenets'

const ProfilePageView = () => {
  return (
    <Layout>
      <div className=" h-full">
        <div className="flex ">
          <div className="w-full p-2">
            <ProfileHeader />
          </div>
        </div>
        <div className="flex">
          <div className="w-full p-2">
            <ProfileBody />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProfilePageView
