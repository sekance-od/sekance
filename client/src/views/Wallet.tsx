import React from 'react'
import Layout from './Layout'
// icons
import { FilterableDatatable } from '../componenets/filterabledatatable'
import { Markets } from '../componenets/markets'
import { ProfileHeader } from '../componenets/profileheader'
import { ProfileBody } from '../componenets/profilebody'

const Wallet = () => {
    return (
       <Layout>
            <div className=" h-full">
                <div className="flex ">
                   <div className="w-full p-2">x</div>
                </div>
                <div className="flex">
                   <div className="w-full p-2">y</div>
                </div>
            </div>
       </Layout>
    );
}

export default Wallet