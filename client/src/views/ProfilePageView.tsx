import React from 'react'
import Layout from './Layout'
// icons
import { FilterableDatatable } from '../componenets/filterabledatatable'
import { Markets } from '../componenets/markets'
import { ProfileHeader } from '../componenets/profileheader'
import { ProfileBody } from '../componenets/profilebody'

const ProfilePageView = () => {
    return (
       <Layout>
            <div className="bg-slate-300 h-full">
                <div className="flex ">
                   <div className="w-full p-2"><ProfileHeader/></div>
                </div>
                <div className="flex ">
                   <div className="w-full p-2"><ProfileBody/></div>
                </div>
            </div>
       </Layout>
    );
}

export default ProfilePageView