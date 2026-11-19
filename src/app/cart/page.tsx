import { getMyToken } from '@/utilities/GetMyToken'
import React from 'react'

export default async function Cart() {
  const token = await getMyToken();
  console.log('token',token);
  return (
    <div>Cart</div>
  )
}
