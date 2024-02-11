import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'
const PublicProtected = ({compo}) => {
    const {user} = useSelector(state => state.user)
    return <>
        {/*  */}
    </>
}

export default PublicProtected
