import React from 'react'
import ListPopular from './listPopuler'

export const metadata = {
  title: "Popular",
};

export default function Popular() {
  return (
    <div className="min-h-screen">
      <ListPopular/>
    </div>
  )
}
