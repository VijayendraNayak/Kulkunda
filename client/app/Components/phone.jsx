"use client"

import React from 'react'
import {useSearchParams} from "next/router";
const phone = () => {

    const search=useSearchParams()
    console.log(search.get("phone"))
  return (
    <div></div>
  )
}

export default phone